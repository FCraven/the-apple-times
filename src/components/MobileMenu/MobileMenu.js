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
    <ul className='h-full w-full flex justify-around items-center'>

      { mobileMenuButtons.map((el,index)=> <MobileMenuButton key={index} text={el.text} icon={el.icon} /> )}

    </ul>
  )
}

export default MobileMenu;
