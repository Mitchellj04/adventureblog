import './Home.css'
import Header from '../Header/Header'
import Post from '../Posts/post'
import SideBar from '../Sidebar/SideBar'


const Home = () => {
  return (
    <>
      <Header />
      <div className='home'>
        <Post />
        <SideBar />
      </div>
    </>
  )
}

export default Home