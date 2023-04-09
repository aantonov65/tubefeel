import React from "react";
import { Helmet } from "react-helmet";
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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feeling from "./pages/Feeling";
import DaysFeeling from "./pages/DaysFeeling";
import Positivity from "./pages/Positivity";
import History from "./pages/History";
import UserProvider from './api/userProvider';

function App() {
    return (
        <UserProvider>
            <div className="App">
                <Helmet>
                    <meta name="description" content="Проследете градацията на настроението си чрез музика с нашето интерактивно приложение!" />
                    <meta name="keywords" content="mood, music, YouTube, градация, настроение, музика, ютюб, статистики, песни" />
                    <meta name="google-site-verification" content="tQMYDP8q6UH_zU17EdVY3_8xQa5TZRTC2dCCShMYYgg" />
                </Helmet>
                {/* <Navigation /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/songs-numbers" element={<SongNumbers />} />
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/my-top-ten" element={<MyTopTen />} />
                    <Route path="/tubefeel-top-ten" element={<TopTen />} />
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
