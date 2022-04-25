import { useState, useEffect } from "react";


const UseForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
        // address:'',
        street: '',
        city: '',
        state: '',
        pincode: '',
    })

    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChangeIn = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };


    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            callback();
        }
    }, [errors]);


    return ({ handleChangeIn, values, handleSubmit, errors })
}

export default UseForm