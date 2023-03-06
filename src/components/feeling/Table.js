import React, { useState, useMemo, useEffect } from "react";
import { useTable } from "react-table";


const Table = ({ tracks }) => {
    console.log(tracks);
    const columns = useMemo(
        () => [
            { Header: "Място", accessor: "rank" },
            { Header: "Име", accessor: "name" },
            { Header: "Позитивност", accessor: "valence" },
            { Header: "Дата слушана", accessor: "date" },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data: tracks });

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
