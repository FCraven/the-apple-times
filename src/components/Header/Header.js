import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons'

const Header =()=> {
  const date = new Date().toString();
  const splitDate = date.split(' ');

  const months = {
    Jan : 'January',
    Feb: 'February',
    Mar: 'March',
    Apr: 'April',
    May: 'May',
    Jun: 'June',
    Jul: 'July',
    Aug: 'August',
    Sep: 'September',
    Oct: 'October',
    Nov: 'November',
    Dec: 'December'
  }

  console.log('Date', date)





  return (
    <header className='border border-b-slate-700 h-16 w-full relative'>
      <FontAwesomeIcon icon={ faAppleWhole } />
      <time>{`${months[splitDate[1]]} ${splitDate[2]}`}</time>
    </header>
  )
}

export default Header;
