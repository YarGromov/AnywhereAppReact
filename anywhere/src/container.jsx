import Header from "./header";
import Main from "./main";
import Success from "./success";
import Footer from "./footer";
// import "./js/script";

const Container = () => {
  return (
    <div className="container">
      <img className="line" src="/img/ff.png" alt="line" />

      <div className="content">
        <Header />,
        <Main />,
        <Success />,
        <Footer />
      </div>
      <script src="./js/script.js"></script>
    </div>
  );
};

export default Container;
