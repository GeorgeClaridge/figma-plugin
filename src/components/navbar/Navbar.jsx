import './navbar.css';
import { Logo} from './imports'

const Navbar = () => {
  return (
  
    <div className="NavContainer bg-white flex flex-row justify-between py-4 px-12 font-mono">

      <div className="NavLeft text-green text-2xl font-medium flex">
        <img src={Logo} alt="Scroll" className='Icon self-center w-8'/>
        <p>features</p>
      </div>

      <div className="NavRight text-dark text-lg font-medium flex flex-row justify-start items-center">
        <p className=""><a href='#home'>Features</a></p>
        <p className="pl-24"><a href='#home'>About</a></p>
        <p className="pl-24"><a href='#home'>Contact</a></p>
      </div>

    </div>


         
  )
}

export default Navbar
