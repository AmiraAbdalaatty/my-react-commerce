import styles from './signUp.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function SignUp(){

    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({})
    const [message, setMassage ] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullname || formData.fullname.length < 2) {
            newErrors.fullname = 'Full Name must be at least 2 characters.';
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!formData.password || formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters.';
        }
        return newErrors;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
        try {
            const response = await axios.post('http://162.243.184.226:4000/auth/register', {
                email: formData.email,
                password: formData.password,
                firstname: formData.fullname,
                role: "USER"
            });

        } catch (error) {
            
            console.log(error)
            console.log(error?.response?.data?.message)
            if(error?.response?.data?.message == "User already exist") {
                setMassage('Account created successfully!');
                Navigate('/login');
            }
            console.error("Error during signup:", error.response?.data || error.message);
            setMassage(error.response?.data?.message || 'Something went wrong. Please try again.');
        }
    }
};

    return (
        <div className={styles.container}>
            <div className={styles.container2}>
                <h1 className={styles.h1}>Create an account</h1>
                <h4 className={styles.h2}>Enter your details below</h4>
                <form 
                 className={styles.container2}
                onSubmit={handleSubmit}>
                <input 
                className={styles.input}
                type="text" 
                name="fullname" 
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
                required
                />
                 {errors.fullname && <p className={styles.error}>{errors.fullname}</p>}
                <input 
                className={styles.input}
                type="email" 
                name="email" 
                placeholder="Email or Phone Number"
                value={formData.email}
                onChange={handleChange}
                required
                />
                 {errors.email && <p className={styles.error}>{errors.email}</p>}
                <input 
                className={styles.input}
                type="password" 
                name="password" 
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                />
               {errors.password && <p className={styles.error}>{errors.password}</p>}

                <button className={styles.button} type='submit'>Create Account</button>
                </form>
                <button className={styles.button2}>Sign Up With Google</button>
                <div>Already have an account? <span 
                onClick={()=>Navigate('/login')}
                className={styles.log}>Log In</span></div>
            </div>
        </div>
    )
}