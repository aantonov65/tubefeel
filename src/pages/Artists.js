import React, { useState, useMemo, useEffect, useContext } from "react";
import UserContext from "../api/userContext";
import Header from "../components/Header";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import { useTable } from "react-table";
import { Container } from "react-bootstrap";
import { baseURL } from "../api/config";
import axios from "axios";

const Artists = () => {
    const { userID } = useContext(UserContext);

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get(baseURL + "/users/topArtists/" + userID)
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
      { Header: "Слушани песни", accessor: "artistListens" }
      /*{ Header: "Популярност", accessor: "popularity" },
      { Header: "Последователи", accessor: "followers" },
      { Header: "Вижте артиста отново", accessor: "artist" },*/
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data: artists });

  return (
    <>
      <Navigation />
      <div className="artists">
        <Header
          title="Питате се кой е Вашият любим певец или състав?"
          desc="Тук ще видите таблично представена статистика на десетте най-слушани от Вас певци и състави."
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
