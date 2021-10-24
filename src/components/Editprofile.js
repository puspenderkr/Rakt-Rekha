import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import edituser from '../api/edituser'
import { firebaseApp, storageRef } from '../firebase'

export default function Editprofile({ changeEditStateFalse, userDetails }) {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [age, setAge] = useState("")
    const [image, setImage] = useState("")
    const [place, setPlace] = useState("")
    const [contact, setContact] = useState("")
    const [gender, setGender] = useState("")
    const [bloodgroup, setBloodGroup] = useState("")


    const onsubmit = () => {
        const uid = firebaseApp.auth().currentUser.uid

        if (image) {
            var uploadTask = storageRef.ref(`image/${image.name}`).put(image)
            uploadTask.on("state_changed", (progress) => {

            }, (error) => {
                console.log(error)
            }, () => {
                uploadTask.snapshot.ref.getDownloadURL().then(function (imageURL) {
                    console.log("File available at ", imageURL)


                    const data = {
                        uid,
                        firstname,
                        lastname,
                        age,
                        imageURL,
                        place,
                        gender,
                        contact,
                        bloodgroup,
                        email: userDetails.email,
                        password: userDetails.password
                    }
                    const result = edituser(data)

                    if (result === true) {
                        console.log("user info edited")
                    } else {
                        console.log("user info not edited")
                        setFirstname("")
                        setLastname("")
                        setAge("")
                        setBloodGroup("")
                        setGender("")
                        setPlace("")
                        setContact("")
                    }
                })
            })
        } else {
            const data = {
                uid,
                firstname,
                lastname,
                age,
                place,
                gender,
                contact,
                bloodgroup,
                email: userDetails.email,
                password: userDetails.password
            }
            const result = edituser(data)

            if (result === true) {
                console.log("user info edited")
                setFirstname("")
                setLastname("")
                setAge("")
            } else {
                console.log("user info not editeddd")
                setFirstname("")
                setLastname("")
                setAge("")
                setBloodGroup("")
                setGender("")
                setPlace("")
                setContact("")

            }
        }

    };




    return (
        <div>
            <Button variant="danger" onClick={() => { changeEditStateFalse() }}>Go Back</Button>
            <div style={{ margin: "5px 0" }}>
                {image && (<img src={URL.createObjectURL(image)} alt="profile.pic" height="90px" />)}
            </div>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose an image</Form.Label>
                <Form.Control type="file" onChange={event => setImage(event.target.files[0])} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="first name" value={firstname} onChange={event => setFirstname(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="last name" value={lastname} onChange={event => setLastname(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="age" value={age} onChange={event => setAge(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Place</Form.Label>
                <Form.Control type="text" placeholder="place" value={place} onChange={event => setPlace(event.target.value)} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="text" placeholder="blood-group" value={gender} onChange={event => setGender(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Blood Group</Form.Label>
                <Form.Control type="text" placeholder="blood-group" value={bloodgroup} onChange={event => setBloodGroup(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Contact Information</Form.Label>
                <Form.Control type="text" placeholder="email or phone no." value={contact} onChange={event => setContact(event.target.value)} />
            </Form.Group>
            <Button variant="danger" onClick={onsubmit}>SUBMIT</Button>
        </div>
    )
}
