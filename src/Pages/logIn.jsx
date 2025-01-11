import axios from 'axios';
import styles from './login.module.css';
import { useContext, useState } from 'react';
import itemsContext from '../Contexts/itemsContext';

export default function LogIn(){


    const {decodeToken} = useContext(itemsContext)

    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const [errors, setErrors] = useState({})
    const [message, setMassage ] = useState('')


    const validateForm = () => {
        const newErrors = {};

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
            const response = await axios.post('http://162.243.184.226:4000/auth/login', {
                email: formData.email,
                password: formData.password,
            }
        );

            let token = response.data.token

            decodeToken(token)


        } catch (error) {
            
            console.error("Error during signup:", error.response?.data || error.message);
            setMassage(error.response?.data?.message || 'Something went wrong. Please try again.');
        }
    }
};



    return(
        <div className={styles.container}>
            <div className={styles.container2}>
                <h1 className={styles.h1}>Log in to Exclusive</h1>
                <h4 className={styles.h2}>Enter your details below</h4>
                <form 
                onSubmit={handleSubmit}
                className={styles.container2}>
                <input 
                className={styles.input}
                type="email" 
                name="email" 
                placeholder="Email or Phone Number"
                value={formData.email}
                onChange={handleChange}
                required
                />
                <input
                 className={styles.input}
                type="password" 
                name="password" 
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                />
                {message}
                <div className={styles.div}>
                    <button className={styles.button1}>Log In</button>
                    <button className={styles.button2}>Forget password?</button>
                </div>
                </form>
                <div>don't you have an account? <span className={styles.sign}>Sign Up</span></div>
            </div>
        </div>
    )
}