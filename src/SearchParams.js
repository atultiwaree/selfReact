// import { useState } from "react";

const SearchParams = () => {
  let location = "Seattle, WA";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input id="location" value={location} placeholder="Location...." />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
