import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    userName: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    userName: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleValues = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["group-name"]}>
        <label htmlFor="name" className={styles.label}>
          Name*
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className={styles.input}
          value={values.name}
          placeholder="Enter your name"
          onChange={handleValues}
        />
        {errors.name ? <span className={styles.error}>*Name must be not empty</span> : null}
      </div>
      <div className={styles["group-username"]}>
        <label htmlFor="username" className={styles.label}>
          User Name*
        </label>
        <input
          id="username"
          type="text"
          name="userName"
          className={styles.input}
          value={values.userName}
          placeholder="Enter your user name"
          onChange={handleValues}
        />
        {errors.userName ? (
          <span className={styles.error}>*User name must be not empty</span>
        ) : null}
      </div>
      <div className={styles["group-number"]}>
        <label htmlFor="number" className={styles.label}>
          Phone Number*
        </label>
        <input
          id="number"
          type="text"
          name="number"
          className={styles.input}
          value={values.number}
          placeholder="Enter your phone number"
          onChange={handleValues}
        />
        {errors.number ? (
          <span className={styles.error}>*Phone number must be of 10 digits</span>
        ) : null}
      </div>
      <div className={styles["group-email"]}>
        <label htmlFor="email" className={styles.label}>
          Email*
        </label>
        <input
          id="email"
          type="text"
          name="email"
          className={styles.input}
          value={values.email}
          placeholder="Enter your email"
          onChange={handleValues}
        />
        {errors.email ? (
          <span className={styles.error}>*Should follow the pattern abc@xyz.com</span>
        ) : null}
      </div>
      <div className={styles["group-password"]}>
        <label htmlFor="password" className={styles.label}>
          Password*
        </label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          name="password"
          className={styles.input}
          value={values.password}
          placeholder="Enter your password"
          onChange={handleValues}
        />
        <img
          src={showPassword ? "/hide.svg" : "/show.svg"}
          alt="Show password"
          className={styles.icon}
          onClick={handlePasswordToggle}
        />
        {errors.password ? (
          <span className={styles.error}>
            *Should be at least 8 characters with one special character and one capital alphabet
          </span>
        ) : null}
      </div>
      <div className={styles["group-confirm-password"]}>
        <label htmlFor="confirm-password" className={styles.label}>
          Confirm Password*
        </label>
        <input
          id="confirm-password"
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          className={styles.input}
          value={values.confirmPassword}
          placeholder="Re-enter your password"
          onChange={handleValues}
        />
        <img
          src={showConfirmPassword ? "/hide.svg" : "/show.svg"}
          alt="Show confirm password"
          className={styles.icon}
          onClick={handleConfirmPasswordToggle}
        />
        {errors.confirmPassword ? (
          <span className={styles.error}>*Should match with password</span>
        ) : null}
      </div>
      <div className={styles.cta}>
        <button type="submit" className={styles["sign-up-btn"]}>
          Sign Up
        </button>
        <div className={styles["login"]}>
          <span className={styles["helper-text"]}>Already have an account? </span>
          <Link to="/login" className={styles["login-btn"]}>
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
