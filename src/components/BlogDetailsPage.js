import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import BlogDetailsItem from "./BlogDetailsItem";

function BlogDetailsPage({ blogs }) {
  const { id } = useParams();
  const blog = blogs.find((blog1) => blog1.id === id);
  return <BlogDetailsItem {...blog} />;
}

const mapStateToProps = (state) => ({ blogs: state.blogs });

// props parametresini stateden gelen yani store daki id ve bloglist den gelen elemanın idlerini karşılaştırmak için aldık

export default connect(mapStateToProps)(BlogDetailsPage);
