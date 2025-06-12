import { Box, Flex, Image } from "@chakra-ui/react";
export default function NavBar() {
  return (
    <Box>
      <Flex bgColor="#080E46" p={4}>
        <Image src="/assets/images/logooficial.png" width="200px"></Image>
      </Flex>
    </Box>
  );
}
