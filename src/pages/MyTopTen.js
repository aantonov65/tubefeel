import Header from "../components/Header";
import ChartContainer from "../components/myTopTen/ChartContainer";
import Table from "../components/myTopTen/Table";
import "../assets/css/topTen.css";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";

const MyTopTen = () => {
  return (
    <>
      <Navigation />
      <div className="topTen">
        <Header
          title="Искате ли да узнаете вашата Топ 10 класация?"
          desc="Тук може да видите Топ 10 на песните, слушани от Вас в системата."
          breadcrumb={<HeaderBreadcrumb page="Моето Топ 10" />}
        />
        <ChartContainer />
        <Table />
      </div>
      <Footer />
    </>
  );
};

export default MyTopTen;
