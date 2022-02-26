import ImagenAgent from '../../img/woman-agent.jpg';
import ImagenDesk from '../../img/desk-1.jpg';
import ImagenOffice from '../../img/office-2.jpg';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const StyledTextoCarrousel = styled.div`

    text-align: left;
    color: black;
    margin-left 7rem;
    
`
const StyledTextoCarrousel2 = styled.div`

    margin-top: 15rem;
    text-align: center;
    color: black;
    margin-left 7rem;
    height : 25rem;
    margin-left: 25rem;

`
    

const StyleTexto = styled.div`
    width: 5rem;
`;

const Carrousel = () => {
    return ( 
        <div id="carrousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carrousel" data-slide-to="0" class="active"></li>
            <li data-target="#carrousel" data-slide-to="1"></li>
            <li data-target="#carrousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div className='row'>
                    <div className='col'>  
                        <img src={ImagenAgent} class="d-block w-100" alt="..." />
                        <div class="carousel-caption size-font-resaltar ">
                            <StyledTextoCarrousel>
                                <h1>Conoce nuestros beneficios:</h1>                            
                                <div className='row mt-5'>
                                    <ul className='texto' >
                                        <li>
                                            <p className='size-font-p-encabezado'> <FontAwesomeIcon icon={faCheck}  className='mr-2 '/> Da de alta una cuenta y transfiere tu pago en menos de 2 minutos </p> 
                                        </li>
                                        <li>
                                            <p className='size-font-p-encabezado'> <FontAwesomeIcon icon={faCheck}  className='mr-2 '/> Obten tu prestamo fácil en cualquiera de nuestras sucursales</p> 
                                        

                                        </li>
                                    </ul>
                                    <div className='container'>
                                        <div className='row mt-5'>
                                            <p className='size-font-p-encabezado'>Puedes domiciliar tu pago desde tu cuenta de banco.</p>
                                            
                                        </div>
                                        <div className='row  font-bold'>
                                                <p className='size-font-p-encabezado'>¡Te enseñamos cómo!</p>
                                        </div>
                                    </div>
                                </div>
                            </StyledTextoCarrousel>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src={ImagenDesk} class="d-block w-100" alt="..." />
                <div class="carousel-caption size-font-resaltar ">
                    
                    <StyledTextoCarrousel2 className='h-5'>
                        <h5>Conoce nuestros beneficios</h5>
                        <p>Conoce y disfruta los beneficios de la financiación y servicios que ponemos a tu disposición.</p>
                    </StyledTextoCarrousel2>
                    
                </div>
            </div>
            <div class="carousel-item">
                <img src={ImagenOffice} class="d-block w-100" alt="..." />
                <div class="carousel-caption size-font-resaltar ">
                    
                    <StyledTextoCarrousel className='h-5'>
                        <p>Conoce nuestro sitio de Educación Financiera, donde encontrarás notas, talleres y webinars que tenemos para ti, sin costo.</p>
                    </StyledTextoCarrousel>
                    
                </div>

                
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carrousel" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carrousel" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
        </div>
     );
}
 
export default Carrousel;