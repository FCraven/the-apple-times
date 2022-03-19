import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const MobileMenuButton =({icon, text})=> {
  return (
    <li className='flex flex-col justify-center items-center h-full w-auto'>
      <NavLink to={`${text.toLowerCase()}`}>
          {({isActive}) => (
            <>
              <FontAwesomeIcon className={isActive? 'p-1 text-red-500' : 'p-1 text-slate-400' }icon={icon} size='2x' />
              <p className={isActive? 'text-md text-red-500' : 'text-md text-slate-400'}>{text}</p>
            </>
          )}
      </NavLink>
    </li>
  )
}

export default MobileMenuButton;


