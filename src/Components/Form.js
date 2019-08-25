import React from 'react'

const Form = () => {
    const onSubmit = data => console.log(data)
    return (
        <form onSubmit={onSubmit}>
            <input name="email" />
            <input type="submit" />
        </form>
    )
}

export default Form
