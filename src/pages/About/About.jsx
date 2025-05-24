import { TypeAnimation } from "react-type-animation"
import { Images } from "../../assets/images"
import Styles from '../../styles/pages/about/about.module.scss'
import CultureCard from "../../components/CultureCard/CultureCard"

const culture = [
  {
    image:Images.HISTORY,
    description:`From a 1988 tailoring startup to a global men's fashion brand, we redefine style.`
  },
  {
    image:Images.VALUES,
    description:`Our values guide everything we do, reminding us who we are and who we want to be.`
  },
  {
    image:Images.AWARDS,
    description:`Our craftsmanship and strong client connections have earned us prestigious accolades.`
  },



]
const About = () => {

  return (
    <section className="about">
        {/* Top Component */}
        <div className={Styles.aboutTopComponent}>
            <img src={Images.AboutMainImage} alt="about-main--image" className={Styles.aboutMainImage}/>
              <div className={Styles.quote}>
              <TypeAnimation
                  sequence={[
                      `FAILURE is an option here. If things are not failing you are not INNOVATING.`,
                      5000,  // Wait 1 second before repeating
                      // 'Failure is an option here. If things are not failing you are not innovating.',
                      'When something is IMPORTANT enough, YOU DO IT even if the ODDS are not in YOUR FAVOUR.',
                      5000,  // Wait 1 second again
                      'THE FIRST STEP is to establish that something is POSSIBLE; then probability will occur.',
                      5000,  // Repeat the same delay or adjust it
                      `I think it's POSSIBLE for ORDINARY people to CHOOSE to be EXTRAORDINARY.`,
                      5000
                  ]}
                  wrapper="p"
                  speed={50}
                  // style={{ fontSize: '2em', display: 'inline-block' }}
                  className="text-lg sm:text-2xl md:text-3xl inline-block"
                  repeat={Infinity}
                  />
              </div>

              <div className={Styles.quote2}>
              <TypeAnimation
                  sequence={[
                      `BELIEVE you can and you're halfway there.`,
                      5000,  // Wait 1 second before repeating
                      // 'Failure is an option here. If things are not failing you are not innovating.',
                      'If you want to live a HAPPY LIFE, tie it to a GOAL, NOT to PEOPLE or THINGS.',
                      5000,  // Wait 1 second again
                      `LIFE isn't about FINDING yourself. Life is about CREATING yourself`,
                      5000,  // Repeat the same delay or adjust it
                      `ENJOY every little moment.`,
                      5000
                  ]}
                  wrapper="p"
                  speed={50}
                  className="text-lg sm:text-2xl md:text-3xl inline-block"
                  // className={`inline-block ${Styles.quote2}`}
                  repeat={Infinity}
                  />
              </div>
        </div>
        {/* About company*/}
        <div className="pt-5 pr-3 pb-16 pl-3">
            <h1 className={`text-4xl ${Styles.heading}`}>ABOUT</h1>
            <p className={Styles.aboutCompany}>
            <span className="text-[#1E3D59] font-extrabold">TailorMan</span> stands as a beacon of excellence in men’s fashion, embodying sophistication, quality, and innovation. Established with a vision to deliver the finest tailored clothing, <span className="text-[#1E3D59] font-extrabold">TailorMan</span> has quickly earned a reputation as a successful and trusted brand among fashion-conscious men worldwide. From luxurious suits and elegant formal wear to versatile casual pieces, <span className="text-[#1E3D59] font-extrabold">TailorMan</span> is the go-to destination for men who appreciate craftsmanship, fit, and timeless style.

            At the heart of the brand lies a commitment to exceptional tailoring. Each garment is meticulously crafted using premium fabrics sourced from renowned textile mills. The brand prides itself on its attention to detail—whether it’s the precision of hand-stitched lapels, the perfect drape of trousers, or the finishing touches of personalized monograms. <span className="text-[#1E3D59] font-extrabold">TailorMan</span> understands that a great fit isn’t just about measurements; it’s about capturing the essence of individuality and confidence in every outfit.

            <span className="text-[#1E3D59] font-extrabold">TailorMan</span>’s offerings extend beyond traditional tailoring. The brand blends classic aesthetics with modern trends, ensuring men can effortlessly transition from boardroom meetings to social gatherings. Its collections include everything from tailored blazers and dress shirts to smart-casual essentials like chinos, polos, and knitwear. For special occasions, <span className="text-[#1E3D59] font-extrabold">TailorMan</span> offers bespoke and made-to-measure services, giving clients the luxury of wearing pieces designed exclusively for them.

            A key to <span className="text-[#1E3D59] font-extrabold">TailorMan</span>’s success is its dedication to customer satisfaction. With personalized consultations and a seamless shopping experience—whether in-store or online—the brand guarantees a perfect fit and style tailored to each customer’s needs. Its sustainability initiatives, including responsible sourcing and ethical production practices, further solidify its position as a modern, socially conscious brand.

            With a blend of tradition, innovation, and premium craftsmanship, <span className="text-[#1E3D59] font-extrabold">TailorMan</span> continues to redefine what it means to dress well, empowering men to make bold, refined fashion statements.            </p>
        </div>
                {/* Ceo  */}
        <div className={Styles.aboutCeo}>
          <div className={Styles.aboutCeoSubpart}>
            <div className={Styles.ceoImageContainer}>
                <img src={Images.CEO} alt="CEO" className={Styles.ceoImage}/>
            </div>
            <p className={Styles.aboutCeoDiscription}>
            <span className="text-white font-extrabold">Mike Milisburg, CEO of TailorMan</span> is a visionary leader with a passion for redefining men’s fashion through innovation, precision, 
            and exceptional craftsmanship. With over a decade of experience in the fashion industry, Mike has driven the brand’s rapid success by combining timeless tailoring techniques with modern trends. Known for his strategic mindset and customer-first approach, he ensures TailorMan delivers unparalleled quality and personalized service, making it a preferred destination for stylish and confident men worldwide.
            </p>    
          </div>      

        </div>

        {/* Culture */}
        <div className={Styles.culture}>
          <h1 className={`text-4xl ${Styles.heading}`}>Our success starts with our culture</h1>
          <div className={Styles.cardsContainer}>
          {
              culture.map((obj,index)=>(
                <CultureCard key={index} image={obj.image} description={obj.description}/>
              ))
            }
          </div>
            
        </div>

    </section>
  )
}

export default About