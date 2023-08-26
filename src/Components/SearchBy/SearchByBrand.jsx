import { useEffect, useState } from "react";
import Cars from "../ViewCars/Cars"
import axios from "axios";
import { useParams } from "react-router-dom";


const SearchByBrand = () => {
    const [cars, setCars] = useState();
    const { brandName } = useParams()
    useEffect(() => {
      axios.get(`http://localhost:8080/api/brand/${brandName}`)
        .then((response) => {
          setCars(response.data)
        })
    }, [brandName])
    console.log(
        brandName
    );
    return (
      <div>
        <Cars cars={cars} />
      </div>
    )
}

export default SearchByBrand