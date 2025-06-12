import { Box, Flex } from "@chakra-ui/react";
import InputField from "./InputField";
import DialogComponent from "./Dialog";
import { useState } from "react";
import axios from "axios";
import { getErrorMessage } from "../utils/errorMessage";
import ProductForm from "./ProductForm";
import { useToast } from "@/context/ToastContext";

export default function CreateProduct({ onProductCreated }) {
    const { notifySuccess, notifyError } = useToast();
    const [newProduct, setNewProduct] = useState({
        name: "",
        sku: "",
        price: "",
    });

    const clearForm = () => {
        setNewProduct({
            name: "",
            sku: "",
            price: "",
        });
    };
    const [open, setOpen] = useState(false);

    const handleChangeForm = e => {
        const { name, value } = e.target;

        setNewProduct(prev => ({ ...prev, [name]: value }));
    };

    const saveProduct = async product => {
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/products`,
                product,
            );

            if (response.status === 201) {
                notifySuccess("Produto cadastrado com sucesso!");
                onProductCreated();
                setOpen(false);
                return;
            }
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            notifyError(errorMessage);
        } finally {
            clearForm();
        }
    };

    const handleSubmitForm = async () => {
        const { name, sku, price } = newProduct;
        if (!name || !sku || !price) {
            notifyError("Todos os campos são obrigatórios.");
            return;
        }

        await saveProduct(newProduct);
    };

    return (
        <DialogComponent
            buttonLabel="Cadastrar produto"
            dialogTitle="Cadastrar produto"
            dialogBody={
                <ProductForm handleChangeForm={handleChangeForm} productData={newProduct} />
            }
            handleSubmit={handleSubmitForm}
            open={open}
            setOpen={setOpen}
            cancelFunction={clearForm}
        />
    );
}
