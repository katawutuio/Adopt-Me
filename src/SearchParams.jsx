import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const ANIMALS = ['dog', 'cat', 'bird', 'rabbit', 'penguin']
  const [animal, setAnimal] = useState("")

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select id="animal" value={animal} onChange={(e) => {setAnimal(e.target.value)}}>
            <option />
            {ANIMALS.map((animal) => (
                <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;