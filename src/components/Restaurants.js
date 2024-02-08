export default function Restaurants({selectedRestaurants, setSelectedRestaurants}){
  // function capitalize (string){
  //   return string.toLowerCase().split(" ").map(element => {
  //     return element[0].toUpperCase() + element.slice(1);
  //   }).join(" ")
  // }
  function renderGrades(grade) {
    switch(grade) {
      case 'A':
        return <img src="imgs/Grade Card_A_v2.jpeg(3).png" className="card-icon"/>;
      case 'B':
        return <img src="imgs/Grade Card_A_v2.jpeg(2).png" className="card-icon"/>;
      case 'C':
        return <img src="imgs/Grade Card_A_v2.jpeg(1).png" className="card-icon"/>;
      case 'Z':
        return null;
      case 'P':
          return null;
      default:
        return null;
    }
  }
  
  return(
  <div>
    <i className="fa-solid fa-circle-a"></i>
    {
      selectedRestaurants.map((element, i)=> {
        return(
          <div className="restaurant-card">
            <div className="restaurant-close" onClick={() => {
              setSelectedRestaurants(prevState => (prevState.filter(restaurant => restaurant.properties.name !== element.properties.name)))
            }}>✖</div>
            <h4 className="restaurant-title">{element.properties.name}</h4>
            <div className="restaurant-address">{element.properties.street_address}</div>
            {/* <div className="restaurant-borough">{element.properties.borough}</div> */}
            <h5 className="restaurant-cuisine">{element.properties.cuisine}</h5>
            {element.grade && renderGrades(element.grade)}
          </div>
        )
      })
    }
  </div>
  )
  
}