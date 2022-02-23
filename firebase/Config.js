import firebase from "firebase/compat";
import "firebase/auth";

const firebaseConfig = ({
    apiKey: "AIzaSyDmUwptOMEJArG2c_N18NSnHzUuAMt_p9Y",
    authDomain: "todo-bee30.firebaseapp.com",
    projectId: "todo-bee30",
    storageBucket: "todo-bee30.appspot.com",
    messagingSenderId: "528586172545",
    appId: "1:528586172545:web:837caf732d02f32cd40580",
    databaseURL: "https://todo-bee30-default-rtdb.europe-west1.firebasedatabase.app/"
});

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const ROOT_REF = '/todos/';