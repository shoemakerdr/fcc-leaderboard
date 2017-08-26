import React from 'react'
import './TableRow.css'

const TableRow = props =>
    (
        <tr>
            <td>{props.rank}</td>
            <td>
                <img src={props.img} alt={props.username} /> 
                <a href={props.link}>{props.username}</a>
            </td>
            <td>{props.recent}</td>
            <td>{props.alltime}</td>
        </tr>
    )

export default TableRow
