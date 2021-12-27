import { Box, Flex, Grid, Text, VStack, Image, GridItem, Spacer } from "@chakra-ui/react";

export default function Banner () {
  return (
    <Box height={370} w="100%">
      <Box
        height={335}
        w="100%"
        backgroundImage="/images/banner-background.png"
      >
        <Grid templateColumns="repeat(2,1fr)" margin="0px 140px">
          <GridItem>
            <Text fontSize="36px" color="white" marginTop="80px">
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text fontSize="20px" color="text" marginTop="20px">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </GridItem>
          <GridItem>
            <Flex>
              <Spacer />
              <Image
                src="/images/airplane.png"
                marginTop="76px"
                alt="avião no banner"
              />
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}