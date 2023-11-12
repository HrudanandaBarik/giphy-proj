'use client'
import React ,{ useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import InputControl from '@/inputcontrol/inputcontrol';
import { auth } from '../../firebase/config';
import styles from './page.module.css';

export default function Login() {
    const router = useRouter();
    const [values, setValues] = useState({
        email: "",
        pass: "",
      });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    
    const handleSubmission = () => {
        if (!values.email || !values.pass) {
          setErrorMsg("Fill all fields");
          return;
        }
        setErrorMsg("");
    
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
          .then(async (res) => {
            setSubmitButtonDisabled(false);
            
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
            <h1 className={styles.heading}>Login</h1>
    
            <InputControl
              label="Email"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
              placeholder="Enter email address"
            />
            <InputControl
              label="Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
              placeholder="Enter Password"
            />
    
            <div className={styles.footer}>
              <b className={styles.error}>{errorMsg}</b>
              <button disabled={submitButtonDisabled} onClick={handleSubmission}>
                Login
              </button>
              <p>
                Create an account?{" "}
                <span>
                  <Link href="/register">Sign up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      );
}
