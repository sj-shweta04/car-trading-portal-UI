import SearchPanel from '../Search/Search'
import './style.css'
const Home = () => {
  return (
    <>  
    <div className="bg-image container vh-100 d-flex">
    <div className='d-flex align-items-center justify-content-center'>
    <SearchPanel/>
    </div>
    </div>
    </>
  )
}

export default Home