import styled from 'styled-components';
import Logo from '../../img/logo_small.png';

const StyleDivEncabezado = styled.div`
    padding: 2rem 0;

    box-shadow: 10px 10px 15px PowderBlue; 
    border: 1px;
`;
const StyleImgLogo = styled.img`
    text-align: rigth;
    padding: 20px;
    
`;


const Header = () => {
return ( 
    <StyleDivEncabezado>
        <StyleImgLogo src={Logo} width="300" />
    </StyleDivEncabezado> 
 );
}

export default Header;