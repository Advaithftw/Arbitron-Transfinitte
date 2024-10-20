import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import './ExcelTable.css'; 

const ExcelTable = () => {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const handleLoadData = async () => {
    try {
  
      const response = await axios.get('http://localhost:5001/excel', {
        responseType: 'blob', 
      });

      
      const fileBlob = new Blob([response.data]);

      
      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryStr = event.target.result;
        
        
        const workbook = XLSX.read(binaryStr, { type: 'binary' });
        const sheetName = workbook.SheetNames[0]; 
        const worksheet = workbook.Sheets[sheetName];

        
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        setColumns(jsonData[0]); 
        setRows(jsonData.slice(1)); 
      };

      
      reader.readAsBinaryString(fileBlob);
    } catch (error) {
      console.error('Error loading Excel file:', error);
      alert('Failed to load Excel file. Please try again.');
    }
  };

  return (
    <div>
      <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <h2 class="font">Load Excel Data</h2>
        <button onClick={handleLoadData} class="button">Load Data from Excel</button>

        {rows.length > 0 && (
          <table className="excel-table">
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ExcelTable;
