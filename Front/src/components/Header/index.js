import Logo from '../Logo';
import OptionsHeader from '../OptionsHeaderr';
import IconsHeader from '../IconsHeader';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header(){
    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo></Logo>            
            </Link>
            <OptionsHeader></OptionsHeader>
            <IconsHeader></IconsHeader>
      </HeaderContainer>
    )
}

export default Header;