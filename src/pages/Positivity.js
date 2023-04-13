import React, { useState, useMemo, useEffect } from "react";
import Header from "../components/Header";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import { useTable } from "react-table";
import { Container } from "react-bootstrap";
import { baseURL } from "../api/config";
import axios from "axios";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";
import { motion } from "framer-motion";
import LineChart from "../components/charts/LineChart";
import "../assets/css/positivity.css";

const Positivity = () => {
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
    axios
      .get(baseURL + "/users/positive/")
      .then((res) => {
        const data = res.data.map((artist, index) => {
          return {
            ...artist,
            rank: index + 1,
          };
        });
        setArtists(data);
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: artists });

  return (
    <>
      <Navigation />
      <div className="positivity">
        <Header
          title="Искате ли да повдигнете настроението си?"
          desc="Тук може да видите ТOП 20 на най-позитивните песни, слушани в нашата система."
          breadcrumb={<HeaderBreadcrumb page="Повдигнете настроението си" />}
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
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
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
          </motion.div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Positivity;
