import PropTypes from "prop-types";
import "../sass/components/location.scss";

const Tags = ({ text }) => {
  console.log("Tag text:", text); // Débogage
  return (
    <h2 className="tags">{text}</h2>
  );
};

Tags.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tags;
