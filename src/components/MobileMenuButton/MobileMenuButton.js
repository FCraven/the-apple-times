import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileMenuButton =({icon, text})=> {
  return (
    <li className='flex flex-col justify-center items-center h-full w-auto'>
      <FontAwesomeIcon className='p-1' icon={icon} size='2x' />
      <p className='text-lg'>{text}</p>
    </li>
  )
}

export default MobileMenuButton;


