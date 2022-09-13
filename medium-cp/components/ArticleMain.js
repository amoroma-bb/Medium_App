import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import Qazi from "../static/qazi.jpg";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Banner from "../static/banner.png";

const styles = {
  wrapper: `flex items-center justify-center flex-[3] border-l border-r`,
  content: `h-screen w-full p-[2rem]`,
  postHeaderContainer: `flex justify-between itesm-center mt-[2.2rem] mb-[1.2rem]`,
  authorContainer: `flex gap-[1rem]`,
  authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
  image: `object-cover`,
  column: `flex-1 flex flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878]`,
  listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `w-[.5rem]`,
  bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
  articleMainContainer: `flex flex-col gap-[1rem]`,
  title: `font-bold text-3xl`,
  subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
  articleText: `font-mediumSerif text-[1.4rem] text-[#292929]`,
};

const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                className={styles.image}
                src={Qazi}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.column}>
              <div>Rafeh Qazi</div>
              <div className={styles.postDetails}>
                <span>June 15 • 7 min read •</span>
                <span className={styles.listenButton}>
                  <AiFillPlayCircle />
                  Listen
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.image}
              src={Banner}
              height={100}
              width={100}
            />
          </div>
          <h1 className={styles.title}>
            7 Free Tools That Will Make You More Productive In 2022
          </h1>
          <h4 className={styles.subtitle}>
            <div>Rafeh Qazi, June 15, 2022</div>
            <div>Brief: Productivity is a skill that can be learned.</div>
          </h4>
          <div className={styles.articleText}>
            Ad duis nisi cillum excepteur deserunt. Consectetur nisi nisi non
            excepteur amet aliqua amet mollit dolor velit do aute non laboris.
            Ullamco do qui magna eu dolor consequat in eu. Nisi veniam id
            officia est. Laborum eu Lorem aliquip aute incididunt et cillum
            proident.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
