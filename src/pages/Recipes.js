import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



export default function Recipes() {
  let Searches = [
    "Pizza",
    "Burger",
    "Cookies",
    "Juice",
    "Biriyani",
    "Salad",
    "Ice cream",
    "Lasagna",
    "Pudding",
    "Soup",
  ];
  return (
    <div>
      <div className="previusSearches section">
        <h2>Previus Searches</h2>
        <div className="previusSearchesContainer">
          {Searches.map((search, index) => (
            <div style={{animationDelay: index * .1 + 's'}} key={index} className="searchItem">
                {search}
            </div>
          ))}
        </div>
        <div className="searchBox">
            <input type="text" placeholder="search..."/>
            <button className="btn" type="button">
              <FontAwesomeIcon icon={faSearch}/>
            </button>
        </div>
      </div>
    </div>
  );
}
