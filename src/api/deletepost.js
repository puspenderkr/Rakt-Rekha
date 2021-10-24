
import { postRef } from '../firebase'

export default function deletepost(postkey) {
    postRef.child(postkey).remove().then(data => { 
        console.log(data); 
        return { message: "Removed" } 
    }).catch ((error) => { return { error: error.message } })
}

