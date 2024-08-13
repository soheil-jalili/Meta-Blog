import styles from "./Blog.module.css";

import Header from "./../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

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
