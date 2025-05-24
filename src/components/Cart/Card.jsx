
import Styles from '../../styles/components/CartComponents/cartcomponents.module.scss'
import { Images } from '../../assets/images/index'
const Card = () => {
  return (
    <div className={Styles.card}>
      <div className={Styles.imageContainer}>
        <img src={Images.CART_BLUE_SHIRT} alt="product name"/>
      </div>
      <div className={Styles.detailsContainer}>
        <div className={Styles.details}>
          <div className={Styles.detail}>
            <strong>Name:</strong><span>Product Name</span>
          </div>
          <div className={Styles.detail}>
            <strong>Color:</strong><span>Color Name</span>
          </div>
          <div className={Styles.detail}>
            <strong>Size:</strong><span>Size of the product</span>
          </div>
          <div className={Styles.detail}>
            <strong>Price:</strong><span>Product Price</span>
          </div>
          <div className={Styles.detail}>
            <strong>Quantity:</strong>
            <div className={Styles.qtnBtnContainer}><button className={Styles.quantityBtn}><img src={Images.MINUS}/></button><strong>1</strong><button className={Styles.quantityBtn}><img src={Images.PLUS}/></button></div>
          </div>
          <div className={Styles.detail}>
            <strong>Total:</strong><span>Total price of the product</span>
          </div>
        </div>
      </div>
      <div className={Styles.closeButtonContainer}>
        <button className={Styles.closeButton}>
          <img src={Images.CLOSE}/>
        </button>
      </div>
    </div>
  )
}

export default Card