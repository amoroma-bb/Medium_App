import Logo from "../static/logo.png";
import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const styles = {
  authorContainer: "flex gap-[.4rem]",
  authorImageContainer:
    "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  postDetails: "flex-[2.5] flex flex-col",
  detailsContainer: "flex items-center justify-between text-[#787878]",
  articleDetails: "my-2 text-[.8rem]",
  authorImage: "object-cover",
  authorName: "font-semibold",
  title: "font-bold text-2xl",
  briefing: "text-[#787878]",
  category: "bg-[#F2F3F2] p-1 rounded-full",
  bookmarkContianer: "cursor-pointer",
  wrapper:
    "flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer",
  thumbnailContainer: "flex-1",
};

const PostCard = ({ post }) => {
  const date = post.data.postedOn.toDate().toDateString();
  const [authorData, setAuthorData] = useState(null);
  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData(await getDoc(doc(db, "users", post.data.author)));
    };
    getAuthorData();
  }, []);
  console.log(post.data.postedOn);
  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={Logo}
                className={styles.authorImage}
                width={40}
                height={40}
              />
            </div>
            <div className={styles.authorName}>{post.data.author}</div>
          </div>
          <h1 className={styles.title}>{post.data.title}</h1>
          <div className={styles.briefing}>{post.data.brief}</div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              {date} • {post.data.postLength} min read •{" "}
              <span className={styles.category}>{post.data.category}</span>
            </span>
            <span className={styles.bookmarkContianer}>
              <FiBookmark className="h-5 w-5"></FiBookmark>
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            height={100}
            width={100}
          ></Image>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
