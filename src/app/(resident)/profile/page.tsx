import React from 'react';

interface ProfileProps {
    name: string;
    age: number;
    bio: string;
}

const Profile: React.FC<ProfileProps> = ({}) => {
    return (
        <div>
            <h1>Dashboard del usuario residente</h1>
        </div>
    );
};

export default Profile;
