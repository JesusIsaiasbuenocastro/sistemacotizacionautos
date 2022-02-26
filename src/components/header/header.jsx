import styled from 'styled-components';
import Logo from '../../img/logo_small.png';

const StyleDivEncabezado = styled.div`
    padding-top: 2rem;
    box-shadow: 0 4px 2px -2px PowderBlue; 
    heigth: 15rem;
`;
const StyleImgLogo = styled.img`
    text-align: rigth;
    padding: 20px;
    
`;


const Header = () => {
return ( 
    <StyleDivEncabezado>

        <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="/">
            <img  src={Logo} width="300"  class="d-inline-block align-top" alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/creditoAutomotriz">Credito Automotriz<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/formCotizacion">Simulador de crédito</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                Dropdown link
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            </ul>
        </div>
        </nav>

    </StyleDivEncabezado> 
 );
}

export default Header;