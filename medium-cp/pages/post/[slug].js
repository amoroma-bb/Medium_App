import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";

const styles = {
  content: `flex`,
};

const Post = () => {
  return (
    <div className={styles.content}>
      <ReadersNav />
      <div>Article Main Will Go Here</div>
      <Recommendations />
    </div>
  );
};

export default Post;
