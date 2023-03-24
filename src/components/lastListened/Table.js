import React, { useState, useMemo, useEffect } from "react";
import { baseURL } from "../../api/config";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as ChevronUp } from "../../assets/icons/chevron-up.svg";
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../../assets/icons/chevron-left.svg";
import { useTable, useSortBy, usePagination } from "react-table";
import axios from "axios";

const Artists = () => {
  const [tracks, setTracks] = useState([]);

  const userID = localStorage.getItem("userID");
  useEffect(() => {
    axios
      .get(baseURL + "/users/totalHistory/" + userID)
      .then((res) => {
          const data = res.data.map((track, index) => {
              return {
            ...track,
            rank: index + 1,
              };
        });
          setTracks(data.reverse());
      })
      .catch((err) => console.log(err));
  }, []);
  const columns = useMemo(
    () => [
      { Header: "Номер", accessor: "rank" },
      { Header: "Име", accessor: "name" },
      { Header: "Танцувалност", accessor: "danceability" },
      { Header: "Енергичност", accessor: "energy" },
      { Header: "Лиричност", accessor: "speechiness" },
      { Header: "Акустичност", accessor: "acousticness" },
      /*{ Header: "Инструменталност", accessor: "instrumentalness" },*/
      { Header: "Живост", accessor: "liveness" },
      { Header: "Позитивност", accessor: "valence" },
      { Header: "Темпо", accessor: "tempo" },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable({ columns, data: tracks }, useSortBy, usePagination);

  const { pageIndex } = state;

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span className="ms-1">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ChevronDown />
                      ) : (
                        <ChevronUp />
                      )
                    ) : (
                      <ChevronRight />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
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
      <div className="text-center h5 mb-4">
        <ChevronLeft
          className="pagination-buttons text-danger"
          onClick={() => previousPage()}
        />
        <span className="mx-2">
          Страница {pageIndex + 1} от {pageOptions.length}
        </span>
        <ChevronRight
          className="pagination-buttons text-danger"
          onClick={() => nextPage()}
        />
      </div>
    </div>
  );
};

export default Artists;
