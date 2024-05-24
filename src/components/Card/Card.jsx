import { Link } from "react-router-dom";
import PeopleCard from "./components/PeopleCard.jsx";
import PlanetsCard from "./components/PlanetsCard.jsx";
import SpeciesCard from "./components/SpeciesCard.jsx";
import StarshipsCard from "./components/StarshipsCard.jsx";
import useAppContext from "../../contexts/AppContext.jsx";

const Card = ({ uid, name, fetchType, hair_color, eye_color, gender, terrain, population, climate, speciename, classification, language, starshipname, model, starship_class,}) => {

  const {store: {favorites}, actions: {addToFav, removeFav},} = useAppContext();
  const isFavorite = favorites.some(items => items.uid === uid);



  return (
    <div className="card opacity-75" style={{ minWidth: "18rem" }}>
      <img src="https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop16x9.1920w.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="card-text">
          {fetchType === "people" && (
            <PeopleCard gender={gender} hair_color={hair_color} eye_color={eye_color} />
          )}
          {fetchType === "planets" && (
            <PlanetsCard terrain={terrain} population={population} climate={climate} />
          )}
          {fetchType === "species" && (
            <SpeciesCard speciename={speciename} classification={classification} language={language} />
          )}
          {fetchType === "starships" && (
            <StarshipsCard starshipname={starshipname} model={model} starship_class={starship_class} />
          )}
        </div>
        <div className="d-flex justify-between">
          <Link to={`/${uid}`} className="block btn btn-warning">
            ver detalles 
          </Link>
          <button type="button" className="btn btn-danger ms-auto" onClick={isFavorite ?
            () => removeFav(uid) :
            () => addToFav(uid, name)}
            >
            {isFavorite ? (
              <i className="fa-solid fa-heart"></i>) : (<i className="fa-regular fa-heart"></i>)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;