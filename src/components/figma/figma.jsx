import './figma.css';
import { Scroll,Empty,Background} from './imports'

const Figma = () => {
  return (
    <div>
      <div className="HeaderContainer flex justify-around pt-12 py-8">
        <div className="ContainterOne bg-contain bg-no-repeat pl-4 pr-2" style={{ backgroundImage: `url(${Background})` }}>

          <div className="MainText text-4xl font-mono leading-extra-loose tracking-tighter">
            Just testing some <span className='text-green'>features</span>
          </div>

          <div className="MainText text-4xl font-mono leading-extra-loose tracking-tighter">
            for a future website
          </div>

          <div className="SubText text-lg pt-4 leading-normal">
            This is some sub text !
          </div>

          <div className="SubText text-lg pb-4 leading-normal">
            This is some more sub text !
          </div>
        </div>
        
        <div className="ContainterOne pr-4 pl-2">
          <img src={Empty} alt="Empty Space" className='Image'/>
        </div>

      </div>

      <div className="Scroll px-12 pt-20 flex font-semibold text-base">
        <img src={Scroll} alt="Scroll" className='Icon self-center w-6 h-6'/><p><span className='text-green'> Scroll</span> <span> To See More !</span></p>
      </div>

    </div>
  )
}

export default Figma
