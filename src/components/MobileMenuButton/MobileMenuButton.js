import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useParams } from 'react-router-dom'

const MobileMenuButton =({icon, text})=> {
  const params = useParams();
  return (
    <li className='flex flex-col justify-center items-center h-full w-auto'>
      <NavLink to={`${text.toLowerCase()==='today'? '/' : text.toLowerCase()}`} className='flex flex-col justify-center items-center h-full w-auto'>
          {({isActive}) => (
            <span className='flex flex-col justify-start items-center'>
              <FontAwesomeIcon className={isActive  ? 'p-1 text-red-500' : 'p-1 text-slate-400' } icon={icon} size='2x' />
              <p className={isActive? 'text-md text-red-500' : 'text-md text-slate-400'}>{text}</p>
            </span>
          )}
      </NavLink>
    </li>
  )
}

export default MobileMenuButton;


