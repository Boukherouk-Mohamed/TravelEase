import React, { useState } from 'react';
import '../css/index.css';

function FlightsSearch() {
  let namesDeparture = ["Sidney", "Dubai", "Xiamen"];
  let namesArrival = ["Kuala Lumpur", "Abu Dhabi", "Sharjah", "Rabat", "Doha"];

  const [inputValueFrom, setInputValueFrom] = useState("");
  const [matchedNamesFrom, setMatchedNamesFrom] = useState([]);

  const [inputValueTo, setInputValueTo] = useState("");
  const [matchedNamesTo, setMatchedNamesTo] = useState([]);

  const [dateInfo, setDateInfo] = useState('');

  const handleChangeFrom = (e) => {
    const inputValueFrom = e.target.value;
    setInputValueFrom(inputValueFrom);

    // Filter the names that match the input value for 'From'
    const filteredNamesFrom = namesDeparture.filter((name) =>
      name.toLowerCase().startsWith(inputValueFrom.toLowerCase())
    );

    setMatchedNamesFrom(filteredNamesFrom);
  };

  const handleChangeTo = (e) => {
    const inputValueTo = e.target.value;
    setInputValueTo(inputValueTo);

    // Filter the names that match the input value for 'To'
    const filteredNamesTo = namesArrival.filter((name) =>
      name.toLowerCase().startsWith(inputValueTo.toLowerCase())
    );

    setMatchedNamesTo(filteredNamesTo);
  };

  const handleItemClickFrom = (name) => {
    setInputValueFrom(name);
    setMatchedNamesFrom([]);
  };

  const handleItemClickTo = (name) => {
    setInputValueTo(name);
    setMatchedNamesTo([]);
  };

  const handleDateChange = (e) => {
    setDateInfo(e.target.value);
  };

  const handleSearch = () => {
    // Create an object with the search information
    const searchInfo = {
      from: inputValueFrom,
      to: inputValueTo,
      date: dateInfo // You can replace this with the actual date selected by the user
    };

    // Add the searchInfo object to localStorage
    localStorage.setItem('flightSearch', JSON.stringify(searchInfo));
  };

  return (
    <div>
      <div className="containerFlights">
        <img src="images/travel.png" alt="" />
      </div>
      <div className='FlightsSearchInfos'>
        <div className='conta'>
          <h1>Where do you want to go?</h1>
        </div>
        <div className='formContainerFlightsSearch'>
          <form autoComplete="off">
            <div>
              <input
                type="text"
                id="inputFrom"
                placeholder="From..."
                value={inputValueFrom}
                onChange={handleChangeFrom}
              />
            </div>
            <ul className="list">
              {matchedNamesFrom.map((name) => (
                <li
                  key={name}
                  className="list-items"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleItemClickFrom(name)}
                >
                  <b>{name.substr(0, inputValueFrom.length)}</b>
                  {name.substr(inputValueFrom.length)}
                </li>
              ))}
            </ul>

            <div>
              <input
                type="text"
                id="inputTo"
                placeholder="To?"
                value={inputValueTo}
                onChange={handleChangeTo}
              />
            </div>
            <ul className="list">
              {matchedNamesTo.map((name) => (
                <li
                  key={name}
                  className="list-items"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleItemClickTo(name)}
                >
                  <b>{name.substr(0, inputValueTo.length)}</b>
                  {name.substr(inputValueTo.length)}
                </li>
              ))}
            </ul>

            <input
              type="date"
              placeholder='Day?'
              onChange={handleDateChange}
            />
          </form>
        </div>
        <div className='submitButtonFightsSearch'>
          <a href="/FlightsReslts" onClick={handleSearch}> <input type="submit" value='Search' /></a>
        </div>
      </div>
    </div>
  );
}

export default FlightsSearch;
