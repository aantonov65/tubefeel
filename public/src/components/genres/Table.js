import React, { useMemo } from "react";
import "../../assets/css/genres.css";
import mockData from "../mockData/MOCK_DATA.json";
import { useTable } from "react-table";

const Artists = () => {
  const data = useMemo(() => mockData, []);
  const columns = useMemo(
    () => [
      { Header: "Място", accessor: "place" },
      { Header: "Жанр", accessor: "genre" },
      { Header: "Измерител за слушане", accessor: "measurement" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

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

export default Artists;
