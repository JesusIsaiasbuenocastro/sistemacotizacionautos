
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock ,faCalendarDays, faCreditCard, faFileArchive, faUserCheck, faUsers , faCodeCommit} from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';
import ImagenAutoMuestra from '../../img/auto-muestra.jpg';

const StyleDiv = styled.div`
  
    color: white;
    margin-top: 4rem;
    padding: 5rem;
    padding-bottom: 4rem;
    background: linear-gradient(to bottom, #140C4F,#2514A5 , #140C4F);
`;

const StyleMargin = styled.div`
    margin-top: 3rem;
`;

const StyleColorFont = styled.p`
    color: #8E8DA0;
    font-size: 1.5rem;
`
const StyleDiv2 = styled.div`
  
    margin-top: 4rem;
    padding: 2rem;

`;

const StyleAnimacion = styled.div`
animation: fadeIn ease 2s;
@keyframes fadeIn{
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
`;

const StylePueba = styled.div`
  background-color : #8E8DA0;
`

const CreditoAutomotriz = () => {
    return (
        <Fragment>
            <StyleAnimacion >
                <img src={ImagenAutoMuestra} width='100%' />
            </StyleAnimacion>
            <div className="row m-0">
                <div className="col">
                    <StyleDiv>
                    <h1>¡Estrena así de fácil!</h1>
                        <div className='size-font-resaltar pt-5'>
                            <p className='m-6 size-font-p-encabezado'>
                            Simula tu crédito automotriz y obtén el financiamiento para adquirir un auto propio.
                            </p>
                        </div>
                        <div className='pt-5'>
                            <p className='size-font-p m-6'>Consulta aquí información sobre el CAT.</p> 
                        </div>
                    </StyleDiv>

                </div>
                <div className="col">
                    <div className='row '>
                        <StyleMargin> <h1>Estos son los beneficios de tu crédito auto:</h1></StyleMargin>
                        <div className='col pt-3' >
                            <StyleColorFont> <FontAwesomeIcon icon={faClock} className='mr-1' /> Obtén respuesta a tu solicitud en una hora</StyleColorFont>
                        </div>
                        <div className='col'>
                            <StyleColorFont > <FontAwesomeIcon icon={faCreditCard} className='mr-1' /> Pagos fijos durante el plazo del crédito</StyleColorFont>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col pt-3'>
                            <StyleColorFont >  <FontAwesomeIcon icon={faCalendarDays} className='mr-1' />  Elige entre plazos de 12 a 60 meses</StyleColorFont>
                        </div>
                        <div className='col pt-3'>
                            <StyleColorFont ><FontAwesomeIcon icon={faFileArchive} className='mr-1'/> Requieres mínima documentación</StyleColorFont>
                        </div>
                    </div>
                    
                    <div className='row mt-3'>
                        <div className='col pt-3'>
                            <StyleColorFont> <FontAwesomeIcon icon={faUserCheck} className='mr-1' /> No necesitas ser cliente</StyleColorFont>
                        </div>
                        <div className='col pt-3'>
                            <StyleColorFont> <FontAwesomeIcon icon={faUsers} className='mr-1' /> Asesoría en la compra</StyleColorFont>
                        </div>
                    </div>
                    
                </div>
                
            </div>
                <div className='text-center margin-text-5 p-2'>
                    <h1>Beneficios a nuestros clientes</h1>
                </div>
            <div className='row mt-5 '>
                <div className='col'>
                    <StyleDiv2 className='size-font-resaltar'>
                        <p>¿Qué beneficios te ofrece?</p> 
                        <p className='size-font-p'>Conoce a detalle los beneficios de este crédito.</p>
                    </StyleDiv2>
                </div>

                <div className='col back-ground-color-grey'>
                    <div className='row'>
                        <div className='row m-3' >
                            <p className='font-bold'> <FontAwesomeIcon icon={faCodeCommit} className='mr-2' /> TASA DE INTERÉS FIJA ANUAL (SIN IVA)</p>
                        </div>
                        <div className='row m-3' >
                            <p>Sin aumentos en tu mensualidad</p>
                        </div>
                        <div className='row m-3'>
                            <p>La tasa de interés anual es fija durante el plazo del crédito. Tasa máxima, puede mejorar de acuerdo a las condiciones del financiamiento y al plan de financiamiento seleccionado.</p>
                        </div>
                        <div className='row m-3'>
                            <p><span className='font-bold size-font-p-encabezado'>16.99% </span> Honda Finance/Acura Finance</p>
                        </div>
                        <div className='row m-3'>
                            <p> <span className='font-bold size-font-p-encabezado'>18.99% </span>Consumer Finance</p>
                        </div>
                        <div className='row m-3'>
                            <p> <span className='font-bold size-font-p-encabezado'>17.99%</span> Suki Credit</p>
                        </div>
                    </div>
                </div>
                <div className='col-3 back-ground-color-grey'>
                    <div className='row'>
                        <div className='row m-3' >
                            <p className='font-bold'> <FontAwesomeIcon icon={faCodeCommit} className='mr-2' /> PAGOS ANTICIPADOS</p>
                        </div>
                        <div className='row m-3' >
                            <p>Sin penalización</p>
                        </div>
                        <div className='row m-3' >
                            <p>Decide cómo administrar tu crédito al anticipar tus pagos. Te ofrecemos flexibilidad para reducir tu pago mensual.</p>
                        </div>
                        <div className='row m-3' >
                            <p className='font-bold'> <FontAwesomeIcon icon={faCodeCommit} className='mr-2' /> PROMOCIONES</p>
                        </div>
                        <div className='row m-3' >
                            <p>Para consultar los términos y condiciones de promociones vigentes, busca al ejecutivo en la agencia automotriz que prefieras.</p>
                        </div>
                    </div>
                </div>
				
            </div>
            <div className='row  m-5'>
                <div className='col text-center font-bold size-font-p-encabezado'>
                    <p>¿Quieres saber cuánto pagarías por mes? Simula tu crédito y precalifica para tu crédito.</p>
                </div>
                <div className='row text-justify margin-text '>
                    <p >
                        Para continuar con el proceso digital es importante que ingreses tu correo electrónico para recibir respuesta a tu solicitud.  También es necesario que indiques tu número de teléfono celular para que, en caso de que tu solicitud haya sido aprobada, un ejecutivo pueda contactarte para continuar con el proceso de contratación.
                    </p>
                </div>
            </div>
            <div className='row'>    
               <div className='col  '>
                   <div className='centrar'>
                        <a className='btn btn-padding btn-primary' href='/formCotizacion'>Simular</a>
                   </div>
                </div>
            </div>
        </Fragment>
      );
}
 
export default CreditoAutomotriz;