// components/MyTable.js
import { useRouter } from 'next/router';
import styles from './MyTable.module.css';
import { useState } from 'react';


const MyTable = () => {
    const router = useRouter();
    const [formData, setFormData] = useState([])
    formData.push(router.query); // Access form data from query parameters

    const backToFormPage = () => {
        router.push({
            pathname: '/form',
        });
    }
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile Number</th>
                        <th>Bank</th>
                        <th>Account Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.mobileNumber}</td>
                            <td>{row.bank}</td>
                            <td>{row.accountNumber}</td>
                            <td><button className={styles.EditButton}> Edit </button>
                            <button className={styles.deleteButton}> Delete </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className={styles.button} onClick={backToFormPage}>
                Back to Registration Form
            </button>
        </div>
    );
};

export default MyTable;
