import React, { useMemo } from "react";
import Header from "../components/Header";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import mockData from "../components/mockData/MOCK_DATA.json";
import { useTable } from "react-table";
import { Container } from "react-bootstrap";

const Artists = () => {
  const data = useMemo(() => mockData, []);
  const columns = useMemo(
    () => [
      { Header: "Място", accessor: "place" },
      { Header: "Име", accessor: "name" },
      { Header: "Популярност", accessor: "popularity" },
      { Header: "Последователи", accessor: "followers" },
      { Header: "Вижте артиста отново", accessor: "artist" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <Navigation />
      <div className="artists">
        <Header
          title="Кой е Вашият любим певец или състав?"
          desc="Тук може да видите статистика на десетте най-слушани от Вас певци и състави."
        />
        <Container fluid>
          <div className="table-container">
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
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Artists;
