import React, { useMemo } from "react";
import Header from "../components/Header";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import mockData from "../components/mockData/MOCK_DATA.json";
import { useTable } from "react-table";
import { Container } from "react-bootstrap";

const Positivity = () => {
  const data = useMemo(() => mockData, []);
  const columns = useMemo(
    () => [
      { Header: "Номер", accessor: "number" },
      { Header: "Име", accessor: "name" },
      { Header: "Позитивност", accessor: "positivity" },
      { Header: "Слушай песента", accessor: "id" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <Navigation />
      <div className="positivity">
        <Header
          title="Искате ли да повдигнете настроението си?"
          desc="Тук може да видите ТOП 20 на най-позитивните песни, слушани от Вас в системата и да ги пуснете отново."
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

export default Positivity;
