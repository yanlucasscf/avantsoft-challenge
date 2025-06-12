import { Button, CloseButton, Dialog, Portal, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function DialogComponent({
    buttonLabel,
    dialogTitle,
    dialogBody,
    handleSubmit,
    handleSubmitButtonText = "Criar",
    cancelFunction,
    open,
    setOpen,
}) {
    return (
        <Dialog.Root
            open={open}
            onOpenChange={e => {
                setOpen(e.open);
            }}
        >
            <Dialog.Trigger asChild>
                <Button size="md" bg="blue.600" color={"white"} _hover={{ bg: "blue.700" }} p={2}>
                    {buttonLabel}
                </Button>
            </Dialog.Trigger>

            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner display="flex" justifyContent="center" alignItems="center">
                    <Dialog.Content bg="white" p={14} borderRadius="md" boxShadow="lg">
                        <Dialog.Header>
                            <Dialog.Title color="blackAlpha.800" fontSize="xl" w="100%" mb={4}>
                                <Text textAlign="center" color="#080E46">
                                    {dialogTitle}
                                </Text>
                            </Dialog.Title>
                        </Dialog.Header>

                        <Dialog.Body>{dialogBody}</Dialog.Body>

                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button
                                    variant="outline"
                                    bg="blackAlpha.800"
                                    color="white"
                                    onClick={cancelFunction}
                                >
                                    Cancelar
                                </Button>
                            </Dialog.ActionTrigger>
                            <Button bg="blue.200" onClick={handleSubmit}>
                                {handleSubmitButtonText}
                            </Button>
                        </Dialog.Footer>

                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}
