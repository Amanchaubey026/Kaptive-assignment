/* eslint-disable react/prop-types */
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Heading,
    Button,
    Icon
} from '@chakra-ui/react';
import { FaCaretDown } from "react-icons/fa";
function CashflowSummary({ data }) {
    return (
        <Box p={4} borderWidth="1px" borderRadius="md">
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} h={'14'}>
            <Heading size="md" mb={4}>Cashflow Summary-1</Heading>
            <Box >
                <Button bg={'#f2e6ff'} color={'#7b00ff'}>Decimal View</Button>
                <Button bg={'white'} boxShadow="md" m={'2'}>Percent View</Button>
                <Button bg={'white'} boxShadow="md">Euro
                <Icon as={FaCaretDown} boxSize={5} m={'2'} color={'grey'}/>
                </Button>
            </Box>
            </Box>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr bg={"#D2DCF6"}>
                            <Th >Cashflow</Th>
                            <Th>Jan</Th>
                            <Th>Feb</Th>
                            <Th>March</Th>
                            <Th>April</Th>
                            <Th>May</Th>
                            <Th>June</Th>
                            <Th>July</Th>
                            <Th>August</Th>
                            <Th>September</Th>
                            <Th>October</Th>
                            <Th>November</Th>
                            <Th>December</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.slice(0,165).map((row, index) => (
                            <Tr key={index}>
                                <Td>{row.Overhead}</Td>
                                <Td>{row.Jan}</Td>
                                <Td>{row.Feb}</Td>
                                <Td>{row.March}</Td>
                                <Td>{row.April}</Td>
                                <Td>{row.May}</Td>
                                <Td>{row.June}</Td>
                                <Td>{row.July}</Td>
                                <Td>{row.August}</Td>
                                <Td>{row.September}</Td>
                                <Td>{row.October}</Td>
                                <Td>{row.November}</Td>
                                <Td>{row.December}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default CashflowSummary;
