import PropTypes from "prop-types";

const Tags = ({ text }) => {
  return <span className="tags">{text}</span>;
};

Tags.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tags;