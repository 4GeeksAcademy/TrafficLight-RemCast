import useAppContext from "../../../contexts/AppContext";

const Dropdown = () => {
    const {store, actions} = useAppContext();
    const {store: {favorites}, actions: {addToFav, removeFav},} = useAppContext();
    return(
        <div className="dropdown">
            <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
                <span className="badge bg-danger">{favorites.length}</span>
            </button>
            <ul className="dropdown-menu me-0">
                {favorites.map(elem => {
                    return (
                        <li className="favDropdItem inline-block" key={ elem.uid }><p>{elem.name}</p>  
                            <button className="dropdown-item text-end" onClick={() => removeFav(elem.uid)}>
                                <i class="fa-solid fa-trash"></i>                            
                            </button>
                        </li>
                    )
                })}
            </ul>
            
        </div>

    );
}
export default Dropdown