import React from 'react'
import { useParams } from 'react-router'

export default function ProfilePage() {

    const {uid} = useParams();

    return (
        <div>
            {uid}
        </div>
    )
}
