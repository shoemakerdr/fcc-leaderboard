import React from 'react'
import './Table.css'
import TableRow from './TableRow'

const Table = props =>
    (
        <table>
            <tbody>
                <tr>
                    <th>Rank</th>
                    <th>Camper Name</th>
                    <th
                        onClick={() => props.recent.type === 'descend' ? props.ascentRecent() : props.descendRecent()}
                    >
                        Points in Past 30 Days {props.recent.sort ? props.recent.arrow : ''}
                    </th>
                    <th
                        onClick={() => props.alltime.type === 'descend' ? props.ascendAllTime() : props.descendAllTime()}
                    >
                        All Time Points {props.alltime.sort ? props.alltime.arrow : ''}
                    </th>
                </tr>
                {props.data.map((item, i) =>
                    <TableRow 
                        key={i}
                        rank={i + 1}
                        username={item.username}
                        img={item.img}
                        link={`https://www.freecodecamp.org/${item.username}`}
                        recent={item.recent}
                        alltime={item.alltime}
                    />
                )}
            </tbody>
        </table>
    )

export default Table
