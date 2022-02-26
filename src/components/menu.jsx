import  '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook,faChalkboard,faClipboardList} from '@fortawesome/free-solid-svg-icons'; 
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Carrousel from './carrousel/carrousel';

const StyleDiv = styled.div`
    margin-top:15rem;
    margin: 5rem;
    height: 15rem;
    font-weight: bold;
    height: 15rem;
`;
const StyleDivHeader = styled.div`
    margin-top:5rem;
    text-align: center;
    height: 15rem;
    background-color: #DEFBFC;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;


`;


const Menu = () => {
    const navigate = useNavigate();
    const redirigir = (e) => {
        e.preventDefault();
        navigate('/formCotizacion');
    }
    const redirigirConoceMas = (e) => {
        e.preventDefault();
        navigate('/creditoAutomotriz');
    }

    return ( 

        <>
            <Carrousel></Carrousel>
            <StyleDivHeader >
                <div className='row general-padding'>
                    <div className='col'>
                        <h1> Un vehículo para tu estilo de vida</h1>
                    </div>
                </div>

                <div className='row'>
                    <div className='col '>
                        Tu auto o moto siempre seguros
                    </div>
                </div>
            </StyleDivHeader>
            
            <StyleDiv>
                <div className='row'>
                    <div className='col'>
                        <div className='background-color-texto font-bold centrar'>
                            <div className='row'>
                                <div className='col'>
                                    <h1> Realizar una cotización </h1>
                                </div>
                            </div>
                            <div className='row '>
                                <div className='col p-4'>
                                    <button
                                        className='btn btn-primary p-4'
                                        name='btnCotizacion'
                                        onClick={redirigir}
                                        >
                                        Cotizar 
                                        <FontAwesomeIcon icon={faClipboardList} className= 'ml-2' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className=' centrar'>
                            <div className='row'>
                                <div className='col'>
                                    <h3> ¡Obtén el auto de tus sueños en 4 pasos!</h3>
                                </div>
                            </div>
                            <div className='row '>
                                <div className='col p-4'>
                                    <a
                                        className='btn btn-primary p-4'
                                        name='btnCotizacion'
                                        href='/creditoAutomotriz'
                                        >
                                        Conoce más 
                                        <FontAwesomeIcon icon={faChalkboard} className= 'ml-2' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StyleDiv>
            
        </>
     );
}
 
export default Menu;
