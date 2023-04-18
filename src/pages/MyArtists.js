import React, { useState, useMemo, useEffect } from "react";
import Header from "../components/Header";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import { useTable, useSortBy, usePagination } from "react-table";
import { Container } from "react-bootstrap";
import { baseURL } from "../api/config";
import { ReactComponent as ChevronDown } from "../assets/icons/chevron-down.svg";
import { ReactComponent as ChevronUp } from "../assets/icons/chevron-up.svg";
import { ReactComponent as ChevronRight } from "../assets/icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../assets/icons/chevron-left.svg";
import axios from "axios";
import { motion } from "framer-motion";
import DoughnutChart from "../components/charts/DoughnutChart";

const MyArtists = () => {
  const userID = localStorage.getItem("userID");
  const [artists, setArtists] = useState([]);

  const [userData, setUserData] = useState({
    labels: ["gosho ot pochivka", "kanye", "obama", "Veselin Marinov", "Future"],
    datasets: [
      {
        label: "Позитивност",
        data: [1, 2, 3, 4, 5],
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
      .get(baseURL + "/users/topArtists/" + userID)
      .then((res) => {
        const data = res.data.map((artist, index) => {
            chartNames.push(artist.name);
            chartListens.push(artist.artistListens);
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
                      label: "Слушани песни",
                      data: chartListens,
                  },
              ],
              options: [
                  {
                      responsive: false,
                      maintainAspectRatio: false,
                  },
              ],
          })
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = useMemo(
    () => [
      { Header: "Място", accessor: "rank" },
      { Header: "Име", accessor: "name" },
      { Header: "Слушани песни", accessor: "artistListens" },
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
      <div className="artists">
        <Header
          title="Питате се кой е Вашият любим певец или състав?"
          desc="Тук ще видите таблично представена статистика на десетте най-слушани от Вас певци и състави."
          breadcrumb={<HeaderBreadcrumb page="Моите Топ артисти" />}
        />
        <Container fluid>
          <motion.div
            className="table-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}>
            <div className="chart-container">
              <DoughnutChart chartData={userData} />
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

export default MyArtists;
