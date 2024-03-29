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
import BarChart from "../components/charts/BarChart";

const PositiveArtists = () => {
  const [artists, setArtists] = useState([]);

    const [userData, setUserData] = useState({
        labels: [],
        datasets: [
            {
                label: "Средна позитивност",
                data: [],
                backgroundColor: "#DC3545",
                hoverBackgroundColor: "#bb2d3b",
            },
        ],
        options: [
            {
                responsive: true,
                maintainAspectRatio: false,
            },
        ],
    });

  useEffect(() => {
    let names = [];
    let valence = [];
    axios
      .get(baseURL + "/users/positiveArtists/")
      .then((res) => {
          const data = res.data.map((artist, index) => {
          names.push(artist.name);
              valence.push(artist.avg_valence);
          return {
            ...artist,
            rank: index + 1,
          };
        });
        setArtists(data);
          setUserData({
              labels: names,
              datasets: [
                  {
                      label: "Средна позитивност",
                      data: valence,
                      backgroundColor: "#DC3545",
                      hoverBackgroundColor: "#bb2d3b",
                  },
              ],
              options: [
                  {
                      responsive: true,
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
      { Header: "Средна позитивност", accessor: "avg_valence" },
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
          title="Питате се кой е най-позитивният артист слушан в нашата система?"
          desc="Тук ще видите таблично представена статистика на двайсетте най-позитивни артисти слушани от всички потребители на нашата система."
          breadcrumb={<HeaderBreadcrumb page="TubeFeel позитивни артисти" />}
        />
        <Container fluid>
          <motion.div
            className="table-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}>
            <div className="chart-container">
              <BarChart chartData={userData} />
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

export default PositiveArtists;
