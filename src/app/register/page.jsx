'use client'
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../firebase/config';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import InputControl from '@/inputcontrol/inputcontrol';
import styles from './page.module.css';



export default function Register() {
    const router = useRouter();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
      });
      const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        router.push('/giphy');
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className={styles.container}>
    <div className={styles.innerBox}>
      <h1 className={styles.heading}>Signup</h1>

      <InputControl
        label="Name"
        placeholder="Enter your name"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, name: event.target.value }))
        }
      />
      <InputControl
        label="Email"
        placeholder="Enter email address"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        }
      />
      <InputControl
        label="Password"
        placeholder="Enter password"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))
        }
      />

      <div className={styles.footer}>
        <b className={styles.error}>{errorMsg}</b>
        <button onClick={handleSubmission} disabled={submitButtonDisabled}>
          Signup
        </button>
        <p>
          Already have an account?{" "}
          <span>
            <Link href='/login'>Login</Link>
          </span>
        </p>
      </div>
    </div>
  </div>
);
  
}
