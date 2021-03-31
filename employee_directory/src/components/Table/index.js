import React from "react";

function Table({users, handleSort, order}) {
  return (
   <table>
     <tr>
     <th>Image</th>
     {order === 'descend' ? <th onClick={() => handleSort()}>Name(d)</th>:<th onClick={() => handleSort()}>Name(a)</th>}
  
     <th>E-mail</th>
     <th>Phone</th>
     </tr>
     {users.map(user => {
       return (
         <tr key={user.login.uuid}>
           <td><img src={user.picture.thumbnail}></img></td>
           <td>{user.name.first} {user.name.last} </td> 
           <td>{user.email} </td> 
           <td>{user.phone} </td> 
         </tr>
       )
     })}
   </table>
  );
}

export default Table;
