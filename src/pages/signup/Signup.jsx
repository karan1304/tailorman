
import Styles from '../../styles/pages/login/login.module.scss';

const Signup = () => {
  return (
    <section className={Styles.login}>

    <form action="#" method='post' className={Styles.loginForm}>

       <h1 className={Styles.formHeading}>SIGN UP</h1>

      <div className={Styles.name}>
       <label className={Styles.label}>Name:</label>
       <input type='text' placeholder='Enter name' className={Styles.nameInput}/>
      </div>

      <div className={Styles.first}>
       <label className={Styles.label}>Email:</label>
       <input type='email' placeholder='Enter email' className={Styles.emailInput}/>
      </div>

      <div className={Styles.second}>
       <label className={Styles.label}>Password:</label>
       <input type='password' placeholder='Enter password' className={Styles.passwordInput}/>
      </div>

      {/* <div className={Styles.confPassword}>
       <label className={Styles.label}>Confirm Password:</label>
       <input type='password' placeholder='Enter Confirm password' className={Styles.confirmPasswordInput}/>
      </div> */}

      <div className={Styles.third}>
       <input type='checkbox'/>
       <p className={Styles.showPassword}>Show Password</p>
      </div>

      <button className={Styles.signIn}>SIGN UP</button>

      <p className={Styles.haveAccount}>Already have an account? <strong>Sign in</strong></p>
    </form>

    </section>
  )
}

export default Signup