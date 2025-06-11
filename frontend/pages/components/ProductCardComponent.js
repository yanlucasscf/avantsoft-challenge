import { Button, Card, Text } from "@chakra-ui/react";
import DialogComponent from "./Dialog";
import { useState } from "react";
import ProductForm from "./ProductForm";
import { getErrorMessage } from "../utils/errorMessage";
import axios from "axios";

export default function ProductCardComponent({ product, onProductsChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...product });
    const resetData = () => {
        setFormData({ ...product });
    };

    const handleChangeForm = e => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const saveEdit = async editedProduct => {
        try {
            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_API_URL}/products/${editedProduct.id}`,
                {
                    name: editedProduct.name,
                    sku: editedProduct.sku,
                    price: editedProduct.price,
                },
            );

            if (response.status === 200) {
                alert("Produto editado com sucesso!");

                setIsEditing(false);
                onProductsChange();
                return;
            }
        } catch (error) {
            console.log(error);

            const errorMessage = getErrorMessage(error);
            alert(errorMessage);
        }
    };

    const handleSubmit = async () => {
        const { name, sku, price } = formData;
        if (!name || !sku || !price) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }

        await saveEdit(formData);
    };

    const handleDeleteProduct = async id => {
        try {
            const response = await axios.delete(
                `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
            );
            if (response.status === 200) {
                alert("Produto excluído com sucesso!");
                onProductsChange();
                return;
            }
        } catch (error) {
            alert("Erro inesperado ao excluir o produto.");
        }
    };
    return (
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Card.Title textAlign="center">Nome: {product.name}</Card.Title>
                <Card.Description as="div">
                    <Text> SKU: {product.sku}</Text>
                    <Text>
                        Price:{" "}
                        {product.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </Text>
                    <Text>
                        Primeira letra do alfabeto faltante: {product.firstMissingAlphabetLetter}
                    </Text>
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <DialogComponent
                    buttonLabel="Editar"
                    dialogTitle="Editar produto"
                    dialogBody={
                        <ProductForm handleChangeForm={handleChangeForm} productData={formData} />
                    }
                    open={isEditing}
                    setOpen={setIsEditing}
                    handleSubmit={handleSubmit}
                    handleSubmitButtonText="Editar"
                    cancelFunction={resetData}
                />
                <Button variant="outline" onClick={() => handleDeleteProduct(product.id)}>
                    Excluir
                </Button>
            </Card.Footer>
        </Card.Root>
    );
}
