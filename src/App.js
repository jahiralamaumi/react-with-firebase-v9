import logo from "./logo.svg";
import "./App.css";
import Form from "./components/common/Forms/Form";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import initializeFirebase from "./Firebase/firebase-initialize";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import Home from "./components/Home/Home";
import { toast, ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

initializeFirebase();

const auth = getAuth();
function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    useEffect( ()=>{
        const authToken = sessionStorage.getItem('auth-token');
    if(authToken){
        navigate('/');
    }
    }, [])
    const handleButtonAction = (id) => {
        if (id === 2) {
            createUserWithEmailAndPassword(auth, email, password).then(
                (response) => {
                    navigate("/");
                    sessionStorage.setItem(
                        "auth-token",
                        response._tokenResponse.refreshToken
                    );
                }
            ).catch(error => {
                if(error.code === 'auth/invalid-email') {
                    toast.error('Please check the Email');
                }
                else if(error.code === 'auth/wrong-password') {
                    toast.error('Please check the Password');
                }
            })
        } else if(id===1) {
            signInWithEmailAndPassword(auth, email, password).then(
                (response) => {
                    navigate('/');
                    sessionStorage.setItem('auth-token', response._tokenResponse.refreshToken);
                }
            ).catch(error => {
                if(error.code === 'auth/invalid-email') {
                    toast.error('Please check the Email');
                }
                else if(error.code === 'auth/wrong-password') {
                    toast.error('Please check the Password');
                }
            })
        }
    };
    return (
        <div className="App">
            <ToastContainer />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={
                        <Form
                            title="Login"
                            setEmail={setEmail}
                            email={email}
                            setPassword={setPassword}
                            handleButtonAction={() => handleButtonAction(1)}
                        ></Form>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <Form
                            title="Register"
                            setEmail={setEmail}
                            email={email}
                            setPassword={setPassword}
                            handleButtonAction={() => handleButtonAction(2)}
                        ></Form>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
