import PreviusSearches from "../components/PreviusSearches";
import RecepiesCard from "../components/resepiesCard";

export default function Recipes() {
  const recipes = [
    {
      title: 'chicken pas pizza',
      image: '/img/gallery/pizzaImg.jpg',
      authorImg: '/img/people/chef 1.jpeg'
    },
    {
      title: 'spagheti',
      image: '/img/gallery/spagheti and meatballs.jpg',
      authorImg: '/img/people/chef 2.jpeg'
    },
    {
      title: 'cheese burger',
      image: '/img/gallery/burger 1.jpeg',
      authorImg: '/img/people/chef 3.jpeg'
    },
    {
      title: 'Mutton biryanni',
      image: '/img/gallery/Mutton biryanni.jpg',
      authorImg: '/img/people/chef 4.jpeg'
    },
    {
      title: 'Jappanes sushi',
      image: '/img/gallery/sushi.jpg',
      authorImg: '/img/people/chef 5.png'
    },
    {
      title: 'chicken pas pizza',
      image: '/img/gallery/pizzaImg.jpg',
      authorImg: '/img/people/chef 1.jpeg'
    },
    {
      title: 'spagheti',
      image: '/img/gallery/spagheti and meatballs.jpg',
      authorImg: '/img/people/chef 2.jpeg'
    },
    {
      title: 'cheese burger',
      image: '/img/gallery/burger 1.jpeg',
      authorImg: '/img/people/chef 3.jpeg'
    },
    {
      title: 'Mutton biryanni',
      image: '/img/gallery/Mutton biryanni.jpg',
      authorImg: '/img/people/chef 4.jpeg'
    },
    {
      title: 'Jappanes sushi',
      image: '/img/gallery/sushi.jpg',
      authorImg: '/img/people/chef 5.png'
    },
    {
      title: 'chicken pas pizza',
      image: '/img/gallery/pizzaImg.jpg',
      authorImg: '/img/people/chef 1.jpeg'
    },
    {
      title: 'spagheti',
      image: '/img/gallery/spagheti and meatballs.jpg',
      authorImg: '/img/people/chef 2.jpeg'
    },
    {
      title: 'cheese burger',
      image: '/img/gallery/burger 1.jpeg',
      authorImg: '/img/people/chef 3.jpeg'
    },
    {
      title: 'Mutton biryanni',
      image: '/img/gallery/Mutton biryanni.jpg',
      authorImg: '/img/people/chef 4.jpeg'
    },
    {
      title: 'Jappanes sushi',
      image: '/img/gallery/sushi.jpg',
      authorImg: '/img/people/chef 5.png'
    },
    {
      title: 'chicken pas pizza',
      image: '/img/gallery/pizzaImg.jpg',
      authorImg: '/img/people/chef 1.jpeg'
    },
    {
      title: 'spagheti',
      image: '/img/gallery/spagheti and meatballs.jpg',
      authorImg: '/img/people/chef 2.jpeg'
    },
    {
      title: 'cheese burger',
      image: '/img/gallery/burger 1.jpeg',
      authorImg: '/img/people/chef 3.jpeg'
    },
    {
      title: 'Mutton biryanni',
      image: '/img/gallery/Mutton biryanni.jpg',
      authorImg: '/img/people/chef 4.jpeg'
    },
    {
      title: 'Jappanes sushi',
      image: '/img/gallery/sushi.jpg',
      authorImg: '/img/people/chef 5.png'
    },
  ]//.sort(() => Math.random() - 0.5)
  return (
    <div>
      <PreviusSearches />
      <div className="recepiesContainer">
        {recipes.map((recipe, index) => (
          <RecepiesCard key={index} recipe={recipe}/>
        ))}
      </div>
    </div>
  );
}
