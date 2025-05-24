
import Styles from '../../styles/pages/newarrivals/newarrivals.module.scss';
import {Images} from '../../assets/images/index'
import Card from '../../components/Card/Card';
import { toast } from 'react-toastify';

const NewProducts = [
  {
    IMG: Images.PRODUCT_1,
    heading: 'Crochet chocolate brown',
    actualPrice: 3500
  },
  {
    IMG: Images.BEACH_SHIRT,
    heading: 'Blue beach shirt',
    actualPrice: 3600
  },
  {
    IMG: Images.BEACH_SHORTS,
    heading: 'Green beach shorts',
    actualPrice: 3700
  },
  {
    IMG: Images.GRAY_BLAZER,
    heading: 'Gray blazer',
    actualPrice: 3800
  },
  {
    IMG: Images.BROWN_BLAZER,
    heading: 'Brown blazer',
    actualPrice: 3900
  },
  {
    IMG: Images.BROWN_CARGO,
    heading: 'Brown Cargo',
    actualPrice: 4000
  },
  {
    IMG: Images.GRAY_CARGO,
    heading: 'Gray Cargo',
    actualPrice: 4100
  },
  {
    IMG: Images.GREEN_CARGO,
    heading: 'Green Cargo',
    actualPrice: 4200
  },
  {
    IMG: Images.BLACK_CARGO,
    heading: 'Black Cargo',
    actualPrice: 4300
  },
  {
    IMG: Images.BLACK_TSHIRT,
    heading: 'Black half sleve tshirt',
    actualPrice: 4400
  },
  {
    IMG: Images.BLUE_TSHIRT,
    heading: 'Blue half sleve tshirt',
    actualPrice: 4500
  },
  {
    IMG: Images.ARMY_GREEN_TSHIRT,
    heading: 'Army green half sleve tshirt',
    actualPrice: 4600
  },
  {
    IMG: Images.MAROON_TSHIRT,
    heading: 'Maroon half sleve tshirt',
    actualPrice: 4700
  },
  {
    IMG: Images.GRAY_TSHIRT,
    heading: 'Gray half sleve tshirt',
    actualPrice: 4800
  },
  {
    IMG: Images.GRAY_COTTON_SHIRT,
    heading: 'Gray cotton shirt',
    actualPrice: 4900
  },
  {
    IMG: Images.BLUE_CARGO_SHIRT,
    heading: 'Blue cargo shirt',
    actualPrice: 5000
  },
  {
    IMG: Images.BLUE_SILK_SHIRT,
    heading: 'Blue silk shirt',
    actualPrice: 5100
  },
  {
    IMG: Images.GREEN_COTTON_SHIRT,
    heading: 'Green cotton shirt',
    actualPrice: 5200
  },
  {
    IMG: Images.YELLOW_CHIKANKARI_KURTA,
    heading: 'Yellow chikankari kurta',
    actualPrice: 5300
  },
  {
    IMG: Images.GREEN_CHIKANKARI_KURTA,
    heading: 'Green chikankari kurta',
    actualPrice: 5400
  },
  {
    IMG: Images.BLUE_CHIKANKARI_KURTA,
    heading: 'Blue chikankari kurta',
    actualPrice: 5500
  },
  {
    IMG: Images.PINK_CHIKANKARI_KURTA,
    heading: 'Pink chikankari kurta',
    actualPrice: 5600
  },
  {
    IMG: Images.WHITE_CHIKANKARI_KURTA,
    heading: 'White chikankari kurta',
    actualPrice: 5700
  },
  {
    IMG: Images.ARMY_GREEN_CARGO_SHIRT,
    heading: 'Army green cargo shirt',
    actualPrice: 5800
  }
];

const tracking = [
  {
    Img:Images.SHIPPING,
    title:"Free Shipping",
    description:"On orders of INR 1500 and above"
  },
  {
    Img:Images.RETURN,
    title:"Easy Returns",
    description:"Free returns until 7 days of delivery"
  },
  {
    Img:Images.PAYMENT,
    title:"Secure payment",
    description:"Safe and hassle free checkout"
  },
]

const NewArrivals = () => {
  const handleAnchor = (e)=>
    {
        e.preventDefault();
        toast.info("Coming Soon",{autoClose:3000})
    }
  return (
    <section className={Styles.NewArrivals}>
      {/* banner image */}
        <div className={Styles.bannerImageContainer}>
          <img src={Images.BANNER_IMAGE} alt="" className={Styles.banner_image}/>
        </div>
      {/* Products */}
      <div className={Styles.newProductsContainer}>
        <div className={Styles.filterContainer}>
          <button className={Styles.sort}>SORT<img src={Images.SORT_ARROWS} className={Styles.sortIcon}/></button>
          <button className={Styles.category}>CATEGORY<img src={Images.CATEGORY_ICON} className={Styles.categoryIcon}/></button>
        </div>
        <div className={Styles.newProducts}>
          {NewProducts.map((product, index) => (
            <Card key={index} item={product} isNew="true"/>
          ))}
        </div>
        <div className={Styles.more}>
            <a href="" className={Styles.seeMore} onClick={handleAnchor}>SEE MORE</a>
        </div>
      </div>
      
      <div className={Styles.shipping_returns_payment_container}>
            {
              tracking.map((track , index)=>
              (
                <div key={index} className={Styles.shipping_returns_payment}>
                  <img src={track.Img} alt="" className={Styles.tracking_icon}/>
                  <h4 className={Styles.title}>{track.title}</h4>
                  <p className={Styles.description}>{track.description}</p>
                </div>
              ))
            }
      </div>
    </section>
  )
}

export default NewArrivals