import PropTypes from "prop-types";
import "../sass/components/location.scss";

const Tags = ({ text }) => {
  console.log("Tag text:", text); // Débogage
  return (
    <span className="tags">{text}</span>
  );
};

Tags.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tags;
