import React, {useState} from "react";
import classNames from "classnames";
import {Search} from "./Sprites";
import Button from "./Button";
import {useRequest} from "../hooks/useRequest.hook";
import {FormikErrors, useFormik} from "formik";
import {useValidate} from "../hooks/useValidate.hook";
import {Values} from "./types";
import {useLinesActions} from "../hooks/useActions.hook";



function Form() {

    const [borderForm, setBorderForm] = useState(false)
    const handleSetBorder = () => setBorderForm(true)
    const handleDeleteBorder = () => setBorderForm(false)

    const {getLines} = useLinesActions()
    const {request} = useRequest()
    const {getValidHttpArray, isValidNums} = useValidate()



    const formik = useFormik({
        initialValues: {
            search: '',
        },

        validate({search}:Values) {
            const errors:FormikErrors<Values> = {}

            if (!search) {
                errors.search = 'Required'
            } else if (isValidNums(search)) {
                errors.search = 'an invalid number is entered'
            }

            return errors
        },


        onSubmit: ({search}:Values) => {
            const linesId = getValidHttpArray(search)
            if (linesId) getLines(request, linesId)

        }
    })

    const hasError = formik.touched && formik.errors.search

    const classes = classNames(
        '',
        {border: borderForm},
        {border__error: hasError}

    )


    return (
        <>
            <form className={classes} onSubmit={formik.handleSubmit}>
                <input
                    id="search"
                    name="search"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.search}
                    autoComplete="off"
                    onFocus={handleSetBorder}
                    onBlur={handleDeleteBorder}
                />
                <div className="search__logo">
                    <Search className="search"/>
                </div>

                {!formik.values.search && <label htmlFor="search">Calculate...</label>}
                <Button className="button--search">Go</Button>
            </form>
            {hasError && <div className="header__error">{formik.errors.search}</div> }


        </>
    );
}

export default Form