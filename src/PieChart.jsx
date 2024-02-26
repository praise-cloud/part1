// import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {

  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 20000, label: 'Main GTB Account' },
            { id: 1, value: 85000, label: 'FCMB Account' },
            { id: 2, value: 35000, label: 'UBA Account' },
          ],
        },
      ]}
      width={600}
      height={300}
    />
  );
}
