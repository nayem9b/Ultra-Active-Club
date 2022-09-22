import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const User = () => {

      const[user, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default User;