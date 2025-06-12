import { Button, Card, Text } from "@chakra-ui/react";
import DialogComponent from "./Dialog";
import { useState } from "react";
import ProductForm from "./ProductForm";
import { getErrorMessage } from "../utils/errorMessage";
import axios from "axios";
import { useToast } from "@/context/ToastContext";
import Popover from "./Popover";
import PopoverComponent from "./Popover";

export default function ProductCardComponent({ product, onProductsChange }) {
    const { notifySuccess, notifyError } = useToast();
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
                notifySuccess("Produto atualizado com sucesso!");
                setIsEditing(false);
                onProductsChange();
                return;
            }
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            notifyError(errorMessage);
        }
    };

    const handleSubmit = async () => {
        const { name, sku, price } = formData;
        if (!name || !sku || !price) {
            notifyError("Todos os campos são obrigatórios.");
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
                notifySuccess("Produto excluído com sucesso!");
                onProductsChange();
                return;
            }
        } catch (error) {
            notifyError("Erro inesperado ao excluir o produto.");
        }
    };

    return (
        <Card.Root
            width="320px"
            bg="white"
            borderRadius="lg"
            shadow="md"
            border="1px solid"
            borderColor="gray.200"
        >
            <Card.Body gap="2">
                <Card.Title textAlign="center" color="black" fontWeight="bold" mt={2}>
                    {product.name}
                </Card.Title>

                <Card.Description as="div">
                    <Text color="gray.600" fontWeight="bold">
                        SKU: {product.sku}
                    </Text>
                    <Text color="gray.600" fontWeight="bold">
                        Preço:{" "}
                        {product.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </Text>
                    <Text color="gray.600" fontWeight="bold">
                        Primeira letra do alfabeto faltante: {product.firstMissingAlphabetLetter}
                    </Text>
                </Card.Description>
            </Card.Body>

            <Card.Footer justifyContent="flex-end" mt={5} gap={4} p={4}>
                <DialogComponent
                    buttonLabel="Editar"
                    dialogTitle="Editar produto"
                    dialogBody={
                        <ProductForm handleChangeForm={handleChangeForm} productData={formData} />
                    }
                    open={isEditing}
                    setOpen={setIsEditing}
                    handleSubmit={handleSubmit}
                    handleSubmitButtonText="Salvar"
                    cancelFunction={resetData}
                />
                <PopoverComponent
                    buttonLabel="Deletar"
                    titlePopover="Você realmente deseja excluir?"
                    contentPopover="Essa ação é permanente"
                    buttonLabelAction="Excluir"
                    onClickButtonAction={() => handleDeleteProduct(product.id)}
                />
            </Card.Footer>
        </Card.Root>
    );
}
