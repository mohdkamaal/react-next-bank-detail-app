// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';


import styles from './MyForm.module.css'; // Import the CSS module

const MyForm = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        mobileNumber: '',
        bank: '',
        accountNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your form submission logic here
        console.log('Form submitted:', formData);

        router.push({
            pathname: '/mytable',
            query: formData,
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Form</h1>
            <form onSubmit={handleSubmit}>
                <label className={styles.label}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>

                <label className={styles.label}>
                    Mobile Number:
                    <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>

                <label className={styles.label}>
                    Bank:
                    <input
                        type="text"
                        name="bank"
                        value={formData.bank}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>

                <label className={styles.label}>
                    Account Number:
                    <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>

                <button type="submit" className={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MyForm;
