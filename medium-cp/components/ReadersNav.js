import Image from "next/image";
import Link from "next/link";
import SmallLogo from "../static/SmallLogo.png";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { RiArticleLine } from "react-icons/ri";
import { BiBookmarks } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import Qazi from "../static/qazi.jpg";

const styles = {
  logoContainer: `cursor-pointer`,
  wrapper: `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]`,
  iconsContainer: `flex-1 flex-col flex justify-center gap-[1.4rem] text-2xl text-[#787878]`,
  divider: `border-b`,
  profileImage: `object-cover`,
  profileImageContainer: `w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center`,
};

const ReadersNav = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={SmallLogo} />
        </div>
      </Link>
      <div className={styles.iconsContainer}>
        <HiOutlineHome />
        <FiBell />
        <BiBookmarks />
        <RiArticleLine />
        <div className={styles.divider}></div>
        <BsPencilSquare />
      </div>
      <div className={styles.profileImageContainer}>
        <Image className={styles.profileImage} src={Qazi} />
      </div>
    </div>
  );
};

export default ReadersNav;
