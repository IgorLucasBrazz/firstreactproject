import './style.css'
import logo from '../../images/logo.svg'


function Logo() {
    return(
        <div className='logo'>
          <img src={logo} alt='logo' className='logoimage'></img>
          <p> <strong>BOOKS</strong> </p>
        </div>
    )
}

export default Logo;