import { useEffect, useState } from "react";
import Cars from "../ViewCars/Cars"
import axios from "axios";

const ViewCars = () => {
  const [cars, setCars] = useState();
  useEffect(() => {
      axios.get("http://localhost:8080/api/cars")
          .then((response) => {
              setCars(response.data)
          })
  }, [])
  console.log(
      cars
  );
  return (
    <div>
        
        <Cars cars={cars} heading={'All Cars'}/>
        
    </div>
  )
}

export default ViewCars