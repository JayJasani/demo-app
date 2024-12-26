import { useState } from 'react';
import Table from './components/Table';

function App() {
  const data = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 35, city: "Chicago" },
    { id: 4, name: "David", age: 40, city: "Miami" },
  ];

  const [tableData, setTableData] = useState(data);

  const handleTableData = (value) => {
    if (value.length > 0) {
      const updatedValue = tableData.filter(
        (_el) =>
          _el.name.toLowerCase().includes(String(value).toLowerCase()) ||
          _el.city.toLowerCase().includes(String(value).toLowerCase())
      );
      setTableData(updatedValue);
    } else {
      setTableData(data);
    }
  };

  const sortData = (data, key, order) => {
    return data.sort((a, b) => {
      if (a[key].toLowerCase() > b[key].toLowerCase()) {
        return order === 'ascending' ? 1 : -1;
      }
      if (a[key].toLowerCase() < b[key].toLowerCase()) {
        return order === 'ascending' ? -1 : 1;
      }
      return 0;
    });
  };

  const handleSort = (key, order) => {
    const newData = sortData(tableData, key, order);
    setTableData(newData);
  };

  return (
    <Table
      tableData={tableData}
      handleTableData={handleTableData}
      handleSort={handleSort}
    />
  );
}

export default App;
