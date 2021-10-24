import { postRef } from "../firebase";

export default function addpost (uid, content) {
    console.log("inside the addpost function")
    try{
        postRef.push({
            createdby: uid,
            content,
            createdAt: new Date().toLocaleString()
        })
    }catch(err) {
        console.log(err);
    }
}
