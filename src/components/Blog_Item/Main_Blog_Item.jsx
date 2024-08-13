import styles from "./Main_Blog_Item.module.css";

import photo1 from "../../assets/img/Blog__Card_Img/photo1.png";

import photo2 from "../../assets/img/Blog__Card_Img/photo2.png";

import photo3 from "../../assets/img/Blog__Card_Img/photo3.png";

import photo4 from "../../assets/img/Blog__Card_Img/photo4.png";

import photo5 from "../../assets/img/Blog__Card_Img/photo5.png";

import photo6 from "../../assets/img/Blog__Card_Img/photo6.png";

import photo7 from "../../assets/img/Blog__Card_Img/photo7.png";

import photo8 from "../../assets/img/Blog__Card_Img/photo8.png";

import photo9 from "../../assets/img/Blog__Card_Img/photo9.png";

// Profile Photo
import ernie from "../../assets/img/profile__photo/ernie.png";
import elizabeth from "../../assets/img/profile__photo/elizabeth.png";
import eric from "../../assets/img/profile__photo/eric.png";
import jason from "../../assets/img/profile__photo/jason.png";
import tracey from "../../assets/img/profile__photo/tracey.png";
import BlogItemCard from "../Blog_Item_Card/Blog_Item_Card";
import { Link } from "react-router-dom";

function MainBlogItem() {
  return (
    <>
      <h2 className={styles.latest__post__title}>Latest Post</h2>
      <section className={styles.latest__post}>
        <BlogItemCard
          img={photo1}
          category={"Technology"}
          author={"Tracey Wilson"}
          date={"August 20, 2022"}
          profilePhoto={tracey}
          title={
            "The Impact of Technology on the Workplace: How Technology is Changing"
          }
        />
        <BlogItemCard
          img={photo2}
          category={"Technology"}
          author={"Jason Francisco"}
          date={"August 20, 2022"}
          profilePhoto={jason}
          title={
            "The Impact of Technology on the Workplace: How Technology is Changing"
          }
        />
        <BlogItemCard
          img={photo3}
          category={"Technology"}
          author={"Elizabeth Slavin"}
          date={"August 20, 2022"}
          profilePhoto={elizabeth}
          title={
            "The Impact of Technology on the Workplace: How Technology is Changing"
          }
        />
        <BlogItemCard
          img={photo4}
          category={"Technology"}
          author={"Ernie Smith"}
          date={"August 20, 2022"}
          profilePhoto={ernie}
          title={
            "The Impact of Technology on the Workplace: How Technology is Changing"
          }
        />
        <BlogItemCard
          img={photo5}
          category={"Technology"}
          author={"Eric Smith"}
          date={"August 20, 2022"}
          profilePhoto={eric}
          title={
            "The Impact of Technology on the Workplace: How Technology is Changing"
          }
        />
        <BlogItemCard
          img={photo6}
          category={"Technology"}
          author={"Tracey Wilson"}
          date={"August 20, 2022"}
          profilePhoto={tracey}
          title={
            "The Impact of Technology on the Workplace: How Technology is Changing"
          }
        />
        <BlogItemCard
          img={photo7}
          category={"Technology"}
          author={"Jason Francisco"}
          date={"August 20, 2022"}
          profilePhoto={jason}
          title={
            "The Impact of Technology on the Workplace: How Technology is Changing"
          }
        />
        <BlogItemCard
          img={photo8}
          category={"Technology"}
          author={"Elizabeth Slavin"}
          date={"August 20, 2022"}
          profilePhoto={elizabeth}
          title={
            "The Impact of Technology on the Workplace: How Technology is Changing"
          }
        />
        <BlogItemCard
          img={photo9}
          category={"Technology"}
          author={"Ernie Smith"}
          date={"August 20, 2022"}
          profilePhoto={ernie}
          title={
            "The Impact of Technology on the Workplace: How Technology is Changing"
          }
        />
      </section>

      <div className={styles.view_all__wrapper}>
        <Link to={"/blogs"} className={styles.view__all}>
          View All Post
        </Link>
      </div>
    </>
  );
}

export default MainBlogItem;
