import styles from "./create-account6.module.css";
const CreateAccount6 = () => {
  return (
    <div className={styles.createAccount6}>
      <div className={styles.createAccount6Child} />
      <div className={styles.createAccount6Item} />
      <div className={styles.termsOfUseParent}>
        <div className={styles.termsOfUse}>Terms of Use</div>
        <div className={styles.privacy}>Privacy</div>
        <div className={styles.contactUs}>Contact Us</div>
      </div>
      <div className={styles.createAccount6Inner}>
        <div className={styles.cardProductGoogleWrapper}>
          <div className={styles.cardProductGoogle}>
            <img
              className={styles.iconProfile}
              alt=""
              src="/icon--profile.svg"
            />
          </div>
        </div>
      </div>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <div className={styles.createAccount}>
        <div className={styles.div}>
          <div className={styles.div1}>
            <div className={styles.firstName}>First name</div>
            <div className={styles.div2}>
              <div className={styles.inputfirstname}>
                <div className={styles.divplaceholder}>
                  <div className={styles.firstName1}>First name</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div3}>
            <div className={styles.lastName}>Last name</div>
            <div className={styles.div2}>
              <div className={styles.inputfirstname}>
                <div className={styles.divplaceholder1}>
                  <div className={styles.firstName1}>Last name</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div5}>
          <div className={styles.gender}>Gender</div>
          <div className={styles.dateOfBirth}>Date of birth</div>
          <div className={styles.div6}>
            <div className={styles.inputemail}>
              <div className={styles.divplaceholder2}>
                <div className={styles.firstName1}>Gender</div>
              </div>
            </div>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </div>
          <div className={styles.div7}>
            <div className={styles.inputemail1}>
              <div className={styles.divplaceholder3} />
              <div className={styles.mmParent}>
                <div className={styles.mm}>mm</div>
                <img className={styles.groupIcon1} alt="" src="/group.svg" />
              </div>
              <div className={styles.yrParent}>
                <div className={styles.mm}>yr</div>
                <img className={styles.groupIcon1} alt="" src="/group.svg" />
              </div>
            </div>
            <div className={styles.ddParent}>
              <div className={styles.mm}>dd</div>
              <img className={styles.groupIcon1} alt="" src="/group.svg" />
            </div>
          </div>
        </div>
        <div className={styles.div8}>
          <div className={styles.emailParent}>
            <div className={styles.gender}>Email</div>
            <div className={styles.div9}>
              <div className={styles.inputfirstname}>
                <div className={styles.divplaceholder4}>
                  <div className={styles.firstName1}>Email</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div10}>
          <div className={styles.gender}>Phone Number</div>
          <div className={styles.div11}>
            <div className={styles.inputfirstname}>
              <div className={styles.divplaceholder5}>
                <div className={styles.firstName1}>+945</div>
                <img
                  className={styles.iconnavigationarrowBackIos}
                  alt=""
                  src="/iconnavigationarrow-back-ios-24px9.svg"
                />
                <div className={styles.firstName1}>3243242</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div14}>
          <div className={styles.bySigningUpToTheDesignStParent}>
            <div className={styles.bySigningUpContainer}>
              <span className={styles.bySigningUpContainer1}>
                <span>{`By signing up to the Design studio of Databox.mu platform you understand and agree with our `}</span>
                <span className={styles.termsOfService}>
                  Terms of Service and Privacy Policy
                </span>
              </span>
            </div>
            <div className={styles.button}>
              <div className={styles.createAccount1}>Create account</div>
            </div>
            <div className={styles.alreadyHavenAn}>
              Already Haven An Account?
            </div>
            <b className={styles.loginNow}>Login Now</b>
          </div>
        </div>
        <div className={styles.div15}>
          <div className={styles.gender}>Country</div>
          <div className={styles.dateOfBirth}>City</div>
          <div className={styles.div6}>
            <div className={styles.inputemail}>
              <div className={styles.divplaceholder6}>
                <div className={styles.firstName1}>Country</div>
              </div>
            </div>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </div>
          <div className={styles.div7}>
            <div className={styles.inputemail1}>
              <div className={styles.divplaceholder7}>
                <div className={styles.firstName1}>City</div>
              </div>
            </div>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.continue}>Continue</div>
        </div>
      </div>
      <div className={styles.signUpParent}>
        <div className={styles.signUp}>Sign up</div>
        <div className={styles.fillInYour}>
          Fill in your details below and Sign up
        </div>
        <img className={styles.untitled1Icon} alt="" src="/untitled-1@2x.png" />
        <div className={styles.finalLuckyDodoVar01Parent}>
          <img
            className={styles.finalLuckyDodoVar01Icon}
            alt=""
            src="/final-lucky-dodo-var012@2x.png"
          />
          <img
            className={styles.finalLuckyDodoVar05Icon}
            alt=""
            src="/final-lucky-dodo-var052@2x.png"
          />
        </div>
      </div>
      <div className={styles.homeParent}>
        <div className={styles.contactUs}>Home</div>
        <div className={styles.categories}>Categories</div>
        <div className={styles.profile}>Profile</div>
      </div>
    </div>
  );
};

export default CreateAccount6;
