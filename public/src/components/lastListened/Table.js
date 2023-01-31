import React, { useMemo } from "react";
import mockData from "../mockData/MOCK_DATA.json";
import { useTable } from "react-table";

const Artists = () => {
  const data = useMemo(() => mockData, []);
  const columns = useMemo(
    () => [
      { Header: "Номер", accessor: "number" },
      { Header: "Име", accessor: "name" },
      { Header: "Танцувалност", accessor: "danceability" },
      { Header: "Енергичност", accessor: "vigor" },
      { Header: "Лиричност", accessor: "lyricism" },
      { Header: "Акустичност", accessor: "acousticity" },
      { Header: "Инструменталност", accessor: "instrumentality" },
      { Header: "Живост", accessor: "liveliness" },
      { Header: "Позитивност", accessor: "positivity" },
      { Header: "Темпо", accessor: "tempo" },
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
