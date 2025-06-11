import { Button, CloseButton, Drawer, Flex, Portal } from "@chakra-ui/react";
import CreateProduct from "./CreateProduct";

export default function DrawerComponent() {
    return (
        <Drawer.Root bg="gray.200">
            <Drawer.Trigger asChild>
                <Button size="sm" bg="#080E46" color="white" _hover={{ bg: "blue.700" }}>
                    Funcionalidades
                </Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content bg="gray.200">
                        <Drawer.Header>
                            <Drawer.Title></Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <Flex direction="column" gap={4}>
                                <CreateProduct />
                            </Flex>
                        </Drawer.Body>

                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" bg="blue.700" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    );
}
