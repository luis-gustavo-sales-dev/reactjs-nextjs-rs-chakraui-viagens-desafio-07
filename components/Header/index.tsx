import { Flex } from "@chakra-ui/react";
import {Image} from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Flex
        as='div'
        bg='white'
        h="100"
        align="center"
        justify="center"
      >
        <Link href="/">
          <Image
            height='46'
            src="/images/logo.svg"
            alt="worldtrip logo"
          />
        </Link>
      </Flex>
    </>
  );
}
