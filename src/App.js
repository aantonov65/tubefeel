import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SongNumbers from "./pages/SongNumbers";
import Genres from "./pages/Genres";
import MyTopTen from "./pages/MyTopTen";
import TopTen from "./pages/TopTen";
import TodayFeeling from "./pages/TodayFeeling";
import WeekFeeling from "./pages/WeekFeeling";
import MonthFeeling from "./pages/MonthFeeling";
import YearFeeling from "./pages/YearFeeling";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/songs-numbers" element={<SongNumbers />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/my-top-ten" element={<MyTopTen />} />
        <Route path="/tubefeel-top-ten" element={<TopTen />} />
        <Route path="/today-feeling" element={<TodayFeeling />} />
        <Route path="/week-feeling" element={<WeekFeeling />} />
        <Route path="/month-feeling" element={<MonthFeeling />} />
        <Route path="/year-feeling" element={<YearFeeling />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
