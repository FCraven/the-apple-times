import { MobileMenu } from '../index'

const Menu =()=> {
  return (
    <div id='app-menu' className='border-t-2 fixed bottom-0 inset-x-0 h-24 z-50 '>

      {/* mobilemenu */}
      <MobileMenu />

    </div>
  )
}

export default Menu;
