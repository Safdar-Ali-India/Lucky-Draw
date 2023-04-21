import styles from "./sign-in-mobile-number.module.css";
const SignInMobileNumber = () => {
  return (
    <div className={styles.signInMobileNumber}>
      <div className={styles.column}>
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src="/.svg" />
          <div className={styles.nameless}>nameless</div>
        </div>
        <div className={styles.footer}>
          <div className={styles.relume}>© 2022 Relume</div>
        </div>
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
      <div className={styles.welcomeHowDo}>
        Welcome! How do you to get started?
      </div>
      <div className={styles.frameParent}>
        <div className={styles.mobileNumberWrapper}>
          <div className={styles.mobileNumber}>Mobile number</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.mobileNumber}>9456784567</div>
        </div>
        <img className={styles.groupChild} alt="" src="/rectangle-2.svg" />
        <img
          className={styles.mobileLightSolid}
          alt=""
          src="/mobile--light--solid.svg"
        />
      </div>
      <div className={styles.continueWithFacebookLeftParent}>
        <div className={styles.continueWithFacebookLeft}>
          <img
            className={styles.facebookLogoIcon}
            alt=""
            src="/facebook-logo.svg"
          />
          <b className={styles.continueWithFacebook}>Continue with Facebook</b>
        </div>
        <div className={styles.continueWithAppleLeftAli}>
          <img
            className={styles.facebookLogoIcon}
            alt=""
            src="/apple-logo.svg"
          />
          <div className={styles.mobileNumber}>Continue with Apple</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.or}>or</div>
          <div className={styles.signUpWith}>
            Sign up with you number instead
          </div>
          <div className={styles.whenYouTapContainer}>
            <span>{`When you tap “Continue”, LuckyDodo will send a text with a verification code. Message and data rates may apply. The verified phone number can be used to login. `}</span>
            <span className={styles.learnWhatHappens}>
              Learn what happens when your number changes.
            </span>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.continue}>Continue</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.mobileNumberWrapper}>
          <div className={styles.mobileNumber}>Mobile number</div>
        </div>
        <div className={styles.group}>
          <div className={styles.mobileNumber}>945</div>
          <img
            className={styles.iconnavigationarrowBackIos}
            alt=""
            src="/iconnavigationarrow-back-ios-24px6.svg"
          />
          <div className={styles.div2}>945 6784567</div>
        </div>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-2.svg" />
        <img
          className={styles.mobileLightSolid}
          alt=""
          src="/mobile--light--solid.svg"
        />
      </div>
      <div className={styles.continueWithGoogleLeftAl}>
        <img className={styles.googleLogoIcon} alt="" src="/google-logo.svg" />
        <div className={styles.mobileNumber}>Continue with Google</div>
      </div>
    </div>
  );
};

export default SignInMobileNumber;
