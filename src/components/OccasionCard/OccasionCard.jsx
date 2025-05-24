import React, { useState } from 'react'
import styles from './../../styles/components/OccasionCard/occasionCard.module.scss'
import {Images} from '../../assets/images/index'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const OccasionCard = ({item}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const handleAnchor = (e)=>
    {
        e.preventDefault();
        toast.info("Coming Soon",{autoClose:3000})
    }
  return (
    <>
    <motion.div 
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
      className={styles.card}
      >
        <img src={item.IMG}/>
        <a href="#" className={styles.cardLink} onClick={handleAnchor}>{item.link}</a>
    </motion.div>
    </>
  )
}

export default OccasionCard