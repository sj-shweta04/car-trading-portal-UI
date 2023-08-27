import { useEffect, useState } from "react";
import Cars from "../ViewCars/Cars"
import axios from "axios";
import { useParams } from "react-router-dom";

const SearchByCity = () => {
  const [cars, setCars] = useState();
  const { cityName } = useParams()
  useEffect(() => {
    axios.get(`http://localhost:8080/api/cars/city/${cityName}`)
      .then((response) => {
        setCars(response.data)
      })
  }, [cityName])
  console.log(
    cityName
  );
  return (
    <div>
      <Cars cars={cars} heading={`Cars in ${cityName}`}/>
    </div>
  )
}

export default SearchByCity