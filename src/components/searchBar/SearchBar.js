import React from "react";

export const SearchBar = ({searchTerm, handleChange}) => {

    return (
        <form>
          <input type="search"
                 placeholder="   Search or start new chat"
                 value={searchTerm}
                 onChange={e=>handleChange(e.target.value)}/>
        </form>
  );
    };
