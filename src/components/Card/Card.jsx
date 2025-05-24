import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './../../styles/components/Card/card.module.scss'
import { motion } from 'framer-motion'
import Button from '../CardComponents/Button';


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const Card = ({item , isNew}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <motion.div 
    className={styles.card}
    initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
        onLoad={() => setIsLoaded(true)}
    >
        <img src={item.IMG}/>
        <div className={styles.cardData}>
            <h1 className={styles.heading}>{item.heading}</h1>
            <div className={styles.price}>
                {item.discountedPrice && <p className={styles.discountedPrice}>{`Rs ${item.discountedPrice}`}</p>}
                <p className={`${styles.actualPrice} ${isNew === 'true' && styles.newProduct}`}>{`Rs ${item.actualPrice}`}</p>
            </div>
            <div className='flex justify-center items-center gap-4 w-full p-2'>
              <Button border={true}>Add to cart</Button>
              <Button>Buy</Button>
            </div>
        </div>
    </motion.div>
  )
}

Card.propTypes = {
  item: PropTypes.shape({
    IMG: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    discountedPrice: PropTypes.number,
    actualPrice: PropTypes.number.isRequired,
  }).isRequired,
  isNew: PropTypes.bool,
};

export default Card;