import React from "react";
import useForm from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const submit = (e, data) => {
    e.preventDefault()
    console.log(JSON.stringify(data.email))
    fetch('/.netlify/functions/api/submit-form', {
      method: 'POST',
      body: JSON.stringify(data.email)
    })
  }
  return (
    <>

    <form action="/.netlify/functions/api/submit-form" method="POST">
      <input type="text" name="email" />
      <input type="submit" value="Submit" />
    </form>


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
    </>
  );
}
