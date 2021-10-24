import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import deletepost from '../api/deletepost'
import { userRef } from '../firebase'

export default function Singlepost({details, myUID, userDetails}) {


    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")

    useEffect(() => {
          const getName = () => {
              userRef.child(details.createdby).once("value", snap => {
                  setFirstname(snap.val()['firstname']);
                  setLastname(snap.val()['lastname']);
              })
          }
          if(details && details.createdby) {
              getName();
          }
    }, [])

    const onPostDelete = (postkey) => {
        const result = deletepost(postkey);
        console.log(result);
    }

    return (
        <div>
            <div className="outerbox" style={{marginTop: "10px"}}>
                <div>
                    <div>
                        <div style={{ display: "flex", marginBottom: "10px" }}>
                            <div style={{ width: "40px", height: "40px", borderRadius: "30px", overflow: "hidden" }}>
                                <img src={userDetails ? userDetails.imageURL : "https://picsum.photos/200/300?grayscale"} alt="images" height="100%" />
                            </div>
                        </div>
                        <div style={{ marginLeft: "10px", flex: "1" }}>
                            <div style={{ color: "darkred", fontWeight: "600" }}>{firstname} {lastname}</div>
                            <div style={{ fontSize: "12px", color: "gray" }}>{moment(details.createdAt).fromNow()}</div>
                        </div>
                        {myUID === details.createdby && 
                        <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={()=> {onPostDelete(details.postKey)}}>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                        }
                        
                    </div>
                    <div>
                        <p>{details && details.content ? details.content : ""}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
