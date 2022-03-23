import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons'

const Header =()=> {
  const date = new Date().toString().split(' ');

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

  const month = months[date[1]]
  const day = date[2]

  return (
    <header className='flex flex-col place-content-centerborder-b-slate-700 border-b-1 w-full relative px-4 pt-4 pb-1 dark:bg-black'>
      <div className='flex items-baseline justify-start'>
        <FontAwesomeIcon icon={ faAppleWhole } className='text-black dark:text-white mr-1 text-3xl'/>
        <h2 className='flex text-4xl font-black dark:text-white'>News</h2>
      </div>
      <time className='flex items-start text-red-500 text-4xl mb-2 font-black leading-7 dark:text-slate-300'>{`${month} ${day}`}</time>
    </header>
  )
}

export default Header;
