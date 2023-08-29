import Logo from '../Logo';
import OptionsHeader from '../OptionsHeaderr';
import IconsHeader from '../IconsHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header(){
    return (
        <HeaderContainer>
            <Logo></Logo>
            <OptionsHeader></OptionsHeader>
            <IconsHeader></IconsHeader>
      </HeaderContainer>
    )
}

export default Header;