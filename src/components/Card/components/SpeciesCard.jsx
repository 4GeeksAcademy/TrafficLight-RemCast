
const SpeciesCard = ({ speciename, classification, language }) => {
    return (
      <div className="card-body">
          <p className="card-text"> <strong> Specie Name: </strong>{speciename}</p>
          <p className="card-text"> <strong> Classification:</strong> {classification}</p>
          <p className="card-text"> <strong>Language:</strong> {language}</p>
      </div>
    );
  };
  
  export default SpeciesCard;