import styles from "./Blog.module.css";
import Nav from "../widgets/Nav/Nav";
import BlogBanner from "../Blog_Banner/Blog_Banner";

function Blog() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <BlogBanner />
      </main>
    </>
  );
}

export default Blog;
