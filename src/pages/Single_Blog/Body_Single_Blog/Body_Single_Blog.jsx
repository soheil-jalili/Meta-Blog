import ProfileInfo from "../../../widgets/Profile_Info/Profile_Info";
import styles from "./Body_Single_Blog.module.css";

import tracey from "../../../assets/img/profile__photo/tracey.png";

import banner from "../../../assets/img/banner.png";
import Footer from "../../../components/Footer/Footer";

function BodySingleBlog() {
  return (
    <>
      <h2 className={styles.single__blog__title}>
        The Impact of Technology on the Workplace: How Technology is Changing
      </h2>

      <ProfileInfo
        author={"Tracey Wilson"}
        date={"August 20, 2022"}
        profileImg={tracey}
      />

      <img src={banner} alt="" className={styles.single__blog__banner1} />

      <p className={styles.blog__single__paragraph}>
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels. One of the most rewarding aspects of traveling is
        immersing yourself in the local culture and customs. This includes
        trying local cuisine, attending cultural events and festivals, and
        interacting with locals. Learning a few phrases in the local language
        can also go a long way in making connections and showing respect.
      </p>

      <h3 className={styles.blog__single__paragraph__main__title}>
        Research Your Destination
      </h3>

      <p className={styles.blog__single__paragraph}>
        Before embarking on your journey, take the time to research your
        destination. This includes understanding the local culture, customs, and
        laws, as well as identifying top attractions, restaurants, and
        accommodations. Doing so will help you navigate your destination with
        confidence and avoid any cultural faux pas. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus
        orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit
        amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae.
        Viverra adipiscing at in tellus.
      </p>
      <h3 className={styles.blog__single__paragraph__main__title}>
        Plan Your Itinerary
      </h3>

      <p className={styles.blog__single__paragraph}>
        While it's essential to leave room for spontaneity and unexpected
        adventures, having a rough itinerary can help you make the most of your
        time and budget. Identify the must-see sights and experiences and
        prioritize them according to your interests and preferences. This will
        help you avoid overscheduling and ensure that you have time to relax and
        enjoy your journey. Vitae sapien pellentesque habitant morbi tristique.
        Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
        nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit
        amet.
      </p>
    </>
  );
}

export default BodySingleBlog;
