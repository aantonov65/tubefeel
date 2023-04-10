import React from "react";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SongNumbers from "./pages/SongNumbers";
import MyTopTen from "./pages/MyTopTen";
import TopTen from "./pages/TopTen";
import TodayFeeling from "./pages/TodayFeeling";
import WeekFeeling from "./pages/WeekFeeling";
import MonthFeeling from "./pages/MonthFeeling";
import YearFeeling from "./pages/YearFeeling";
import Search from "./pages/Search";
import Artists from "./pages/Artists";
import MyArtists from "./pages/MyArtists";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feeling from "./pages/Feeling";
import DaysFeeling from "./pages/DaysFeeling";
import Positivity from "./pages/Positivity";
import MyPositivity from "./pages/MyPositivity";
import History from "./pages/History";
import UserProvider from './api/userProvider';

function App() {
    return (
        <UserProvider>
            <div className="App">
                {/* <Navigation /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/songs-numbers" element={<SongNumbers />} />
                    <Route path="/my-artists" element={<MyArtists />} />
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/my-top-ten" element={<MyTopTen />} />
                    <Route path="/tubefeel-top-ten" element={<TopTen />} />
                    <Route path="/my-positivity" element={<MyPositivity />} />
                    <Route path="/positivity" element={<Positivity />} />
                    <Route path="/feeling" element={<Feeling />} />
                    <Route path="/days-feeling" element={<DaysFeeling />} />
                    <Route path="/today-feeling" element={<TodayFeeling />} />
                    <Route path="/week-feeling" element={<WeekFeeling />} />
                    <Route path="/month-feeling" element={<MonthFeeling />} />
                    <Route path="/year-feeling" element={<YearFeeling />} />
                </Routes>
                {/* <Footer /> */}
            </div>
        </UserProvider>
    );
}

export default App;
