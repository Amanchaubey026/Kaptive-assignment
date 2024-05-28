/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Box } from '@chakra-ui/react';

const CashflowChart = ({ data = [] }) => {
  const getMonthlyData = (data) => {
    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthlyData = [];

    months.forEach(month => {
      let revenue = 0;
      let cogs = 0;
      let grossProfit = 0;

      data.forEach(row => {
        if (row.Overhead === "Accrued Revenue" || row.Overhead === "Deferred Revenue") {
          revenue += row[month];
        } else if (row.Overhead === "COGS - Labour") {
          cogs += row[month];
        } else if (row.Overhead === "Gross Profit") {
          grossProfit += row[month];
        }
      });

      monthlyData.push({
        month,
        revenue,
        cogs,
        grossProfit
      });
    });

    return monthlyData;
  };

  const filteredData = useMemo(() => getMonthlyData(data), [data]);

  

  return (
    <Box id='chart' p={4} bg={'white'} borderWidth="1px" borderRadius="md" >
      <ResponsiveContainer width="100%" height={250}>
        <BarChart 
          data={filteredData}
          margin={{ left: 50 }} 
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#BB86E1" name="Revenue" />
          <Bar dataKey="cogs" fill="#00AFF0" name="COGS" />
          <Bar dataKey="grossProfit" fill="#E8802D" name="Gross Profit" />
        </BarChart>
      </ResponsiveContainer>
      <Box display={'flex'} justifyContent={'center'} >
        <Box display={'flex'} m={'8'}>
            <Box h={'6'} w={'12'} bg={'#BB86E1'}></Box>
            <Box ms={'2'}>Revenue</Box>
        </Box>
        <Box display={'flex'} m={'8'}>
            <Box h={'6'} w={'12'} bg={'#00AFF0'}></Box>
            <Box ms={'2'}>COGS</Box>
        </Box>
        <Box display={'flex'} m={'8'}>
            <Box h={'6'} w={'12'} bg={'#E8802D'}></Box>
            <Box ms={'2'}>Gross Profit</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CashflowChart;
