import './plug.css';
import { BackgroundSkew, SlantSkew} from './imports'

const Plug = () => {
  return (
    
    <div className="HeaderContainer flex justify-around pt-24 pb-12">
      <div className="ContainterOne border-dotted border-8 px-8 pt-8 border-green">

        <div className="MainText text-4xl font-mono leading-extra-loose tracking-tighter">
          <h1>Figma Plugin <span className='text-green'>DotGrid</span></h1>
        </div>

        <div className="SubText text-lg pt-4">
          <h1>Easily generate dot grid with customizable</h1>
          <h1>width, height, size, gap and colour !</h1>
        </div>

        <button class="btn bg-green text-white font-bold py-3 px-8 mt-5 text-sm">
          Go To Plugin
        </button>

      </div>

      <div className="ContainterOne bg-contain bg-no-repeat p-8" style={{ backgroundImage: `url(${BackgroundSkew})` }}>

        <div className="MainText text-4xl font-mono leading-extra-loose tracking-tighter">
          <h1>Figma Plugin <span className='text-green'>SkewDat</span></h1>
        </div>

        <div className="SubText text-lg pt-4">
          <h1>Used to skew objects with live adjustments!</h1>
          <h1>Minimal straight to the point interface</h1>
        </div>

        <button class="btn bg-green text-white font-bold py-3 px-8 mt-5 text-sm">
          Go To Plugin
        </button>

        <div className="Logo flex justify-end bg-contain bg-no-repeat bg-right-bottom p-14 -mt-8 -mr-4" style={{ backgroundImage: `url(${SlantSkew})` }}>
          
        </div>

      </div>
    </div>

  )
}

export default Plug
