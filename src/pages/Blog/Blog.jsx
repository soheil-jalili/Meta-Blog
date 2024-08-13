import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import ThemeContext from "../../context/Theme";

function Blog() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default Blog;
