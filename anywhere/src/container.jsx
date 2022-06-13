import Header from "./Header";
import Main from "./Main";
import Success from "./Success";
import Footer from "./Footer";
import { useState } from "react";


const MAIN_PAGE = 'MAIN_PAGE';
const SUCCESS_PAGE = 'SUCCESS_PAGE';



const Container = () => {

  let [currentPage, setPage] = useState(MAIN_PAGE);

  function openSuccessPage(){
    setPage(SUCCESS_PAGE)
  }

  function openMainPage(){
    setPage(MAIN_PAGE)
  }

  

  return (
    <div className="container" data-page={currentPage}>

      {/* <img className="line" src="img/line.png" alt="line" /> */}

      <div className="content">
        <Header />
        {currentPage === MAIN_PAGE ? <Main openSuccessPage={openSuccessPage} /> : null}
        {currentPage === SUCCESS_PAGE ? <Success openMainPage={openMainPage} /> : null}
        <Footer />
      </div>
    </div>
  );
};

export default Container;
