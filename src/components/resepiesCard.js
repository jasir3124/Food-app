import CostumImage from "./costumImage"

export default function RecepiesCard() {
  return(
     <div className="recepiesCard">
        <CostumImage imgSrc='/img/gallery/pizzaImg.jpg' pt='65%' />
        <div className="recepiesCardInfo">
            <img className="authorImg" src='/img/people/chef 1.jpeg'/>
            <p className="recepiesTitle">Chicken pan pizza</p>
            <p className="recepiesDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a className="viewBtn" href="#!">View Recipe</a>
        </div>
    </div>
  )
}
 