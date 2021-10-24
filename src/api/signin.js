import { firebaseApp, userRef } from "../firebase";


export default function signin ({email, password}) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then((data) => {
        userRef.child(data.user.uid).once("value", (snapshot) => {
            console.log(snapshot.val())
            return snapshot.val();
        })
        console.log("user found in  db")
        return true;
    }).catch((err) => {
        console.log(err)
        return err.message;
    })
}