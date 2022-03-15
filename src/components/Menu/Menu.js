import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faBookmark, faStar } from '@fortawesome/free-regular-svg-icons'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Menu =()=> {
  return (
    <div  id='app-menu'
          className='border-t-2 border-red-400 fixed bottom-0 inset-x-0 h-24 z-50 '>

      {/* mobilemenu */}
      <ul className='h-full w-full flex justify-around items-center'>

        <li className='flex flex-col justify-center items-center h-full w-auto'>
          <FontAwesomeIcon className='p-1' icon={faNewspaper} size='2x' />
          <p className='text-lg'>Today</p>
        </li>

        <li className='flex flex-col justify-center items-center h-full w-auto'>
          <FontAwesomeIcon className='p-1' icon={faBars} size='2x' />
          <p className='text-lg'>Sections</p>
        </li>

        <li className='flex flex-col justify-center items-center h-full w-auto'>
          <FontAwesomeIcon className='p-1' icon={faStar} size='2x'/>
          <p className='text-lg'>Popular</p>
        </li>

        <li className='flex flex-col justify-center items-center h-full w-auto'>
          <FontAwesomeIcon className='p-1' icon={faBookmark} size='2x'/>
          <p className='text-lg'>Bookmarks</p>
        </li>

        <li className='flex flex-col justify-center items-center h-full w-auto'>
          <FontAwesomeIcon className='p-1' icon={faMagnifyingGlass} size='2x' />
          <p className='text-lg'>Search</p>
        </li>

      </ul>
    </div>
  )
}

export default Menu;
