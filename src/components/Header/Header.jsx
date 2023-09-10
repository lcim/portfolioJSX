import "./Header.css";
import {PropTypes} from 'prop-types'

const Header = ({ heading, details }) => {

  return (
    <div className="header__container">
      <h1>{heading}</h1>
      <p>{details}</p>
      </div>      
  );
};
Header.propTypes = {
    heading: PropTypes.string,
    details: PropTypes.string
}
export default Header;
