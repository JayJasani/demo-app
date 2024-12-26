import React, { useState, useEffect } from 'react';

const headers = [
  { name: 'Id', value: 'id' },
  { name: 'Name', value: 'name' },
  { name: 'City', value: 'city' },
  { name: 'Age', value: 'age' },
];

const Table = ({ tableData, handleTableData, handleSort }) => {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('ascending'); 

  const handleSearch = (e) => {
    setSearch(e.target.value);
    handleTableData(e.target.value);
  };

  const handleToggleSort = (key) => {
    const newSortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending';
    setSortOrder(newSortOrder);
    handleSort(key, newSortOrder);
  };

  return (
    <div>
      <input value={search} onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            {headers.map((_el, index) => (
              <th key={index} onClick={() => handleToggleSort(_el.value)}>
                {_el.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map((_el, index) => (
              <tr key={index}>
                <td>{_el.id}</td>
                <td>{_el.name}</td>
                <td>{_el.city}</td>
                <td>{_el.age}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
