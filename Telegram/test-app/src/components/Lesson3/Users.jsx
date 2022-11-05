import {useEffect, useState} from 'react';

const response = [
    {id:1, name:'Oleg'},
    {id:2, name:'Anton'},
    {id:3, name:'ivan'},
    {id:4, name:'max'}
]

export default function Users({status}) {
    const [users, setUsers] = useState([])

    console.log(status);
    
    useEffect(() => {
        setUsers(response)
    }, [users])

return (
    <div>
        <h1>Cool</h1>
        {
            users.map((user) => <li key={user.id}>{user.name}</li>)
        }
    </div>
)
}