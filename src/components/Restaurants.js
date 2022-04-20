export default function Restaurants(){
  function capitalize (string){
    return string.toLowerCase().split(" ").map(element => {
      return element[0].toUpperCase() + element.slice(1);
    }).join(" ")
  }
  const testArray = [
    {
      name: "HILLSTONE MANHATTAN",
      street: "PARK AVENUE SOUTH",
      building: "378",
      borough: "Manhattan"
    },
    {
      name: "DOMINO'S",
      street: "WESTCHESTER AVENUE",
      building: "2025",
      borough: "Bronx"
    }
  ]
  return(
  <div>
    {
      testArray.map((element)=> {
        return(
          <div>
            <h4 className="restaurant-title">{element.name}</h4>
            <p className="restaurant-borough">{element.borough}</p>
            <p className="restaurant-address">{`${element.building} ${capitalize(element.street)}`}</p>
          </div>
        )
      })
    }
  </div>
  )
  
}