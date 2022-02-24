// import db from "../../firebase/config"
import { auth } from "../../firebase/config";

export const userRegister = ({ userName, email, password }) => async (dispatch, getState) => {
    console.log('userName, email, password',userName, email, password)
    try {
        const user = await auth().createUserWithEmailAndPassword(email, password);
        console.log('user', user);
    } catch(error) {
        console.log('error', error);
        console.log('error.masege', error.message);
    }
 }
export const userLogin = () => async (dispatch, getState) => { }
export const userLogout = () => async (dispatch, getState) => { }