
// import DropdownButton from 'antd/es/dropdown/dropdown-button';
import Image from '../images/We Are Open-Campsie RSL.jpg';
import Trans from './trans';

const banner = () => {
  return (
    <div className='banner-container'>
    <img 
    src={Image} 
    className='banner-image'
    title="My Banner Image" 
    alt="My Banner Image" />
    
    {/* <DropdownButton className='dropdown-button' overlayClassName='dropdown-overlay'/> */}
    <Trans/>
    <h1>
    CAMPSIE RSL
    </h1>
    <p>
    PUTTING OUR COMMUNITY FIRST
    </p>
    </div>
  )
}
export default banner