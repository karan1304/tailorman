import Styles from '../../styles/pages/contact/contact.module.scss'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Images } from "../../assets/images"

const FAQ = [
    {
      "question": "What is Tailor Man?",
      "answer": "Tailor Man is a premium men’s clothing brand offering stylish, high-quality apparel designed for modern men. We focus on craftsmanship, comfort, and timeless fashion to elevate your wardrobe."
    },
    {
      "question": "How can I contact customer support?",
      "answer": "You can reach our support team through the contact form on our website or email us directly. We strive to respond to all inquiries within 24-48 hours."
    },
    {
      "question": "How do I place an order?",
      "answer": "Simply browse our website, select your favorite items, choose the right size, and add them to your cart. Once ready, proceed to checkout and complete the payment."
    },
    {
      "question": "What payment methods do you accept?",
      "answer": "We accept major credit/debit cards, PayPal, and other secure payment methods. All transactions are encrypted to ensure your security."
    },
    {
      "question": "What are your shipping options?",
      "answer": "We offer standard and express shipping options. Delivery times vary based on location, and shipping rates are calculated at checkout."
    },
    {
      "question": "How can I track my order?",
      "answer": "Once your order is shipped, you will receive a tracking link via email. You can use this link to monitor the status of your delivery."
    },
    {
      "question": "What is your return and exchange policy?",
      "answer": "We offer hassle-free returns and exchanges within 30 days of purchase. Items must be unworn, unwashed, and in original packaging."
    },
    {
      "question": "How do I initiate a return or exchange?",
      "answer": "To start a return or exchange, visit our 'Returns & Exchanges' page and follow the instructions. Our team will guide you through the process."
    },
    {
      "question": "How do I find the right size?",
      "answer": "We provide a detailed size guide on each product page to help you find the perfect fit. If you need assistance, feel free to contact us."
    },
    {
      "question": "What should I do if my item doesn’t fit?",
      "answer": "If your item doesn’t fit as expected, you can exchange it for a different size. Just follow our return process and select the correct size."
    },
    {
      "question": "How do I take care of my Tailor Man clothing?",
      "answer": "To maintain quality, follow the care instructions on the label. Generally, we recommend washing in cold water, using mild detergent, and air-drying."
    },
    {
      "question": "Are your products sustainable?",
      "answer": "Yes, we prioritize sustainability by using high-quality, eco-friendly fabrics and ethical manufacturing practices. Our goal is to create fashion that lasts."
    }
  ]
  
const Contact = () => {
  return (
    <section className={Styles.contactMainSection} >

        <div className={Styles.firstDivison}>
            <div className={Styles.containerDivison}>
                <div className={Styles.shortDescription}>
                    <h1 className={Styles.heading}>We are here to help you!</h1>
                    <p className={`${Styles.description}`}>At Tailor Man, we value your feedback and strive to enhance your shopping experience. Let us know how we can serve you better through our contact form. Whether you need assistance or have suggestions, we’re here to help. Your style matters, and we’re honored to support your journey.</p>
                </div>
                <div className={Styles.formContainer}>
                    <form className={Styles.form}>
                        <input type='text' placeholder='Name' id='name'/>
                        <input type='email' placeholder='Email' id='email'/>
                        <input type='phone' placeholder='Phone' id='phone'/>
                        <textarea placeholder='Comment' id='comment'></textarea>
                        <button type='submit' className={Styles.sendMessage}>SEND MESSAGE</button>
                    </form>
                </div>
                
            </div>
        </div>

        <div className={Styles.secondDivison}>
            <p className={Styles.quote}>
                “Men are Brave”
                <img src={Images.BATMAN} alt="batman" className={Styles.batman}/>
            </p>
            {/* <img src={Images.BATMAN} alt="batman" width={100} height={100} className={Styles.batman}/> */}
        </div>

        <div className={Styles.thirdDivison}>

            <h1 className={Styles.heading}>Tailor Man FAQ – Everything You Need to Know</h1>
            <div className={Styles.accordianContainer}>

                {
                    FAQ.map((item, index) => (
                        <Accordion key={index}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>} sx={{backgroundColor:'#1E3D59',color:'white',height:'60px',borderRadius:'3px'}}>
                            <Typography>{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>{item.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }

            </div>
        </div>

    </section>
  )
}

export default Contact