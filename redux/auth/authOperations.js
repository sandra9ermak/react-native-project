import db from "../../firebase/config"

export const userLogin = ({userName, email, password}) => async (dispatch, getState) => {
    try {
        const user = await db.auth().createUserWithEmailAndPassword(email, password);
        console.log('user', user);
    } catch(error) {
        console.log('error', error);
        console.log('error.masege', error.message);
    }
 }
export const userRegister = () => async (dispatch, getState) => { }
export const userLogout = () => async (dispatch, getState) => { }