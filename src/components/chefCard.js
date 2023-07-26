import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"



export default function ChefCarl({chef}){
    return(
        <div className="chefCard">
            <img src={chef.img} />
            <div className="chefCardInfo">
                <h3 className="chefCardName">{chef.name}</h3>
                <p className="chefRecipiesCount">Recipes: {chef.recipiesCount}</p>
                <p className="chefCuisine">Cuisine: {chef.cuisine}</p>
                <p className="chefIcons">
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                </p>
            </div>
        </div>
    )
}