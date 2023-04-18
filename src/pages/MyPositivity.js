import React, { useState, useMemo, useEffect } from "react";
import Header from "../components/Header";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import { useTable, useSortBy, usePagination } from "react-table";
import { ReactComponent as ChevronDown } from "../assets/icons/chevron-down.svg";
import { ReactComponent as ChevronUp } from "../assets/icons/chevron-up.svg";
import { ReactComponent as ChevronRight } from "../assets/icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../assets/icons/chevron-left.svg";
import { Container } from "react-bootstrap";
import { baseURL } from "../api/config";
import axios from "axios";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";
import { motion } from "framer-motion";
import LineChart from "../components/charts/LineChart";
import "../assets/css/positivity.css";


const MyPositivity = () => {
  const userID = localStorage.getItem("userID");
  const [artists, setArtists] = useState([]);

  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Позитивност",
        data: [],
        backgroundColor: "#DC3545",
        hoverBackgroundColor: "#bb2d3b",
      },
    ],
    options: [
      {
        responsive: false,
        maintainAspectRatio: false,
      },
    ],
  });

  useEffect(() => {
    let chartNames = [];
    let chartListens = [];
    axios
      .get(baseURL + "/users/positive/" + userID)
      .then((res) => {
        const data = res.data.map((artist, index) => {
            chartNames.push(artist.name);
            chartListens.push(artist.valence);
          return {
            ...artist,
            rank: index + 1,
          };
        });
        setArtists(data);
          setUserData({
              labels: chartNames,
              datasets: [
                  {
                      label: "Позитивност",
                      data: chartListens,
                      backgroundColor: "#DC3545",
                      hoverBackgroundColor: "#bb2d3b",
                  },
              ],
              options: [
                  {
                      responsive: false,
                      maintainAspectRatio: false,
                  },
              ],
          });
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = useMemo(
    () => [
      { Header: "Място", accessor: "rank" },
      { Header: "Име", accessor: "name" },
      { Header: "Позитивност", accessor: "valence" },
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
    } = useTable({ columns, data: artists }, useSortBy, usePagination);

    const { pageIndex } = state;


  return (
    <>
      <Navigation />
      <div className="positivity">
        <Header
          title="Искате ли да разберете кои са най-позитивните песни, които сте слушали?"
          desc="Тук може да видите ТOП 20 на най-позитивните песни, слушани от Вас в системата."
          breadcrumb={<HeaderBreadcrumb page="Най-позитивните Ви песни" />}
        />
        <Container fluid>
            <motion.div
                className="table-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0 }}>
                <div className="chart-container">
                    <LineChart chartData={userData} />
                </div>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}>
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
            </motion.div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default MyPositivity;
