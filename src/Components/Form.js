import React from 'react'
import useForm from 'react-hook-form';


export default function Form() {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {console.log(data)}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email Address:</label>
        <input name="email" ref={register({
            required: true,
            pattern: /^\S+@\S+$/i
            })}/>
        {errors.email && 'Email address wrong.'}
        <input type="submit" name="submit" />
        </form>
       
    )
}