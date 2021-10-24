import React, { useEffect, useState } from 'react'
import { firebaseApp, postRef } from '../firebase';
import Singlepost from './Singlepost'

export default function Postlist({userDetails}) {

    const [post ,setPost] = useState([]);
    const [myuid, setMyuid] = useState("");

    useEffect(() => {
        const getAllThePost = async () => {
            
            postRef.on('value', snap => {
                var fetchedPost = [];
                snap.forEach(singlePost => {
                    fetchedPost.push({
                        ...singlePost.val(),
                        postKey: singlePost.key
                    })
                })
                const uid = firebaseApp.auth().currentUser.uid;
                setMyuid(uid);
                fetchedPost.reverse();
                setPost(fetchedPost)
            })
        }
        getAllThePost();
    }, [])
    return (
        <>
            {post.map((singlePost , index) => {
                return(
                <Singlepost key={singlePost.postKey} details={singlePost} myUID={myuid} userDetails={userDetails} />
                )
                
            })}
                
       </>
    )
}
