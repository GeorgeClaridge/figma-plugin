import './clay.css';
import { BackgroundClay, Phone,} from './imports'

const Clay = () => {
  return (
    
    <div className="HeaderContainer flex justify-center px-8 pt-24 pb-12">

      <div className="ContainterOne p-24  bg-contain bg-no-repeat" style={{ backgroundImage: `url(${BackgroundClay})` }}>

        <div className="MainText text-4xl font-mono leading-extra-loose tracking-tighter">
          <h1>Figma Plugin <span className='text-green'>Clay Mockups 3D</span></h1>
        </div>

        <div className="SubText text-lg pt-4">
          <h1>Create customizable 3D mockups of devices</h1>
          <h1>phones,tables and more !</h1>
        </div>

        <button class="btn bg-green text-white font-bold py-3 px-8 mt-5 text-sm">
          Go To Plugin
        </button>

        <div className="Logo flex justify-end">
          <img src={Phone} alt="Clay Phone" className=" -mt-[16rem] -mr-[10rem]"/>
        </div>

      </div>
    </div>

  )
}

export default Clay
