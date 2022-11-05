import React from 'react'
import UsersCards from './UsersCards'
import {BsFacebook, BsTelegram} from "react-icons/bs";

function Parent() {
    const users = [
        {
            id: 1,
            name: "Mark",
            surname:"Zuckerberg",
            age:"38",
            phone:"+1 650 543 4XXX ",
            address: "White Plains, New York, USA.",
            icons: <BsFacebook className='icons__facebook' />
        },
        {
            id: 2,
            name: "Pavel",
            surname:"Durov",
            age:"37",
            phone:"+7 921 740 8XXX ",
            address: "Saint-Petersburg, Russia.",
            icons: <BsTelegram className='icons__telegram' />
        }
    ];

return (
    <div>
       <UsersCards itemsUsers = {users} />
    </div>
)
}   
export default Parent
