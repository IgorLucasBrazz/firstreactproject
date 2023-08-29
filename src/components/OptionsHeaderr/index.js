import './style.css'


const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estante']

function OptionsHeader() {
    return (
        <ul className='options'>
            { textoOpcoes.map( (texto) => (
                <li className='option'><p> {texto} </p></li>
            ))}
        </ul>
    )
}

export default OptionsHeader;