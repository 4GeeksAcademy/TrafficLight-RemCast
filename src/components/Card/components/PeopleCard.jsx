
const PeopleCard = ({ gender, hair_color, eye_color }) => {
    return (
        <div className="card-body">
          <p className="card-text"> <strong> Gender: </strong>{gender} <br />
          <strong> Hair Color:</strong> {hair_color} <br />
           <strong>Eye Color:</strong> {eye_color}</p>
        </div>
    );
  };
  
  export default PeopleCard;