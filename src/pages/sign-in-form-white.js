import Column from "../components/column";
import styles from "./sign-in-form-white.module.css";
const SignInFormWhite = () => {
  return (
    <div className={styles.signInFormWhite}>
      <Column />
      <div className={styles.placeholderImageWrapper}>
        <img
          className={styles.placeholderImage}
          alt=""
          src="/placeholder--image@2x.png"
        />
      </div>
    </div>
  );
};

export default SignInFormWhite;
