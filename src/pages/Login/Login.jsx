
import Styles from '../../styles/pages/login/login.module.scss';

const Login = () => {
  return (
    <section className={Styles.login}>

    <form action="#" method='post' className={Styles.loginForm}>

       <h1 className={Styles.formHeading}>Login</h1>

      <div className={Styles.first}>
       <label className={Styles.label}>Email:</label>
       <input type='email' placeholder='Enter email' className={Styles.emailInput}/>
      </div>

      <div className={Styles.second}>
       <label className={Styles.label}>Password:</label>
       <input type='password' placeholder='Enter password' className={Styles.passwordInput}/>
      </div>

      <div className={Styles.third}>
       <input type='checkbox'/>
       <p className={Styles.showPassword}>Show Password</p>
      </div>

      <button className={Styles.signIn}>SIGN IN</button>

      <p  className={Styles.forgotPassword}>Forgot  <strong>Password?</strong></p>
      <p className={Styles.donthaveAccount}>Don&apos;t have an account? <strong>Sign up</strong></p>
    </form>

    </section>
  )
}

export default Login