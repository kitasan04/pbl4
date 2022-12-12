import { Box, Text, Divider, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link, Button, useColorMode, useColorModeValue, bgGradient } from "@chakra-ui/react";
import deviceIcon from "../public/favicon.ico";
//import { MoonIcon, SunIcon} from "@chakra-ui/icons";
//import MoonButtonIcon from "../images/brand/moon.svg";

export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const color = useColorModeValue("#A16EFF", "#D9E5FF")
  return (
    
    <Box
      bg={color}
      opacity="0.9"
      color="#ffffff"
      h={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >

    <Box display="flex" justifyContent="center">
            <Image 
              boxSize="80px"
              src={deviceIcon.src} />
        </Box>

      <Divider w={30} borderColor="#ECC94B" opacity="0.5" ml={14} />
      <Grid templateColumns="repeat(3, 1fr)" gap={6} ml={14} mr={14}>
        <Link href="https://tami719.github.io/mysite/">
        <Text
          fontSize="3xl"
          fontFamily="Rajdhani"
          transition="all .0.2s"
          _hover={{ textDecoration: "underline 1px" }}
        >
          Home
        </Text>
        </Link>

        <Link href="https://tami719.github.io/mysite/introduce_mila/mila.html">
        <Text
          fontSize="3xl"
          fontFamily="Rajdhani"
          _hover={{ textDecoration: "underline 1px" }}
        >
          mila
        </Text>
        </Link>
        <Link href="https://tami719.github.io/mysite/introduce_galaxy/introduce_galaxy.html">
        <Text
          fontSize="3xl"
          fontFamily="Rajdhani"
          _hover={{ textDecoration: "underline 1px" }}
        >
          galaxy
        </Text>
        </Link>
      </Grid>
      <Divider
        h={14}
        orientation="vertical"
        borderColor="ffffff"
        opacity="1"
        mr={14}
      />

      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? '😜' : '😉'}
      </Button>
    </Box>
  );
};
