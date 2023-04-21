import styles from "./register.module.css";
const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.letsGetYouStartedParent}>
        <b className={styles.letsGetYou}>Let’s get you started</b>
        <div className={styles.fullNameParent}>
          <div className={styles.fullName}>Full name</div>
          <div className={styles.adeTigerParent}>
            <div className={styles.adeTiger}>Ade Tiger</div>
            <div className={styles.groupChild} />
          </div>
        </div>
        <div className={styles.emailAddressParent}>
          <div className={styles.fullName}>Email address</div>
          <div className={styles.adeTigerParent}>
            <div className={styles.adeTiger}>yourname@email.com</div>
            <div className={styles.groupChild} />
          </div>
        </div>
        <div className={styles.phoneNumberParent}>
          <div className={styles.fullName}>Phone number</div>
          <div className={styles.adeTigerParent}>
            <div className={styles.div}>+234</div>
            <div className={styles.div1}>800</div>
            <div className={styles.div2}>9700</div>
            <div className={styles.div3}>2738</div>
            <div className={styles.groupChild} />
            <img className={styles.groupIcon} alt="" src="/group-8079.svg" />
          </div>
        </div>
        <div className={styles.locationParent}>
          <div className={styles.location}>Location</div>
          <div className={styles.optional}>(Optional)</div>
          <div className={styles.selectLocationParent}>
            <div className={styles.adeTiger}>Select Location</div>
            <div className={styles.groupChild} />
            <img className={styles.groupIcon1} alt="" src="/group1.svg" />
          </div>
        </div>
        <div className={styles.createPasswordParent}>
          <div className={styles.createPassword}>Create password</div>
          <div className={styles.passwordMustContain}>
            Password must contain a minimum of 8 characters
          </div>
          <div className={styles.passwordMustContain1}>
            Password must contain at least one symbol e.g. @, !
          </div>
          <img className={styles.groupChild1} alt="" src="/group-8081.svg" />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild2} />
          <b className={styles.signUp}>Sign Up</b>
        </div>
        <div className={styles.alreadyAUserParent}>
          <b className={styles.fullName}>Already a user?</b>
          <b className={styles.login}>Login</b>
        </div>
      </div>
      <img className={styles.stroke5Icon} alt="" src="/stroke-5.svg" />
      <div className={styles.finalLuckyDodoVar01Parent}>
        <img
          className={styles.finalLuckyDodoVar01Icon}
          alt=""
          src="/final-lucky-dodo-var011@2x.png"
        />
        <img
          className={styles.finalLuckyDodoVar05Icon}
          alt=""
          src="/final-lucky-dodo-var051@2x.png"
        />
      </div>
    </div>
  );
};

export default Register;
