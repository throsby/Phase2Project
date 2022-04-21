export default function Restaurants(){
  function capitalize (string){
    return string.toLowerCase().split(" ").map(element => {
      return element[0].toUpperCase() + element.slice(1);
    }).join(" ")
  }
  function renderGrades(grade) {
    switch(grade) {
      case 'A':
        return <img src="/imgs/Grade Card_A_v2.jpeg(3).png" className="card-icon"/>;
      case 'B':
        return <img src="/imgs/Grade Card_A_v2.jpeg(2).png" className="card-icon"/>;
      case 'C':
        return <img src="/imgs/Grade Card_A_v2.jpeg(1).png" className="card-icon"/>;
      case 'Z':
        return null;
      case 'P':
          return null;
      default:
        return null;
    }
  }
  const testArray = [
    {
      name: "HILLSTONE MANHATTAN",
      street: "PARK AVENUE SOUTH",
      building: "378",
      borough: "Manhattan",
      grade: "B", 
      cuisine: "Greek"
    },
    {
      name: "DOMINO'S",
      street: "WESTCHESTER AVENUE",
      building: "2025",
      borough: "Bronx",
      grade: "A",
      cuisine: "Peruvian"
    }
  ]
  return(
  <div>
    <i class="fa-solid fa-circle-a"></i>
    {
      testArray.map((element)=> {
        return(
          <div className="restaurant-card">
            <h4 className="restaurant-title">{element.name}</h4>
            <div className="restaurant-address">{`${element.building} ${capitalize(element.street)}`}</div>
            <div className="restaurant-borough">{element.borough}</div>
            <h5 className="restaurant-cuisine">{element.cuisine}</h5>
            {element.grade && renderGrades(element.grade)}
          </div>
        )
      })
    }
  </div>
  )
  
}