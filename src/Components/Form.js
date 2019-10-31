import React from "react";
import useForm from "react-hook-form";

export default function Form() {
  const { register, errors } = useForm();

  return (
    <form data-netlify="true">
      <label htmlFor="email">Email Address:</label>
      <input
        name="email"
        ref={register({
          required: true,
          pattern: /^\S+@\S+$/i
        })}
      />
      {errors.email && "Email address wrong."}
      <input type="submit" name="submit" />
    </form>
  );
}
