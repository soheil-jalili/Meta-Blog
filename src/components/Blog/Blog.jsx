import styles from "./Blog.module.css";
import Nav from "../widgets/Nav/Nav";
import BlogBanner from "../Blog_Banner/Blog_Banner";
import Advertisement from "../Advertisement/Advertisement";

function Blog() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <BlogBanner />
        <Advertisement />
      </main>
    </>
  );
}

export default Blog;
