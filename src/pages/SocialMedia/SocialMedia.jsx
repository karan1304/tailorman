
import Styles from '../../styles/pages/SocialMedia/socialmedia.module.scss';
import {Images} from '../../assets/images/index'

const SocialMedia = () => {
  return (
    <>
    <section className={Styles.socialMediaPage}>
        <div className={Styles.bannerContainer}>
         <img src={Images.INSTAGRAMBANNERIMAGE} alt="banner image" className={Styles.bannerImage}/>
        </div>

       <div className={Styles.ImagesContainer1}>
        <div className={Styles.left}>
          <img src={Images.INSTAGRAM_1} className={Styles.first}/>
        </div>
        <div className={Styles.right}>
          <img src={Images.INSTAGRAM_2} className={Styles.first}/>
          <img src={Images.INSTAGRAM_3} className={Styles.second}/>
        </div>
       </div>

       <div className={Styles.ImagesContainer2}>
         <div className={Styles.left}>
           <img src={Images.INSTAGRAM_5} className={Styles.first}/>
           <img src={Images.INSTAGRAM_6} className={Styles.second}/>
         </div>
         <div className={Styles.right}>
           <img src={Images.INSTAGRAM_4} className={Styles.first}/>
         </div>
        
       </div>

       <div className={Styles.ImagesContainer3}>
        
         <div className={Styles.first}><img src={Images.INSTAGRAM_7} /></div>
         <div className={Styles.second}><img src={Images.INSTAGRAM_8} /></div>
         <div className={Styles.third}><img src={Images.INSTAGRAM_9} /></div>
         <div className={Styles.fourth}><img src={Images.INSTAGRAM_10} /></div>
       </div>

       <div className={Styles.socialMedia}>
         <div className={Styles.socialMediaPlatform}>
          <img src={Images.WHITESNAPCHAT} alt="snapchat" className={Styles.socialMediaPlatformIcon}/>
          <p className={Styles.handlingName}>snap@tailorman243</p>
         </div>

         <div className={Styles.socialMediaPlatform}>
          <img src={Images.WHITEFACEBOOK} alt="facebook" className={Styles.socialMediaPlatformIcon}/>
          <p className={Styles.handlingName}>meta@tailorman245</p>
         </div>

         <div className={Styles.socialMediaPlatform}>
          <img src={Images.WHITEINSTAGRAM} alt="instagram" className={Styles.socialMediaPlatformIcon}/>
          <p className={Styles.handlingName}>insta@tailorman245</p>
         </div>

         <div className={Styles.socialMediaPlatform}>
          <img src={Images.WHITEYOUTUBE} alt="youtube" className={Styles.socialMediaPlatformIcon}/>
          <p className={Styles.handlingName}>youtube@tailorman245</p>
         </div>

         <div className={Styles.socialMediaPlatform}>
          <img src={Images.WHITETWITTER} alt="twetter" className={Styles.socialMediaPlatformIcon}/>
          <p className={Styles.handlingName}>x@tailorman245</p>
         </div>
       </div>

    </section>
    </>
  )
}

export default SocialMedia