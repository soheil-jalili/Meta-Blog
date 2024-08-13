import Badge from "../../widgets/Badge/Badge";
import Nav from "./../../components/Nav/Nav";
function SingleBlog() {
  return (
    <>
      <div className="container">
        <Nav />
        <Badge
          backgroundColor={"#4B6BFB"}
          link={"/"}
          textColor={"#fff"}
          title={"Technology"}
        />
      </div>
    </>
  );
}

export default SingleBlog;
