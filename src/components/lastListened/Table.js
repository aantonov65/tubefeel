import React, { useState, useMemo, useEffect } from "react";
import { baseURL } from "../../api/config";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as ChevronUp } from "../../assets/icons/chevron-up.svg";
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../../assets/icons/chevron-left.svg";
import { useTable, useSortBy, usePagination } from "react-table";
import Popup from "reactjs-popup";
import { ReactComponent as XIcon } from "../../assets/icons/x-lg.svg";
import axios from "axios";
import { motion } from "framer-motion";

const Artists = () => {
    const [tracks, setTracks] = useState([]);
    const [popupOpen, setPopupOpen] = useState(false);


    const handleDelete = (row) => {
        axios.post(baseURL + "users/historyDelete", {
            listenID: row.original.listenID,
            userID: userID
        }).then(() => {
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
        });
        setPopupOpen(o => !o);
  };

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
      { Header: "Инструменталност", accessor: "instrumentalness" },
      { Header: "Живост", accessor: "liveness" },
      { Header: "Позитивност", accessor: "valence" },
      { Header: "Темпо", accessor: "tempo" },
      {
        Header: " ",
        Cell: ({ row }) => (
          <button className="btn btn-danger" onClick={() => handleDelete(row)}>
            Премахни
          </button>
        ),
      },
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

    const closeModal = () => setPopupOpen(false)

    return (
       <><Popup
            open={popupOpen}
            modal
            nested
            onClose={closeModal}>
            {(close) => (
                <div className="py-2 h4 text-center rounded">
                    <div className="content mt-3">
                        Песента е успешно премахната от вашата история!
                    </div>
                    <button
                        className="to-history btn btn-danger btn-md h3 text-white mt-3 px-4 d-block mx-auto"
                        onClick={close}>
                        Продължи
                    </button>
                    <XIcon className="close-icon" onClick={close} />
                </div>
            )}
        </Popup>
            <motion.div
            className="table-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}>
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
                        onClick={() => previousPage()} />
                    <span className="mx-2">
                        Страница {pageIndex + 1} от {pageOptions.length}
                    </span>
                    <ChevronRight
                        className="pagination-buttons text-danger"
                        onClick={() => nextPage()} />
                </div>
            </motion.div></>
  );
};

export default Artists;
