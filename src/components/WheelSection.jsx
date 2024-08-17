// import { wheelData } from "../data";
import PropTypes from 'prop-types'
const WheelSection = ({section, isPrize}) => {
  return <div className={section.cssClass} 
      style={{
        background: `linear-gradient(to top, ${isPrize && section.color ? section.color : '1d1d1bd7'}, #1f1f1f)`,
        borderColor: isPrize && section.color ? section.color : 'black'
        }}>
      {isPrize && section.logo && <img src={section.logo} alt={section.id}></img>}
      <h3>{isPrize && section.prize ? section.prize : 'Oops!'}</h3>
      <p>{isPrize && section.desc ? section.desc : 'Please try again'}</p>
    </div>;
};

export default WheelSection

WheelSection.propTypes = {
    section: PropTypes.object,
    isPrize: PropTypes.bool
}
