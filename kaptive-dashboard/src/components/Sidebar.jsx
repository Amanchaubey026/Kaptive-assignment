import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Divider,
  Icon,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaRegUserCircle, FaChartBar } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { BiSolidBinoculars } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState("left");
  const bgColor = "#0005ff8c";
  const textColor = "white";
  const btnRef = React.useRef();

  const disabledLinkStyle = {
    opacity: 0.4,
    pointerEvents: "none",
  };

  return (
    <Box>
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        size="lg"
        ref={btnRef}
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
        position="fixed"
        top={4}
        left={4}
        zIndex={10}
      />
      <Box
        bg={bgColor}
        w={{ base: "full", md: "220px" }}
        p={4}
        color={textColor}
        position="fixed"
        top={0}
        left={0}
        zIndex={9}
        h="100vh"
        overflowY="auto"
        display={{ base: "none", md: "block" }} 
      >
        <VStack align="stretch" spacing={4} h="100%">
          <Text fontSize="3xl" fontWeight="bold">
            KAPTIVE
          </Text>
          <Divider />
          <Link
            fontSize="xl"
            fontWeight="bold"
            href="#chart"
            _hover={{ bg: "white",opacity: 0.4, h:10, color: bgColor, borderRadius: "md" }}
          >
            <Icon as={FaChartBar} mr={2} fontSize="xl" /> Charts
          </Link>
          <Link
            fontSize="xl"
            fontWeight="bold"
            href="#table"
            _hover={{ bg: "white",opacity: 0.4, h:10, color: bgColor, borderRadius: "md" }}
          >
            <Icon as={FaTableCellsLarge} mr={2} fontSize="xl" /> Tables
          </Link>
          <Link
            fontSize="xl"
            fontWeight="bold"
            href="#"
            _hover={{ bg: "white", color: bgColor, borderRadius: "md" }}
            style={disabledLinkStyle}
          >
            <Icon as={TbReportSearch} mr={2} fontSize="xl" /> Reports
          </Link>
          <Link
            fontSize="xl"
            fontWeight="bold"
            href="#"
            _hover={{ bg: "white", color: bgColor, borderRadius: "md" }}
            style={disabledLinkStyle}
          >
            <Icon as={BiSolidBinoculars} mr={2} fontSize="xl" /> Forecast
          </Link>
          <Spacer />
          <Box
            w="full"
            bg="rgba(255, 255, 255, 0.1)"
            p={3}
            borderRadius="md"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Icon as={FaRegUserCircle} boxSize={5} color={textColor} />
            <Text fontSize="lg" color={textColor} mt={2}>
              John Doe
            </Text>
          </Box>
          <Button
            w="full"
            bg="rgba(255, 255, 255, 0.1)"
            color={textColor}
            mt={2}
            display="flex"
            alignItems="center"
          >
            <Icon as={FiLogOut} mr={2} boxSize={5} color={textColor} />
            Logout
          </Button>
        </VStack>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4} h="100%">
              <Link
                fontSize="xl"
                fontWeight="bold"
                href="#"
                _hover={{ bg: "white",opacity: 0.4, h:10, color: bgColor, borderRadius: "md" }}
              >
                <Icon as={FaChartBar} mr={2} fontSize="xl" /> Charts
              </Link>
              <Link
                fontSize="xl"
                fontWeight="bold"
                href="#"
                _hover={{ bg: "white",opacity: 0.4, h:10, color: bgColor, borderRadius: "md" }}
              >
                <Icon as={FaTableCellsLarge} mr={2} fontSize="xl" /> Tables
              </Link>
              <Link
                fontSize="xl"
                fontWeight="bold"
                href="#"
                _hover={{ bg: "white", color: bgColor, borderRadius: "md" }}
                style={disabledLinkStyle}
              >
                <Icon as={TbReportSearch} mr={2} fontSize="xl" /> Reports
              </Link>
              <Link
                fontSize="xl"
                fontWeight="bold"
                href="#"
                _hover={{ bg: "white", color: bgColor, borderRadius: "md" }}
                style={disabledLinkStyle}
              >
                <Icon as={BiSolidBinoculars} mr={2} fontSize="xl" /> Forecast
              </Link>
              <Spacer />
              <Box
                w="full"
                bg="rgba(255, 255, 255, 0.1)"
                p={3}
                borderRadius="md"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <Icon as={FaRegUserCircle} boxSize={5} color={bgColor} />
                <Text fontSize="lg" color={bgColor} mt={2}>
                  John Doe
                </Text>
              </Box>
              <Button
                w="full"
                bg="rgba(255, 255, 255, 0.1)"
                color={bgColor}
                mt={2}
                display="flex"
                alignItems="center"
              >
                <Icon as={FiLogOut} mr={2} boxSize={5} color={bgColor} />
                Logout
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
