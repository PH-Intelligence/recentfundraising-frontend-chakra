import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  ChakraProvider,
  VStack,
  Heading,
  Spacer,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Recentlogo from './recentlogo.svg';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import HeroSection from "./components/HeroSection";
import TableMain from "./components/TableMain";

function App() {

  return (
    <VStack p={5}>
      <Flex>
        <NavBar></NavBar>
          <Spacer></Spacer>
      </Flex>
      <Flex>
        <HeroSection></HeroSection>
      </Flex>
      <Flex>
        <TableMain></TableMain>
      </Flex>
      <Flex>
        <Newsletter></Newsletter>
      </Flex>
      <Header></Header>
    </VStack>
  );
}

export default App;