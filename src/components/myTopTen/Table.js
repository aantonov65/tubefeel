import React, { useState, useMemo, useEffect } from "react";
import { useTable } from "react-table";
import { baseURL } from "../../api/config";
import axios from "axios";

const Artists = () => {
    const [tracks, setTracks] = useState([]);

    const userID = localStorage.getItem('userID');

    useEffect(() => {
        axios.get(baseURL + "/tracks/top10/" + userID)
            .then((res) => {
                const data = res.data.map((track, index) => {
                    return {
                        ...track,
                        rank: index + 1,
                    };
                });
                setTracks(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const columns = useMemo(
        () => [
            { Header: "Място", accessor: "rank" },
            { Header: "Име", accessor: "name" },
            { Header: "Пъти слушана", accessor: "listens" },
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

export default Artists;
