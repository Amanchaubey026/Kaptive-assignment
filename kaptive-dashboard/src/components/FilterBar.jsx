/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  FormControl,
  FormLabel,
  Select,
  HStack,
  Spacer,
  Button,
  ButtonGroup,
  Icon,
} from "@chakra-ui/react";
import { IoMdCalendar } from "react-icons/io";
export default function FilterBar({
  view,
  setView,
  period,
  setPeriod,
  filter,
  setFilter,
}) {
  return (
    <HStack spacing={4} w="100%">
      {/* <FormControl>
        <FormLabel>View</FormLabel>
        <Select value={view} onChange={(e) => setView(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="growth">Growth</option>
        </Select>
      </FormControl> */}
      <FormControl>
        <FormLabel>Period</FormLabel>
        <Select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          w={"32"}
        >
          <option value="quarter">Quarter</option>
          <option value="month">Month</option>
        </Select>
      </FormControl>
      <Spacer />
      <ButtonGroup spacing="2">
  <Button
    onClick={() => setView("normal")}
    isActive={view === "normal"}
    bg="#f2e6ff"
    color="#7b00ff"
  >
    Normal View
  </Button>
  <Button
    onClick={() => setView("growth")}
    isActive={view === "growth"}
    bg="white"
    color="black"
  >
    Growth View
  </Button>
</ButtonGroup>

      <Button w={"56"} bg="white" color={'grey'} boxShadow="md">
        Period Form
        <Icon as={IoMdCalendar} boxSize={5} m={'2'} color={'grey'}/>
      </Button>
      <Button w={"48"} bg="white" me={'2'} color={'grey'} boxShadow="md"
      >
        Period to
      </Button>
    </HStack>
  );
}
