import { useParams } from "react-router-dom"
import useAppContext from "../contexts/AppContext";
import classes from "./View.pages.css"


const DetailPage = () => {
    const params = useParams();
    const { store } = useAppContext();
    const { people, planets, species, starships } = store;
    const allResources = [...people, ...planets, ...species, ...starships];
    const targetResource = allResources.find(items => items.uid == params.uid);

    console.log(store)


    const renderAttributes = () => {
        const attributes = [];
        for (const key in targetResource) {
            if (targetResource.hasOwnProperty(key)) {
                // Ignora la propiedad "uid" si no deseas mostrarla
                if (key !== "uid") {
                    attributes.push(
                        <div key={key} className="attribute">
            <               p className="attribute-name text-warning"><strong>{key}</strong></p>
                            <p className="attribute-value text-warning">{targetResource[key]}</p>
                        </div>
                    );
                }
            }
        }
        return attributes;
    };

    return (
        <>
        <div className="details-container">
            <div className="image-container">
                <img src="https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop16x9.1920w.jpg" alt="fallo la imagen" />
            </div>
            <div className="info-container">
                <h1>{targetResource.name}</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
      </div>
      <hr className="separator" />
      <div className="attributes-container">
        {renderAttributes()}
      </div>
        </>
    );
};

export default DetailPage;