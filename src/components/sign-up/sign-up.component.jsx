import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

const SignUp = () => {
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with email and password</span>
      <form>
        <FormInput
          name="displayName"
          type="text"
          label="Name"
          value=""
          handleChange="{null}"
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          value=""
          handleChange="{null}"
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value=""
          handleChange="{null}"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value=""
          handleChange="{null}"
          required
        />
        <CustomButton>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
