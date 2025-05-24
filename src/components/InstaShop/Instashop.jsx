import {Images} from '../../assets/images/index'
import styles from './../../styles/components/InstaShop/instaShop.module.scss'
import { motion } from 'framer-motion';
const Instashop = () => {
  
  return (
    <>
    <h1 className={styles.heading}>Instagram</h1>
    <p className={styles.subHeading1}><a href="#" className={styles.tag} >INSTASHOP : </a>Shop from our Instagram!</p>
    <p className={styles.subHeading2}>Tag us: @TailorMan & #john wick to get featured</p>
    <div className={styles.cardContainer}>
      <motion.div 
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
         duration: 0.8,
         delay: 0.5,
         ease: [0, 0.71, 0.2, 1.01]
       }}
      className={`${styles.container1} ${styles.container}`}>
        <img src={Images.Insta1} className={styles.img1}/>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} 
      className={`${styles.container2} ${styles.container}`}>
        <img src={Images.Insta2} className={styles.img2}/>
        <img src={Images.Insta3} className={styles.img3}/>          
      </motion.div>
       <motion.div 
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
         duration: 0.8,
         delay: 0.5,
         ease: [0, 0.71, 0.2, 1.01]
       }} 
       className={`${styles.container3} ${styles.container}`}>
        <img src={Images.Insta4} className={styles.img4}/>
        <img src={Images.Insta5} className={styles.img5}/>
       </motion.div>
       <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }} 
       className={`${styles.container4} ${styles.container}`}>
        <img src={Images.Insta6} className={styles.img6}/>
        <img src={Images.Insta7} className={styles.img7}/>
       </motion.div>
        
        
    </div>
    </>
  )
}

export default Instashop