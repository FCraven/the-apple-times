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

  const month = months[date[1]];
  const day = date[2];

  const dayMaker =(str)=> {
    const splitStr = str.split('');
    return splitStr[0] === '0' ? splitStr[1] : str;
  }

  return (
    <header className='flex flex-col border-b border-slate-300 relative top-0 mb-8 pb-1 dark:bg-black'>
      <div className='flex items-baseline justify-start'>
        <FontAwesomeIcon icon={ faAppleWhole } className='text-black dark:text-white mr-1 text-3xl'/>
        <h2 className='flex text-4xl font-black dark:text-white'>Times</h2>
      </div>
      <time className='flex items-start text-slate-300 dark:text-slate-500 text-4xl mb-2 font-black leading-7'>
        {`${month} ${dayMaker(day)}`}
      </time>
    </header>
  )
}

export default Header;
