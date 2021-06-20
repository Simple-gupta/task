import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ImageSlider from './Components/ImageSlider';
import Scroll from './Components/Scroll'
import { SliderData } from './Components/SliderData';
import './App.css'

function App() {
  return (
    <div className="divv">
      <div className="heading">
        <h4 className='text-danger text-capitalize'>our menu</h4>
        <h1 className='text-capitalize text-dark'>menu that always <br /> make you fall in love</h1>
      </div>

      <div className="main_div">
        <Scroll />
        <ImageSlider slides={SliderData} />
      </div>

    </div>
  )
}

export default App;
