import Search from '../Search/Search'
import './home.css'
const Home = () => {
  return (
    <>  
    <div className="bg-image container vh-100 d-flex">
    <h1>Home</h1>
    <div className='d-flex align-items-center justify-content-center'>
    <Search/>
    </div>
    </div>
    </>
  )
}

export default Home