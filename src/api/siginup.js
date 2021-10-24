import { firebaseApp, userRef } from "../firebase";


export default function siginup ({firstname, lastname,age, gender, bloodgroup, email, password}) {

    if(!firstname || !lastname || !age || !gender || !bloodgroup) {
        return false
    }


    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then((data) => {

        userRef.child(data.user.uid).set({
            firstname,
            lastname,
            age,
            gender,
            bloodgroup,
            email,
            password
        })
        console.log("user added to db")
        return true;
    }).catch((err) => {
        console.log(err)
        return false;
    })
}