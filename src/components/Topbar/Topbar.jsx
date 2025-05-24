import styles from './../../styles/components/Topbar/topbar.module.scss'
import {Images} from '../../assets/images/index'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
  

const Topbar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    // const [isOpen, toggleOpen] = useCycle(false, true);
    const navigation = [{name:'Home',link:'/'},{name:'About',link:'/about'},{name:'New Arrivals',link:'/new-arrivals'},{name:'Social Media',link:'/social-media'},{name:'Contact-us',link:'/contact-us'}];
    // const containerRef = useRef(null);
    // const { height } = useDimensions(containerRef);

    useEffect(() => {
        // Function to update screen width on window resize
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Adding event listener for resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    
  return (
    <>
    <div className={styles.topbar}>
        <div className={styles.logoContainer}>
            <h1 className={styles.logo}>TailorMan</h1>
        </div>
        {
            width > 950 ?
            <>
            <div className={styles.navigation}>
                    <div className={styles.navigationContainer}>
                        {
                            navigation.map((nav,index)=>(<Link key={index} to={nav.link} className={styles.link}>{nav.name}</Link>))
                        }
                    </div>
            </div>
            <div className={styles.buttonContainer}>
                <Link to="/login" className={styles.btns}>Login</Link>
                <Link to="/sign-up" className={styles.btns} style={{color:'#ffffff',background:'#1E3D59'}}>Sign Up</Link>
                <Link to="/cart" className={styles.btns} style={{padding:'0px',border:'none'}}><img src={Images.Cart} style={{width:'40px',height:'40px'}}/></Link>
            </div>
            </>
            :
            isMenuOpen?<Link className={styles.toggle} onClick={()=>setIsMenuOpen(false)}><img src={Images.ToggleOff}/></Link>:<Link className={styles.toggle} onClick={()=>setIsMenuOpen(true)}><img src={Images.ToggleOn}/></Link>
            

        }
        
       
    </div>
     {width <= 950 && isMenuOpen &&
     
     <div  
     className={styles.mobileVersion}>
        <div className={styles.navigation}>
                    <div className={styles.navigationContainer}>
                        {
                            navigation.map((nav,index)=>(
                            <Link 
                            to={nav.link} 
                            key={index} 
                            className={styles.link} 
                            onClick={()=>{setIsMenuOpen(false)}}>
                                {nav.name}
                            </Link>))
                        }
                    </div>
        </div>
        <div className={styles.buttonContainer}>
            <button className={styles.btns}>Login</button>
            <button className={styles.btns} style={{color:'#ffffff',background:'#1E3D59'}}>Sign Up</button>
            <button className={styles.btns} style={{padding:'0px',border:'none'}}><img src={Images.Cart} style={{width:'40px',height:'40px'}}/></button>
        </div>
    </div>}
    </>
  )
}

export default Topbar