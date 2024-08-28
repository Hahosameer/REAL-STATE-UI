import React, { useState } from 'react'
import "./searchBar.scss"
function SearchBar() {

    const type  = ["buy", "rent"]
    const [query, setQuery] = useState({
        type: "buy",
        city: "",
        minPrice: 0,
        maxPrice: 0,
      });

      const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
      };


  return (
    <div className='SearchBar'>
        <div className="type">
        {type.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
        </div>
        <form >
            <input type="text" name='location' placeholder='City Location'/>
            <input type="number" min={0} max={10000000} name='MinPrice' placeholder='Min Price'/>
            <input type="number" min={0} max={10000000} name='MaxPrice' placeholder='Max Price'/>
            <button>
                <img src="search.png" alt="" />
            </button>
        </form>
    </div>
  )
}

export default SearchBar