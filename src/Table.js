import React from 'react'
import './Table.css'
import TableRow from './TableRow'

const arrow = '↓'

const Table = props =>
    (
        <table className='Table'>
            <tbody>
                <tr className='table-header'>
                    <th>Rank</th>
                    <th>Camper Name</th>
                    <th className='sort'
                        onClick={() => props.sortRecent()}
                    >
                        Points in Past 30 Days {props.sort === 'recent' ? arrow : ''}
                    </th>
                    <th className='sort'
                        onClick={() => props.sortAllTime()}
                    >
                        All Time Points {props.sort === 'alltime' ? arrow : ''}
                    </th>
                </tr>
                {props.data.length > 1 && props.data.map((item, i) =>
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
