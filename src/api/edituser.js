import { userRef } from "../firebase"

export default function edituser ({uid, firstname, lastname, age, imageURL, place,gender,bloodgroup,contact}) {

   return ( userRef.child(uid).set({
        firstname,
        lastname,
        age,
        place,
        gender,
        bloodgroup,
        contact,
        imageURL: imageURL ? imageURL : "https://picsum.photos/200/300?grayscale"
    }).then(data => {
        return true;
    }).catch(()=> {
        return false
    })
   )
}