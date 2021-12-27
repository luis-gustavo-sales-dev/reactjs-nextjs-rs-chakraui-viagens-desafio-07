import { Box, Divider, Text } from "@chakra-ui/react";

export default function MessageCallAction () {
  return (
    <Box>
      <Divider w="90px" margin="0px auto" marginBottom="52px" />
      <Text
        fontSize="36px"
        textAlign="center"
        color="heading"
        fontWeight="medium"
      >
        Vamos nessa?
      </Text>
      <Text
        fontSize="36px"
        textAlign="center"
        color="heading"
        fontWeight="medium"
      >
        Então escolha seu continente
      </Text>
    </Box>
  );
}