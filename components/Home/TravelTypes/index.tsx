import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

export default function TravelTypes () {
  return (
    <Grid
      margin="80px 140px 80px 140px"
      templateColumns="repeat(5, 1fr)"
      columnGap="10px"
    >
      <Box>
        <Image
          h="85px"
          margin="0px auto"
          src="/images/cocktail.png"
          alt="drinks"
        />

        <Text
          as="h3"
          color="heading"
          textAlign="center"
          fontSize="24px"
          marginTop="24px"
        >
          vida noturna
        </Text>
      </Box>
      <Box>
        <Image
          h="85px"
          margin="0px auto"
          src="/images/surf.png"
          alt="drinks"
        />

        <Text
          as="h3"
          color="heading"
          textAlign="center"
          fontSize="24px"
          marginTop="24px"
        >
          praia
        </Text>
      </Box>
      <Box>
        <Image
          h="85px"
          margin="0px auto"
          src="/images/building.png"
          alt="drinks"
        />

        <Text
          as="h3"
          color="heading"
          textAlign="center"
          fontSize="24px"
          marginTop="24px"
        >
          moderno
        </Text>
      </Box>
      <Box>
        <Image
          h="85px"
          margin="0px auto"
          src="/images/museum.png"
          alt="drinks"
        />

        <Text
          as="h3"
          color="heading"
          textAlign="center"
          fontSize="24px"
          marginTop="24px"
        >
          clássico
        </Text>
      </Box>
      <Box>
        <Image
          h="85px"
          margin="0px auto"
          src="/images/earth.png"
          alt="drinks"
        />

        <Text
          as="h3"
          color="heading"
          textAlign="center"
          fontSize="24px"
          marginTop="24px"
        >
          e mais...
        </Text>
      </Box>
    </Grid>
  );
}