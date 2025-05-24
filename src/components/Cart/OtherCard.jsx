import Styles from '../../styles/components/CartComponents/cartcomponents.module.scss'
import { Images } from '../../assets/images/index'

const OtherCard = () => {
  return (
    <div className={Styles.otherCard}>
     <div className={Styles.imageContainer}>
       <img src="" alt=""/>
     </div>
     <p className={Styles.productName}>Name of the product</p>
     <p className={Styles.price}>Rs 00.00</p>
     <button className={Styles.addToCartButton}><img src={Images.SHOPPING_CART}/></button>
    </div>
  )
}

export default OtherCard