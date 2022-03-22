import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons'

const Header =()=> {
  const date = new Date();

  return (
    <header className='border border-b-slate-700 h-16 w-full relative'>
      <FontAwesomeIcon icon={ faAppleWhole } />
      <time>{`${date.getMonth()} ${date.getDay()}`}</time>
    </header>
  )
}

export default Header;
