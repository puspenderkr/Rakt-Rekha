import React, { useState } from 'react'
import { FloatingLabel, Form, Row, Button } from 'react-bootstrap'
import addpost from '../api/addpost'
import { firebaseApp } from '../firebase'

export default function Addpost() {

    const [content, setContent] = useState("")

    const addaPost = () => {

        if(!content) {
            return false;
        }

        if(content.length > 120) {
            return true;
        }

        const uid = firebaseApp.auth().currentUser.uid;
        const output = addpost(uid, content)

        if(output === true) {
            setContent("");
            console.log("Post added")
        }
        if(output === false) {
            console.log("Post not added")
        }

    }

    return (
        <div>
            <>
                <div className="outerbox"style={{marginTop: "10px"}}>
                    <h6 style={{ fontWeight: "500" }}>Whats on your mind?</h6>
                    <Row style={{ marginBottom: "0" }}>
                        <FloatingLabel controlId="floatingTextarea2" label="Please write here...">
                            <Form.Control
                                as="textarea"
                                value={content}
                                placeholder="Leave a comment here"
                                onChange={event=> {setContent(event.target.value)}}
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <div style={{margin: "10px 0"}}>
                        <Button variant="danger" onClick={addaPost} >Post</Button>
                    </div>
                    </Row>
                    
                </div>
            </>
        </div>
    )
}
