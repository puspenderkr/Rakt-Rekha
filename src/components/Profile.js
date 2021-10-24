import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Editprofile from './Editprofile';

export default function Profile({userDetails}) {

    const [editMode, setEditMode] = useState(false);

    const changeEditStateFalse = () => {
        setEditMode(false)
    }

    return (
        <>

            <div className="outerbox" style={{ marginTop: "10px" }}>
                {editMode ? (
                    <div><Editprofile changeEditStateFalse={changeEditStateFalse} userDetails={userDetails} /></div>
                ) : (
                    <>
                        <div style={{ display: "flex", marginBottom: "10px" }}>
                            <div>
                                <div style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden" }}>
                                    <img src={userDetails && userDetails.imageURL ? userDetails.imageURL : "https://picsum.photos/200/300?grayscale"} alt="profilephoto" height="100%" />
                                </div>
                            </div>
                            <div style={{ margin: "5px 15px",fontWeight: "500", flexDirection: "colounm" }}>{ userDetails ? `${userDetails.firstname} ${userDetails.lastname}` : "Loading"}</div>
                            <div style={{ cursor: "pointer", marginLeft: "auto" }} ><Button variant="danger" onClick={() => setEditMode(true)}>Edit</Button></div>
                        </div>
                        <div style={{ borderTop: "1px solid lightgray" }}>
                            <div style={{ color: "darkred", fontFamily: "fantasy", marginTop: "10" }}>About me:</div>
                            <div style={{ fontSize: "12",fontWeight:"500" }}>AGE : {userDetails.age} </div>
                            <div style={{ fontSize: "12",fontWeight:"500" }}>GENDER : {userDetails.gender ? userDetails.gender : "loading..."} </div>
                            <div style={{ fontSize: "12",fontWeight:"500" }}>BLOOD GROUP : {userDetails.bloodgroup ? userDetails.bloodgroup : "loading..."}</div>
                            <div style={{ fontSize: "12",fontWeight:"500" }}>PLACE : {userDetails.place ? userDetails.place : "loading..."}</div>
                            <div style={{ fontSize: "12",fontWeight:"500" }}>Contact : {userDetails.contact ? userDetails.contact : "loading..."}</div>
                        </div>

                    </>
                )
                }
            </div>



        </>
    )
}
