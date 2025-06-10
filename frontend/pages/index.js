import { Box, Button, Flex } from "@chakra-ui/react";
import DialogComponent from "./components/Dialog";
import CreateProduct from "./components/CreateProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCardComponent from "./components/ProductCardComponent.js";
export default function Home() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
            if (response.status === 200) {
                setProducts(response.data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            alert("Failed to fetch products. Please try again later.");
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const onProductsChange = async () => {
        fetchProducts();
    };

    return (
        <Box>
            <Flex display={{ base: "none", md: "flex" }}>
                <Box w="250px" minW="250px" bg="blue.100" p={4} position="sticky" top="0" h="10/12">
                    <Flex direction="column" gap={4}>
                        <CreateProduct onProductCreated={onProductsChange} />
                    </Flex>
                </Box>

                {products.length > 0 && (
                    <Box flex="1" p={4}>
                        <Flex
                            justifyContent="center"
                            alignItems="flex-start"
                            flexWrap="wrap"
                            gap={6}
                            minH="60vh"
                        >
                            {products.map(product => (
                                <ProductCardComponent
                                    key={product.id}
                                    product={product}
                                    onProductsChange={onProductsChange}
                                />
                            ))}
                        </Flex>
                    </Box>
                )}
            </Flex>

            <Box display={{ base: "block", md: "none" }} p={4} bg="green.100" h="100vh">
                <Flex direction="column" gap={4} bg="blue.200" h="100%" justifyContent="start">
                    <Box> kk </Box>
                    {/* <DrawerComponent handleSelectButton={handleSelectButton} /> */}
                </Flex>
            </Box>
        </Box>
    );
}
