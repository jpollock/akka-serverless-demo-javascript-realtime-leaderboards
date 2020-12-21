import React, { useState } from "react";
import { useTable } from "react-table";

export default function Table({ columns, data, filter, channel, uuid, stateValue }) {
  const [filterInput, setFilterInput] = useState('');
  const [channelInput, setChannelInput] = useState('');
  const [uuidInput, setUuidInput] = useState('');
  const [stateValueInput, setStateValueInput] = useState('');
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter
  } = useTable(
    {
      columns,
      data
    }
  );

  const handleChannelChange = e => {
    const value = e.target.value || undefined;

    setChannelInput(value);
    channel(value);
  };

  // Render the UI for your table
  return (
    <>
      <input
        value={channelInput}
        onChange={handleChannelChange}
        placeholder={"Leaderboard channel"}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            //console.log(row.values);
            if (row.values['show.id'] === uuidInput) {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'lightgreen',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            } else {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} >
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            }

          })}
        </tbody>
      </table>
    </>
  );
}
