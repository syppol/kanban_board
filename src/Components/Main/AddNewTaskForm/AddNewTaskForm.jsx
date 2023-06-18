import React, { useState } from "react";
import css from "./AddNewTaskForm.module.css";
//import clsx from "clsx";

const AddNewTaskForm = props => {
    const { tasks, formSubmit } = props
    const [values, setValues] = useState({
        title: '',
        description: ''
    })

    const handleChange = e => {
        const fieldName = e.target.name
        setValues({ ...values, [fieldName]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (values.title) {
            formSubmit(values.title)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <input className={css.inputTaskNameField} name='title' type='text' onChange={handleChange} value={values.title} />
            <button className={css.submitBtn} type='submit'>Submit</button>
        </form>
    )
}

export default AddNewTaskForm;