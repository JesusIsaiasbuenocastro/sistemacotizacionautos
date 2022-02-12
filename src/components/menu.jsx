import  '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook,faCalendar,faClipboardList} from '@fortawesome/free-solid-svg-icons'; 
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const Form = styled.form`
    margin-top:15rem;
    margin: 10rem;
    display:flex;
    align-items: center;
    justify-content: center;
    height: 15rem;
    background-color: #DEFBFC;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
`;

const StyleButton = styled.button`
    box-shadow: 7px 7px 15px #0BCBEB; 
    height: 4rem;
`;

const StyleTexto = styled.p`
    font-size: 7px;
`;

const Menu = () => {
    const navigate = useNavigate();
    const redirigir = (e) => {
        e.preventDefault();
        navigate('/formCotizacion');
    }

    return ( 
            <Form>
                <div className='col-2'>
                    <StyleButton
                    className='btn btn-primary  d-block mx-auto'
                    name='btnCotizacion'
                    onClick={redirigir}
                    >
                        Cotizar 
                    <FontAwesomeIcon icon={faClipboardList} className= 'ml-2' />
                    </StyleButton>
                    </div>
                    <div className='col-2'>
                    <StyleButton
                    className='btn btn-primary  d-block mx-auto'
                    name='btnCotizacion'>
                        Clientes
                    <FontAwesomeIcon icon={faCalendar} className= 'ml-2' />
                    </StyleButton>
                    </div>
            </Form>
     );
}
 
export default Menu;
