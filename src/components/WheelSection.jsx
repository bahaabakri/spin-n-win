// import { wheelData } from "../data";
import PropTypes from 'prop-types'
const WheelSection = ({section}) => {
  return <div className={section.cssClass}>{section.title}</div>;
};

export default WheelSection

WheelSection.propTypes = {
    section: PropTypes.object
}
