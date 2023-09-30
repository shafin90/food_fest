import { createContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../../../firebase.config";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export const AuthContext = createContext();





const AuthProvider = ({ children }) => {
    // DECLARING ALL STATE HERE=============
    const [user, setUser] = useState([]);
    const [chefID, setChefID] = useState('') //THIS IS USEFULL FOR PROTECTIVE ROUTE======
    const [isLoggedin, setIsLoggedIn] = useState(false);







    //GOOGLE AUTHENTICATION HANDLER FUNCTION======
    const handleGoogle = () => {
        
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
                toast("hurray!!!!!!")
            }).catch((error) => {
                console.log(error.message)
            });
    }



    // FUNCTION TO CREATE ACCOUNT USING EMAIL, PASSWORD===========
    const handleCreateAccountUsingEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)

            })
            .catch((error) => {
                console.log(error.message)

            });

    }



    // FUNCTION TAHT HANDLE LOGIN USER THROUGH EMAIL, PASSWORD==================
    const handleLogin = (email, password) => {
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                


            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)


            });
    }



    // FUNCTION TO LOGOUT AN USER=============
    const logoutUser = () => {
        signOut(auth).then(() => {
            setUser('');
        }).catch((error) => {
            console.log(error.message)
        });
    }




    // state value that is passing to other components====
    const sharingValue = {
        handleLogin,
        handleGoogle,
        handleCreateAccountUsingEmail,
        logoutUser,
        user,
        setChefID,
        chefID,
        isLoggedin,
        setIsLoggedIn
    }

    return (
        <AuthContext.Provider value={sharingValue}>
            <ToastContainer/>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;