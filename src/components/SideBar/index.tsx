import { BiExit } from 'react-icons/bi'
import { BsGearFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import "./index.css"
import { sidebarOptions } from './sidebar.options'

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
    bg-white dark:bg-gray-900 shadow-lg">
      <SidebarIcon icon={(<img className='
        w-12 h-12
        rounded-3xl hover:rounded-xl
        transition-all duration-300 ease-linear' src='https://source.unsplash.com/random'></img>)}
        tooltip='Profile'></SidebarIcon>
      <Divider />
      {
        sidebarOptions.map(options => {
          return <SidebarIcon
            icon={options.icon}
            tooltip={options.tooltip}
            path={options.path}
            key={options.title}></SidebarIcon>
        })
      }
      <FillContent />
      <Divider />
      <SidebarIcon icon={<BsGearFill size='20' />} tooltip='Configurations'></SidebarIcon>
      <SidebarIcon icon={<BiExit size='20' />} tooltip='Logout'></SidebarIcon>
    </div>
  )
}

const SidebarIcon = ({ icon, tooltip = '', path = '' }) => {
  const navigate = useNavigate();
  return (
    <Link className="sidebar-icon group" to={path}>
      {icon}
      {tooltip &&
        <div className="tooltip group-hover:scale-100">
          {tooltip}
        </div>}
    </Link>
  )
}

const Divider = () => {
  return <hr className='sidebar-divider' />
}
const FillContent = () => {
  return <div className='flex-grow'></div>;
}

export default SideBar