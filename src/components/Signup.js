
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import siginup from '../api/siginup';

export default function Signup(props) {

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        age: "",
        gender: "",
        bloodgroup: "",
        email: "",
        password: ""
    })

    const onSubmit = () => {
        const result =  siginup(data)
        if(result === true) {
            console.log("sign up successfully")
        } else if (result === false) {
            console.log("sign up failed")
        }
    }

    const onChangeText = (key,value) => {
        const newData = {...data};
        newData[key] = value;
        setData(newData);
    }

    return (
        <>
        <div style={{display: "flex", justifyContent: "center", margin: "20px 0"}}>
            <div className="outerbox">
                <h1>Sign Up</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" onChange={e=>onChangeText("firstname", e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" onChange={e=>onChangeText("lastname", e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder="Age" onChange={e=>onChangeText("age", e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" placeholder="Gender" onChange={e=>onChangeText("gender", e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Blood Group</Form.Label>
                        <Form.Control type="text" placeholder="blood group" onChange={e=>onChangeText("bloodgroup", e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={e=>onChangeText("email", e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password </Form.Label>
                        <Form.Control type="text" placeholder="password" onChange={e=>onChangeText("password", e.target.value)}/>
                    </Form.Group>
                    <Button variant="danger" onClick={onSubmit}>Submit</Button>
                    <p>Already have an account? <span onClick={()=> {props.changeState("SI")}}>Sign In</span></p>
                </Form>
            </div>
            </div>
        </>
    )
}