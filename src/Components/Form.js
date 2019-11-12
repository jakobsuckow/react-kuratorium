import React from "react";
import useForm from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const submit = data => {
    console.log(JSON.stringify(data.email))
    fetch('/.netlify/functions/api/submit-form', {
      method: 'POST',
      body: JSON.stringify(data.email)
    })
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <label htmlFor="email">Email Address:</label>
      <input
        name="email"
        id="email"
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
