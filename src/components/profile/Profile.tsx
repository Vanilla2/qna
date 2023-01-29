import React from 'react'
import { useParams } from 'react-router';
import "./Profile.scss";

export interface Props {
    [key: string]: any
}

const Profile = (props: Props) => {
    const {id} = useParams();
    return (
        <div>
            {id}
        </div>
    );
}

export default Profile;