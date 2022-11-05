import React from 'react';
import "./Style.css";

export default function UsersCards({itemsUsers}) {
    const mapUser = itemsUsers.map((e)=> {

        return (
            
            <div key={e.id} className='main'>
                <div className='id'>
                    <div><h2>Сool programmers</h2></div>
                </div>

                <div className='names'>
                    <span className='name'>{e.name}</span>
                    <span>{e.surname}</span>
                </div>

                <div className='age'>
                    <div >{e.age}</div>
                </div>

                <div className='phone'>
                  <div >{e.phone}</div>
                </div>

                <div className='address'>
                    <div >{e.address}</div>
                </div>
                <div className='icons'>
                    <div >{e.icons}</div>
                </div>
           
            </div>
        )
    })
  return (
    <div className='users'>
        {mapUser}
    </div>
  )
}