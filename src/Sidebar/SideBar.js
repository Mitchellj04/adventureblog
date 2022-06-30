import './sideBar.css'

const sideBar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span>ABOUT ME</span>
            <img className='aboutme' src='/Images/kozME.jpg' />
            <p>lkjnlkndlkfnwklefnslkd</p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORY</span>
            <ul className='sidebarList'>
                <li classname="sidebarListItem">Beach</li>
                <li classname="sidebarListItem">Town</li>
                <li classname="sidebarListItem">Mountains</li>
                <li classname="sidebarListItem">Camping</li>
            </ul>
        </div>
    </div>
  )
}

export default sideBar