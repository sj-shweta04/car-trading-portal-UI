import SearchPanel from '../Search/Search'
import ViewCars from './ViewCars'
import './style.css'
const Home = () => {
  return (
    <>  
    <div >
    <div className="bg-image container d-flex">
    <SearchPanel/>
    </div>
    <ViewCars />
    </div>
    </>
  )
}

export default Home