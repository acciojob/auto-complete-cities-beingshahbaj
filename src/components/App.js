
import React from "react";
import './../styles/App.css';
import { useState } from "react";


const App = () => {
const suggestions = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Jaipur",
  "Lucknow",
  "Ahmedabad",
  "Pune",
  "Surat",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Agra",
  "Patna",
  "Ludhiana",
  "Coimbatore",
  "Madurai",
  "Varanasi",
  "Amritsar",
  "Nashik",
  "Vadodara",
  "Rajkot",
  "Vijayawada",
  "Bhubaneswar",
  "Guwahati",
  "Kochi",
  "Trivandrum",
  "Jodhpur",
  "Jaipur",
  "Aurangabad",
  "Raipur",
  "Kota",
  "Ghaziabad",
  "Faridabad",
  "Meerut",
  "Jamshedpur",
  "Srinagar",
  "Jammu",
  "Asansol",
  "Dhanbad",
  "Allahabad",
  "Durgapur",
  "Gorakhpur",
  "Guntur",
  "Warangal",
  "Ranchi",
  "Jabalpur",
  "Bhilai",
  "Cuttack",
  "Kakinada",
  "Siliguri",
  "Udaipur",
  "Tiruppur",
  "Belgaum",
  "Mangalore",
  "Ambala",
  "Rohtak",
  "Hisar",
  "Gulbarga",
  "Jhansi",
  "Bareilly",
  "Aligarh",
  "Moradabad",
  "Saharanpur",
  "Gaya",
  "Tirunelveli",
  "Ujjain",
  "Gwalior",
  "Jalandhar",
  "Tiruchirappalli",
  "Nellore",
  "Sangli",
  "Ratlam",
  "Ajmer",
  "Malegaon",
  "Davangere",
  "Kollam",
  "Akola",
  "Nanded",
  "Rourkela",
  "Mangaluru",
  "Bokaro",
  "Gulbarga",
  "Ajmer",
  "Kurnool",
  "Jamnagar",
  "Ujjain",
  "Loni",
  "Kozhikode",
  "Khanna",
];

const [inputValue, setInputValue] = useState("");
const [filteredSuggestions, setFilteredSuggestions] = useState([]);

const handleInputChange = (e) => {
  const value = e.target.value;
  setInputValue(value);

  // Filter suggestions based on user input
  const filtered = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(value.toLowerCase())
  );

  setFilteredSuggestions(filtered);
};

const handleSuggestionClick = (suggestion) => {
  setInputValue(suggestion);
  setFilteredSuggestions([]);
};

return (
  <div className="form">
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Type a city or street name"
    />
    {filteredSuggestions.length > 0 && (
      <ul >
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    )}
  </div>
);
}

export default App
