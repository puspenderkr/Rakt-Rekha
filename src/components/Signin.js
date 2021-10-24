
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import signin from '../api/signin';

export default function Signin(props) {

    const [data, setData] = useState({
        
        email: "",
        password: ""
    })

    const onSubmit = () => {
        const result =  signin(data)
        if(result === true) {
            console.log("signin up successfully")
        } else if (result === false) {
            console.log("signin up failed")
        }
    }

    const onChangeText = (key,value) => {
        const newData = {...data};
        newData[key] = value;
        setData(newData);
    }

    return (
        <div>
        <div style={{display: "flex", justifyContent: "center", margin: "20px 0"}}>
            <div className="outerbox">
                <h1>Sign In</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={e=>onChangeText("email", e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password </Form.Label>
                        <Form.Control type="text" placeholder="password" onChange={e=>onChangeText("password", e.target.value)} />
                    </Form.Group>
                    <Button variant="danger" onClick={onSubmit} >Sign In</Button>
                    <p>Don't have an account? <span onClick={()=> {props.changeState("SU")}}>Sign Up</span></p>
                </Form>
            </div>
            </div>
        </div>
    )
}