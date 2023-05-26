import React from 'react'
import './Table.css'

function Table2({data})
 { 
  return (
    <div>
    <table id="customers">
        <tbody>
            <tr>
                {/* <th>Name</th> */}
                <th>Storage Name</th>
                <th>Opening time</th>
                <th>Closing time</th>
                <th>Storage location</th>
                {/* <th>Availability</th> */}
                {/* <th>Facilities</th> */}
                <th>Helpline Number</th>
                <th>directions</th>
            </tr>
            {
               data.map((item)=>(
                <tr key={item.HospitalName}>
                    <td>{item.HospitalName}</td>
                    <td>{item.openingtime}</td>
                    <td>{item.closingtime}</td>
                    <td>{item.hospitalLoc}</td>
                    {/* <td>{item.serviceavialability}</td> */}
                    {/* <td>{item.Transportation}</td> */}
                    <td>{item.helplinenumber}</td>
                    <td><a href={item.directionlink}>directions path</a></td>
                </tr>
               )) 
            }
        </tbody>
    </table>
    </div>
  )

}
export default Table2;