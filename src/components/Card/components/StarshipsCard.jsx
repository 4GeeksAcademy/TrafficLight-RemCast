
const StarshipsCard = ({ starshipname, model, starship_class }) => {
    return (
      <div className="card-body">
      
      <p className="card-text"> <strong> Starship Name: </strong>{starshipname}</p>
      <p className="card-text"> <strong> Model:</strong> {model}</p>
      <p className="card-text"> <strong>Starship Class:</strong> {starship_class}</p>
  
    </div>
    );
  };
  
  export default StarshipsCard;