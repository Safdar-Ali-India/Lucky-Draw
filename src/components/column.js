import styles from "./column.module.css";
const Column = () => {
  return (
    <div className={styles.column}>
      <div className={styles.navbar}>
        <div className={styles.navbarInner}>
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
      </div>
      <div className={styles.content}>
        <div className={styles.sectionTitle}>
          <div className={styles.welcomeBack}>Welcome back</div>
          <div className={styles.pleaseEnterYour}>
            Please enter your contact details to connect.
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.input}>
            <div className={styles.emailAddress}>Email address</div>
            <div className={styles.input1}>
              <div className={styles.namecompagnycom}>name@compagny.com</div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.emailAddress}>Password</div>
            <div className={styles.input3}>
              <div className={styles.div}>*********</div>
            </div>
          </div>
          <div className={styles.content1}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.namecompagnycom}>Remember me</div>
            </div>
            <div className={styles.forgotPassword}>Forgot password</div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <div className={styles.forgotPassword}>Log in</div>
            </div>
            <div className={styles.button1}>
              <img
                className={styles.flatColorIconsgoogle}
                alt=""
                src="/flatcoloriconsgoogle.svg"
              />
              <div className={styles.forgotPassword}>Log in with Google</div>
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.namecompagnycom}>
              Don’t have an account ?
            </div>
            <div className={styles.forgotPassword}>Sign up here</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.namecompagnycom}>© 2022 Relume</div>
      </div>
    </div>
  );
};

export default Column;
