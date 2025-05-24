import PropTypes from 'prop-types';
import Styles from '../../styles/components/CultureCard/culturecard.module.scss';

const CultureCard = ({ image, description }) => {
  return (
    <div className={Styles.CultureCard}>
      <img src={image} alt="Culture" className={Styles.cardImage} />
      <p className={Styles.cardDiscription}>
        {description}
      </p>
      <button type="submit" className={Styles.button}>Learn More</button>
    </div>
  );
};

CultureCard.propTypes = {
  image: PropTypes.string.isRequired, // Expecting a string URL and marking it as required
  description: PropTypes.string.isRequired // Expecting a string description and marking it as required
};

export default CultureCard;