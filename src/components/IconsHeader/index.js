import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import './style.css'

const icons = [perfil, sacola]

function IconsHeader(){
    return(
        <ul className='icons'>
            {icons.map( (icon) => (
              <li className='icon'><img src={icon}></img></li>
            ))}
        </ul>
    )
}

export default IconsHeader