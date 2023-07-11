import './App.css'
import {Navbar, Figma, Plug, Clay} from './components';

function App() {

  return (
    <>
      <div>
      <div className="FullScreen">
        <Navbar />
        <Figma/>
      </div>
      <Plug/>
      <Clay/>
      </div>
    </>
  )
}

export default App
