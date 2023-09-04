import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Options = styled.ul`
    display: flex;  
`
const Option = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`


const textoOpcoes = ['Categorias', 'Favorites', 'Estante']

function OptionsHeader() {
    return (
        <Options>
            { textoOpcoes.map( (texto) => (
                <Link to={`/${texto.toLowerCase()}`}> <Option><p> {texto} </p></Option> </Link>
            ))}
        </Options>
    )
}

export default OptionsHeader;
