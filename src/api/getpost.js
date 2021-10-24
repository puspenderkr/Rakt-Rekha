import { postRef } from "../firebase";

export default function addpost (uid, content) {
   postRef.once("value", (snapshot) => {
       return snapshot.val()
   })
}