/* eslint-disable react/prop-types */
import { useState } from 'react';
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
    Icon,
    Flex
} from '@chakra-ui/react';
import { FaCaretDown } from "react-icons/fa";

function CashflowSummary({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState('decimal');
    const rowsPerPage = 10;
    const maxPageButtons = 8;

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(data.length / rowsPerPage);
    const startRowIndex = (currentPage - 1) * rowsPerPage;
    const currentData = data.slice(startRowIndex, startRowIndex + rowsPerPage);

    const getPageNumbers = () => {
        const halfMax = Math.floor(maxPageButtons / 2);
        let start = Math.max(currentPage - halfMax, 1);
        let end = Math.min(start + maxPageButtons - 1, totalPages);

        if (end - start < maxPageButtons - 1) {
            start = Math.max(end - maxPageButtons + 1, 1);
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const formatValue = (value) => {
        if (viewMode === 'percent') {
            return `${(value * 100).toFixed(2)}%`;
        }
        return value;
    };

    const calculatePercentageChange = (currentMonth, previousMonth) => {
        if (previousMonth === 0) return null; // To handle division by zero
        return ((currentMonth - previousMonth) / previousMonth) * 100;
    };

    const pageNumbers = getPageNumbers();

    return (
        <Box p={4} borderWidth="1px" borderRadius="md">
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} h={'14'}>
                <Heading size="md" mb={4}>Cashflow Summary-1</Heading>
                <Box>
                    <Button 
                        bg={viewMode === 'decimal' ? '#f2e6ff' : 'white'} 
                        color={viewMode === 'decimal' ? '#7b00ff' : 'black'}
                        onClick={() => setViewMode('decimal')}
                    >
                        Decimal View
                    </Button>
                    <Button 
                        bg={viewMode === 'percent' ? '#f2e6ff' : 'white'} 
                        color={viewMode === 'percent' ? '#7b00ff' : 'black'} 
                        m={'2'}
                        onClick={() => setViewMode('percent')}
                    >
                        Percent View
                    </Button>
                    <Button bg={'white'} boxShadow="md">Euro
                        <Icon as={FaCaretDown} boxSize={5} m={'2'} color={'grey'} />
                    </Button>
                </Box>
            </Box>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr bg={"#D2DCF6"}>
                            <Th>Cashflow</Th>
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
                        {currentData.map((row, index) => (
                            <Tr key={index}>
                                <Td>{row.Overhead}</Td>
                                <Td>{formatValue(row.Jan)}</Td>
                                <Td>{formatValue(row.Feb)} ({formatValue(calculatePercentageChange(row.Feb, row.Jan))})</Td>
                                <Td>{formatValue(row.March)} ({formatValue(calculatePercentageChange(row.March, row.Feb))})</Td>
                                <Td>{formatValue(row.April)} ({formatValue(calculatePercentageChange(row.April, row.March))})</Td>
                                <Td>{formatValue(row.May)} ({formatValue(calculatePercentageChange(row.May, row.April))})</Td>
                                <Td>{formatValue(row.June)} ({formatValue(calculatePercentageChange(row.June, row.May))})</Td>
                                <Td>{formatValue(row.July)} ({formatValue(calculatePercentageChange(row.July, row.June))})</Td>
                                <Td>{formatValue(row.August)} ({formatValue(calculatePercentageChange(row.August, row.July))})</Td>
                                <Td>{formatValue(row.September)} ({formatValue(calculatePercentageChange(row.September, row.August))})</Td>
                                <Td>{formatValue(row.October)} ({formatValue(calculatePercentageChange(row.October, row.September))})</Td>
                                <Td>{formatValue(row.November)} ({formatValue(calculatePercentageChange(row.November, row.October))})</Td>
                                <Td>{formatValue(row.December)} ({formatValue(calculatePercentageChange(row.December, row.November))})</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <Flex justifyContent="space-between" mt={4}>
                <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </Button>
                <Flex alignItems="center">
                    {pageNumbers.map((pageNumber) => (
                        <Button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            variant={currentPage === pageNumber ? 'solid' : 'outline'}
                            mx={1}
                        >
                            {pageNumber}
                        </Button>
                    ))}
                </Flex>
                <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </Button>
            </Flex>
        </Box>
    );
}

export default CashflowSummary;
