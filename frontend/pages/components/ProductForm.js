import { Box, Flex } from "@chakra-ui/react";
import InputField from "./InputField";
export default function ProductForm({ handleChangeForm, productData }) {
    return (
        <Flex direction="column" align="center">
            <Box>
                <InputField
                    label="Nome"
                    name="name"
                    placeholder="Digite o nome"
                    required={true}
                    type="text"
                    value={productData.name}
                    handleChangeForm={handleChangeForm}
                />

                <>
                    <InputField
                        label="SKU"
                        name="sku"
                        placeholder="Digite o SKU"
                        type="text"
                        required={true}
                        value={productData.sku}
                        handleChangeForm={handleChangeForm}
                    />

                    <InputField
                        label="Preço"
                        name="price"
                        placeholder="Digite o preço"
                        required={true}
                        type="number"
                        value={productData.price}
                        handleChangeForm={handleChangeForm}
                    />
                </>
            </Box>
        </Flex>
    );
}
