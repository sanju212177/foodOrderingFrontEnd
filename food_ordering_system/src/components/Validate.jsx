export default function validate(values) {
    let errors = {};
    const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexForNo = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;

    // Name Validations
    if (!values.username){
        errors.username = "Name is required";
    }
    // Contact No. Validations
    if (!values.phone){
        errors.phone = "Contact No. is required";
    } else if(!regexForNo.test(values.phone)){
        errors.phone = "Invalid Number Format";
    }
    // Email Validations
    if (!values.email){
        errors.email = "Email is required";
    } else if(!regexForEmail.test(values.email)){
        errors.email = "Invalid Email Format";
    }
    // Password Validations
    if (!values.password){
        errors.password = "Password is required";
    } else if(values.password.length < 6){
        errors.password = "Password must be alteast 6 characters";
    } else if(values.password.length > 10){
        errors.password = "Password must not be more than 10 characters";
    }
    // Address Validations
    if ((!values.street) || (!values.city) || (!values.state) || (!values.pincode)){
        errors.address = "Address is required";
    }
    return errors;
}