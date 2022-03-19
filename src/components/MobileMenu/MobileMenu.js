import { MobileMenuButton } from '../index'

import { faNewspaper, faBookmark, faStar } from '@fortawesome/free-regular-svg-icons'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const mobileMenuButtons = [
  {
    text: 'Today',
    icon: faNewspaper,
  },
  {
    text: 'Sections',
    icon: faBars,
  },
  {
    text: 'Popular',
    icon: faStar,
  },
  {
    text: 'Bookmarks',
    icon: faBookmark,
  },
  {
    text: 'Search',
    icon: faMagnifyingGlass,
  },
]

const MobileMenu =()=> {

  return (
    <nav className='h-full w-full flex justify-around items-center bg-transparent backdrop-blur-md dark:bg-slate-900'>

      { mobileMenuButtons.map((el,index)=> <MobileMenuButton key={index} text={el.text} icon={el.icon} /> )}

    </nav>
  )
}

export default MobileMenu;
