import React from 'react'
import './TableRow.css'

const TableRow = props =>
    (
        <tr className='TableRow'>
            <td>{props.rank}</td>
            <td>
                <div className='user-info'>
                    <img src={props.img} alt={props.username} className='user-img' />
                    <a href={props.link}  className='username'>{props.username}</a>
                </div>
            </td>
            <td>{props.recent}</td>
            <td>{props.alltime}</td>
        </tr>
    )

export default TableRow
