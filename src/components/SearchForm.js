import React, { useState } from "react";

function SearchForm(props) {
  const [results, setResults] = useState();

  const changeHandler = e => {
    setResults(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const filteredResults = props.characters.filter(characters => {
      return characters.name.toLowerCase().includes(results.toLowerCase());
    });
    props.search(filteredResults);
    console.log(filteredResults);
  };

 
  return (
    <section className="search-form">
    <form onSubmit={submitHandler}>
        <input
          onChange={changeHandler}
          type="text"
          name="character"
          id="character"
          placeholder="Search"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default SearchForm; 