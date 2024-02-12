import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activatePremium } from '../../Store/ExpenseSlice';

const PremiumButton = ({ expenses }) => { 
  const dispatch = useDispatch();
  const totalAmount = useSelector(state => state.expenses.totalAmount);
  const isPremiumActivated = useSelector(state => state.expenses.isPremiumActivated);

  const handleActivatePremium = () => {
    dispatch(activatePremium());
  };

  const convertToCSV = (data) => {
    if (!data || data.length === 0) {
        return ''; 
    }

    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    for (const row of data) {
        const values = headers.map(header => {
            const escaped = ('' + row[header]).replace(/"/g, '\\"');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
  };

  const handleDownload = () => {
    const csvData = convertToCSV(expenses); 
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'expenses.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return !isPremiumActivated && totalAmount > 10000 && (
    <div>
      <button className='ml-6 p-2 bg-white text-black hover:bg-slate-400 rounded-lg ' 
        onClick={handleActivatePremium}>
        Premium
      </button>
      <button className='ml-6 p-2 bg-green-700 rounded-lg' onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};

export default PremiumButton;
