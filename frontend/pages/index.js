import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import DialogComponent from "./components/Dialog";
import CreateProduct from "./components/CreateProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCardComponent from "./components/ProductCardComponent.js";
import DrawerComponent from "./components/Drawer";

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

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box p={4}>
            <Box display={{ base: "none", md: "block" }} p={4}>
                <CreateProduct onProductCreated={onProductsChange} />
            </Box>

            {isMobile && (
                <Box mt={6} p={4} borderRadius="md">
                    <Box textAlign="center" fontWeight="bold">
                        <DrawerComponent />
                    </Box>
                </Box>
            )}
            <Flex
                direction={{ base: "column", md: "row" }}
                wrap="wrap"
                justify="center"
                align="flex-start"
                gap={4}
                mt={6}
            >
                {products.length > 0 ? (
                    products.map(product => (
                        <ProductCardComponent
                            key={product.id}
                            product={product}
                            onProductsChange={onProductsChange}
                        />
                    ))
                ) : (
                    <Box mt={4}>Nenhum produto encontrado.</Box>
                )}
            </Flex>
        </Box>
    );
}
