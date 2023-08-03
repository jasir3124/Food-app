import PreviusSearches from "../components/PreviusSearches";
import RecepiesCard from "../components/resepiesCard";

export default function Recipes() {
  return (
    <div>
      <PreviusSearches />
      <div className="recepiesContainer">
        <RecepiesCard />
        <RecepiesCard />
        <RecepiesCard />
        <RecepiesCard />
        <RecepiesCard />
        <RecepiesCard />
      </div>
    </div>
  );
}
