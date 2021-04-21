import React, { useState } from "react";
import "./style.css";

function Table({ users, handleSort, order }) {
  const [nameOrder, setNameOrder] = useState("a");
  const [emailOrder, setEmailOrder] = useState("a");
  const toggleNameState = () => {
    if (nameOrder === "a") {
      setNameOrder("d");
    } else {
      setNameOrder("a");
    }
    users.sort(compare(users))
  };
  const toggleEmailState = () => {
    if (emailOrder === "a") {
      setEmailOrder("d");
    } else {
      setEmailOrder("a");
    }
  };

  function compare(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      }
      else if (a[prop] < b[prop]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    };
  }

  users.sort(compare(users));

  return (
    <table>
      <tr>
        <th>Image</th>
        {nameOrder === "d" ? (
          <th onClick={() => toggleNameState()}>Name(d)</th>
        ) : (
          <th onClick={() => toggleNameState()}>Name(a)</th>
        )}

        {emailOrder === "d" ? (
          <th onClick={() => toggleEmailState()}>Email(d)</th>
        ) : (
          <th onClick={() => toggleEmailState()}>Email(a)</th>
        )}
        <th>Phone</th>
      </tr>
      {users.map((user) => {
        return (
          <tr key={user.login.uuid}>
            <td>
              <img src={user.picture.thumbnail}></img>
            </td>
            <td>
              {user.name.first} {user.name.last}{" "}
            </td>
            <td>{user.email} </td>
            <td>{user.phone} </td>
          </tr>
        );
      })}
    </table>
  );
}

export default Table;
