import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { userRef } from './firebase';

export default function Home() {

    const [searchTerm, setSearchTerm] = useState("")
    const [userDatas, setUserDatas] = useState([]);


    useEffect(() => {

        userRef.once("value", (snap) => {
            let userList = [];
            snap.forEach(snap => {
                userList.push(snap.val())
            })
            setUserDatas(userList)
        })

    }, [])
    console.log(userDatas);

    return (
        <div>
            <Form.Group className="mb-3" controlId="formBasicPassword" style={{width:"200px",margin: "10px auto"}}>
                <Form.Control type="text" placeholder="Search blood group..." onChange={event => { setSearchTerm(event.target.value) }} />
            </Form.Group>

            {userDatas.filter((val) => {
                if(searchTerm === "") {
                    return val;
                } else if (val.bloodgroup.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            }).map(val => {
                return (
                    <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
                    <div className="outerbox" style={{ marginTop: "10px" }}>
                    <h6 style={{alignItems:'center', display:"flex", justifyContent:"center"}}>{val.firstname} {val.lastname}</h6>
                    <div style={{alignItems:'center', display:"flex", justifyContent:"center"}}>AGE: {val.age} | Gender: {val.gender} | Blood Group: {val.bloodgroup}</div>
                    <div style={{alignItems:'center', display:"flex", justifyContent:"center"}}>Place: {val.place}</div>
                    </div>
                    </div>
                )
            })}

        </div>
    )
}
