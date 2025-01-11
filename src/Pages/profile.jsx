import { useNavigate } from 'react-router-dom';
import itemsContext from '../Contexts/itemsContext';
import Styles from './profile.module.css'
import { useContext, useEffect, useState } from 'react'
export default function Profile(){

    const {user} = useContext(itemsContext)
    const Navigate = useNavigate();


    const [formData, setFormData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
    });
   const handleChange = (event) => {
        const {id, value }= event.target
         setFormData({
            ...firstName,
            [id]:value,
         })   
        };
   const handleSubmit = (event) => {

    event.preventDefault();

    setFormData({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
    });
    console.log(formData)

    alert('Thank you for updating your information')
   };


   useEffect(() => {
    if(!user) {
        Navigate("/")
    }
   },[])

    return(
        <div className={Styles.container}>
            <div className={Styles.container2}>
                <div className={Styles.divleft}>
                    <h3 className={Styles.title}>Manage My Account</h3>
                    <div>My Profile</div>
                    <div>Address Book</div>
                    <div>My Payment Options</div>
                    <h3 className={Styles.title}>My Orders</h3>
                    <div>My Orders</div>
                    <div>My Returns</div>
                </div>

                <form onSubmit={handleSubmit} className={Styles.divright}>
                    <div className={Styles.header}>Edit Your Profile</div>
                    <div className={Styles.inputContainer}>
                        <div className={Styles.input}>
                   
                            <label>First Name</label>
                            <input 
                            className={Styles.smallInbut}
                            placeholder='Enter Your First Name'
                            type='text'
                            value={formData.firstName}
                            onChange={handleChange} 
                            id='firstName'
                            required/>
                        </div>
                        <div className={Styles.input}>
                            <label>Last Name</label>
                            <input 
                            className={Styles.smallInbut}
                            placeholder='Enter Your Last Name'
                            type='text'
                            value={formData.lastName}
                            onChange={handleChange} 
                            id='lastName'
                            required/>
                        </div>
                        <div className={Styles.input}>
                            <label>Email</label>
                            <input 
                            className={Styles.smallInbut}
                            placeholder='Enter Your Eamil'
                            type='email'
                            value={formData.email}
                            onChange={handleChange} 
                            id='email'
                            required/>
                        </div>
                    </div>
                    <div className={Styles.address}>
                            <label>Address</label>
                            <input 
                            className={Styles.biginbut}
                            placeholder='United State, California'
                            type='text'
                            value={formData.address}
                            onChange={handleChange} 
                            id='address'
                            required/>
                    </div>
                    <div className={Styles.address}>
                        <label>Password Changes</label>
                        <input 
                        className={Styles.biginbut}
                        placeholder='Current Password'/>
                        <input 
                        className={Styles.biginbut}
                        placeholder='New Password'/>
                        <input
                        className={Styles.biginbut}
                        placeholder='Confirm Password'/>
                    </div>
                    <div className={Styles.buttonParant}>
                        <button className={Styles.reset}>Cancel</button>
                        <button className={Styles.sendMessage}>Save Changes</button>
                    </div>
                    
                
           </form>
            </div>
        </div>
    )
}