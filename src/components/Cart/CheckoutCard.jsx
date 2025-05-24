import Styles from '../../styles/components/CartComponents/cartcomponents.module.scss'

const CheckoutCard = () => {
  return (
    <div className={Styles.CheckoutCard}>
     <div className={Styles.price_and_title_container}>
      <strong>Subtotal</strong>
      <p>Rs subtotal</p>
     </div>
     <div className={Styles.price_and_title_container}>
      <strong>Tax</strong>
      <p>Rs tax</p>
     </div>
     <div className={Styles.price_and_title_container}>
      <strong>Discount</strong>
      <p>Rs discount</p>
     </div>
     <div className={Styles.price_and_title_container}>
      <strong>Shipping</strong>
      <p>Rs shipping</p>
     </div>

    <div className={Styles.finalContainer}>
      <div className={`${Styles.price_and_title_container} ${Styles.total}`}>
       <strong>Total</strong>
       <p>Rs total</p>
      </div>
      <button className={Styles.checkoutBtn}>Proceed to checkout</button>
    </div>

    </div>
  )
}

export default CheckoutCard