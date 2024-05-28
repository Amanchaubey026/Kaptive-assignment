import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import CashflowChart from './components/CashflowChart';
import CashflowSummary from './components/CashflowSummary';
import Sidebar from './components/Sidebar';
import FilterBar from './components/FilterBar';
import cashflowData from './data.json';
import './App.css';
import background from './assets/backgroundImage.jpg';

const App = () => {
  const [view, setView] = useState('normal');
  const [period, setPeriod] = useState('month');
  const [filter, setFilter] = useState('');

  const getPeriodData = (data, period) => {
    const periods = {
      month: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      quarter: [
        ['Jan', 'Feb', 'March'],
        ['April', 'May', 'June'],
        ['July', 'August', 'September'],
        ['October', 'November', 'December']
      ],
    };

    if (period === 'month') {
      return data;
    } else if (period === 'quarter') {
      return periods.quarter.map((quarterMonths, index) => {
        const quarterData = data.reduce((acc, row) => {
          quarterMonths.forEach((month) => {
            acc.income += row[month] ? row[month] : 0;
            acc.expenses += row[month] ? row[month] : 0;
          });
          return acc;
        }, { income: 0, expenses: 0 });

        return {
          Overhead: `Q${index + 1} ${quarterMonths[0]} - ${quarterMonths[quarterMonths.length - 1]}`,
          income: quarterData.income,
          expenses: quarterData.expenses
        };
      });
    }
  };

  const getGrowthData = (data) => {
    return data.map((row, index) => {
      const newRow = { ...row };
      for (let month of ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']) {
        if (index === 0) {
          newRow[`${month} Growth`] = null;
        } else {
          const prevMonth = data[index - 1][month] || 0;
          const currentMonth = row[month] || 0;
          newRow[`${month} Growth`] = ((currentMonth - prevMonth) / prevMonth) * 100;
        }
      }
      return newRow;
    });
  };

  const filteredData = React.useMemo(() => {
    const periodData = getPeriodData(cashflowData.Sheet1, period);
    console.log('Filtered Data:', periodData); 
    return view === 'normal' ? periodData : getGrowthData(periodData);
  }, [view, period]);

  return (
    <ChakraProvider>
      <Flex h="100vh" backgroundImage={`url(${background})`} w="100%" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover">
        <Sidebar />
        <Box flex="1" p={8}>
          <FilterBar {...{ view, setView, period, setPeriod, filter, setFilter }} />
          <Grid templateColumns="repeat(12, 1fr)" gap={6} mt={8}>
            <GridItem colSpan={{ base: 12, md: 12 }}>
              <CashflowChart data={filteredData} period={period} view={view} />
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 12 }}>
              <CashflowSummary data={filteredData} />
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
