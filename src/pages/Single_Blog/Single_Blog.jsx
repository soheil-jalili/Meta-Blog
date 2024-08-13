import Footer from "../../components/Footer/Footer";

import HeaderSingleBlog from "./Header_Single_Blog/Header_Single_Blog";
import MainSingleBlog from "./Main_Single_Blog/Main_Single_Blog";

function SingleBlog() {
  return (
    <>
      <div className="container">
        <HeaderSingleBlog />
        <MainSingleBlog />
      </div>
      <Footer />
    </>
  );
}

export default SingleBlog;
