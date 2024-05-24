const PlanetsCard = ({terrain, population, climate }) => {
    return (
      <div className="card-body">
      <p className="card-text"> <strong> Terrain: </strong>{terrain}</p>
      <p className="card-text"> <strong> Population:</strong> {population}</p>
      <p className="card-text"> <strong>Climate:</strong> {climate}</p>
        </div>
    );
  };
  
  export default PlanetsCard;