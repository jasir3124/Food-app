import CostumImage from "./costumImage"

export default function RecepiesCard({recipe}) {
  return(
     <div className="recepiesCard">
        <CostumImage imgSrc={recipe.image} pt='65%' />
        <div className="recepiesCardInfo">
            <img className="authorImg" src={recipe.authorImg}/>
            <p className="recepiesTitle">{recipe.title}</p>
            <p className="recepiesDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a className="viewBtn" href="#!">View Recipe</a>
        </div>
    </div>
  )
}
 