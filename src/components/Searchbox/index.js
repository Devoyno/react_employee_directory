import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBox({handleInputChange}) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="user">User:</label>
        <input
          onChange={(e) => handleInputChange(e)}
          name="user"
          type="text"
          className="form-control"
          placeholder="Type a name to begin"
        />
      </div>
    </form>
  );
}

export default SearchBox;
