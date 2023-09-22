import DropdownButton from './DropDownButton';
import Image from '../images/We Are Open-Campsie RSL.jpg';

const banner = () => {
  return (
    <div className='banner-container'>
    <img 
    src={Image} 
    className='banner-image'
    title="My Banner Image" 
    alt="My Banner Image" />
    
    <h1>
    CAMPSIE RSL
    </h1>
    <DropdownButton className='dropdown'/>
    <p>
    PUTTING OUR COMMUNITY FIRST
    </p>
    </div>
  )
}
export default banner