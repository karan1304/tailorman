import Styles from '../../styles/components/CardComponents/cardcomponents.module.scss'
// eslint-disable-next-line react/prop-types
const Button = ({children , border}) => {
  return (
   <>
   {
    
    border ? 
    <button className={Styles.buttonWithBorder}>
     {children}
    </button>
    :
    <button className={Styles.buttonWithoutBorder}>
     {children}
    </button>
    
   }
   </>
    
  )
}

export default Button;
