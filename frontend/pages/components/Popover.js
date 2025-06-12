import { Button, Flex, Input, Popover, Portal, Text } from "@chakra-ui/react";

export default function PopoverComponent({
    buttonLabel = "Click me",
    titlePopover = "Popover Title",
    contentPopover = "content",
    buttonLabelAction = "Action",
    onClickButtonAction = () => {},
}) {
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Button size="sm" variant="outline" bg="red.600" _hover={{ bg: "red.200" }}>
                    {buttonLabel}
                </Button>
            </Popover.Trigger>
            <Portal>
                <Popover.Positioner>
                    <Popover.Content bg="red.50">
                        <Popover.Arrow />
                        <Popover.Body>
                            <Flex direction="column" alignItems="center">
                                <Popover.Title color="black" fontWeight="bold">
                                    {titlePopover}
                                </Popover.Title>
                                <Text my="4" color="black">
                                    {contentPopover}
                                </Text>
                                <Button
                                    onClick={onClickButtonAction}
                                    bg="red.500"
                                    w="1/2"
                                    _hover={{ bg: "red.600" }}
                                    color="white"
                                >
                                    {buttonLabelAction}
                                </Button>
                            </Flex>
                        </Popover.Body>
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    );
}
