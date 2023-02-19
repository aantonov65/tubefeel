import React, { useState, useMemo, useEffect, useContext } from "react";
import UserContext from "../../api/userContext";
import { useTable } from "react-table";
import { baseURL } from "../../api/config";
import axios from "axios";

const Table = () => {
    const [tracks, setTracks] = useState([]);

    const { userID } = useContext(UserContext);

    useEffect(() => {
        axios.get(baseURL + "/users/history/today/" + userID)
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
