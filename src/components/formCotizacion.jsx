import {Fragment, useState, useEffect} from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ImagenCarro from '../img/redCar.png';
import ImagenCaptura from '../img/Captura.png';
import Mensaje from './error/mensaje';
import Spinner from './spinner/spinner';
import Cards from './cards/cards';
import Opciones from './genericos/opciones';

const DivAlinear = styled.div`
    box-shadow: 7px 7px 15px PowderBlue; 
    margin-right:20rem ;
    margin-left:20rem ;
`;

const DivAlinearCards = styled.div`
    width: 54rem;
    margin-right:20rem ;
    margin-left:20rem ;
    margin-bottom: 24rem;
    margin-top: 4rem;
    
`;

const FormStyle = styled.form`
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
`;

const StyleCenter = styled.div`
    margin: 1rem;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const StyleTable = styled.div`
    text-align: center;
    justify-content: center;
    margin-top: 8rem;
    margin-bottom: 10rem;
`;


const StyleDiv = styled.div`
    font-size: 10px;
    margin-top: 5px;
`

const StyleDivDescripcion = styled.div`
    box-shadow: 7px 7px 15px PowderBlue; 
    height: 18rem;
    
    margin-top: 2rem;
    margin-bottom: 3rem;
    padding: 2rem;
    
`;

const StyleTextoCredito = styled.p`
    font-size: 2rem;
    color: #100AC9;
`;
const StyleTextoSeguro = styled.p`
    font-size: 20px;
    color: #100AC9;
`;
const StyleEncabezado2 = styled.h1`
    font-size: 2rem;
    text-align: center;
    margin: 3rem;
`;

const StyleDivCards = styled.div`
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
`;


const FormCotizacion = () => {

    const [montoTotal, setMontoTotal] = useState(0); 
    const [cotizacion, setCotizacion ] = useState({
        precio: 50000,
        enganche: 50000 * .25
    });
    const [marcas, setMarcas] = useState([]);
    const [modelos, setModelos] = useState([]);

    const [totalMeses, setTotalMeses] = useState([]);

    const [marcaSeleccionada,setMarcaSeleccionada ] = useState([]);
    const [errorPorcentaje, setErrorPorcentaje] = useState(false);
    const [errorMonto, setErrorMonto] = useState(false);
    const [cargando, setCargando] = useState(false);
    //Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarCotizacion= e => {
        setCotizacion({
            ...cotizacion,
            [e.target.name]: e.target.value
        });
    }


    const {enganche,precio} = cotizacion;

    const realizarCotizacion = (e) => {
        e.preventDefault();
        //Se obtienen los valores
        setCargando(true);
        setTimeout(() => {
                
            setCargando(false);
            
        }, 300);
        
        
        
        console.log('Se realizará cotizacion');
        setMontoTotal(precio-enganche);
        const meses =  [60,36,24,12,6];
        const mesesTotales = [];

        meses.map(meses => {
            mesesTotales.push( {meses: meses,total: precio/meses});
        });

        setTotalMeses(mesesTotales);
        
    }

    
    //useEfect

    useEffect(() => {      
        console.log('useefect precio')
        
       setCotizacion({
            ...cotizacion,
           enganche: precio * .159
       })

       obtenerDatos();
        
    },[precio]);
     //useEfect

     useEffect(() => {      
        console.log('useefect enganche')
        if(enganche < precio * .159){
            setErrorPorcentaje(true);
        }else{
            setErrorPorcentaje(false);
        }
         
     },[enganche]);

     useEffect(() => {      
        console.log('useefect precio 2')
        if(precio < 50000){
            setErrorMonto(true);
        }else{
            setErrorMonto(false);
        }
        console.log(totalMeses); 
     },[precio]);
     

    //Obtener las marcas 
    const obtenerDatos = async () =>{
       let url =`http://localhost:4000/api/marca`;;
       let response = await fetch(url);
            
        let resultado = await response.json();
    
        if(response.status === 200){
            setMarcas(resultado);
        }
        
    }
   const actualizarMarca = e =>{
       e.preventDefault();
       setMarcaSeleccionada({
           ...marcaSeleccionada,
           [e.target.name] : e.target.value
        });
   } 
    useEffect(() => {      
          
        if(marcaSeleccionada !== "-1"){
            obtenerDatosModelo();
        }
     },[marcaSeleccionada]);

    //Obtener las marcas 
    const obtenerDatosModelo = async () =>{
        let url =`http://localhost:4000/api/modelo/`;;
        let response = await fetch(url);
            
        let resultado = await response.json();
        

         // console.log(resultadoModelos);
         let nuevoModelos = [];
         resultado.map(modelo => {
             if(modelo.marca === parseInt(marcaSeleccionada.marca)){
                 nuevoModelos.push(modelo);
             }
          });
         
          setModelos(nuevoModelos);

    }
    return ( 
        <Fragment>
            <StyleCenter ><h1>Simulador Crédito Auto </h1> </StyleCenter>
            <StyleDivDescripcion className='background-color-texto d-flex justify-content-between'>
            <div className='mt-3'>
                <h4>Tasas de interés fija anual desde <span className='font-bold'>10.99% anual fija*</span> </h4>
                <ul className='texto'>
                    <li> 1.-Cotiza con una tasa de interés máxima de <span className='font-bold'>15.99%</span> fija anual. </li>
                    <li> 2.-Llena tu solicitud en línea en 10 minutos </li>
                    <li>3.-Si tu solicitud es aprobada, nuestros asesores telefónicos se pondrán en contacto contigo para explicarte tu oferta final y siguientes pasos </li>
                </ul>

            </div>

                <img src={ImagenCaptura}  height='100%' />
            </StyleDivDescripcion>
            <StyleEncabezado2>Realiza tu cotización</StyleEncabezado2>
            <DivAlinear>
                <FormStyle>
                <div className='row'>
                    <div className='col-6'> 
                        <div className="form-group">
                            <label className='font-bold'>Modelo:</label>
                            <select 
                                id="year"
                                name="year"
                                className='custom-select'
                                >
                                <option value="-1">Seleccione la año</option>
                                <option  value="1" >2019</option>
                                <option  value="2">2020</option>
                                <option  value="3">2021</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label  className='font-bold'>Precio:</label>
                            <input
                                type="text" 
                                className='form-control'
                                name='precio'
                                id='precio'
                                value={cotizacion.precio}
                                onChange={actualizarCotizacion}
                                pattern="[0-9]{0,13}"
                                >
                            
                            </input>
                            <StyleDiv className='d-flex justify-content-between'>
                                <p >Minimo $50,000</p>
                                <p > Máximo $500,000</p>
                            </StyleDiv>
                            
                            {
                                errorMonto ? <Mensaje 
                                            mensaje="El monto inicial debe ser mayor a $50,000"
                                            clase="alert alert-danger"
                                        />
                                        :null
                            }
                        </div>
                       
                        <div className='form-group'>    
                            <label  className='font-bold'>Ingrese el enganche</label>
                            <input 
                                type="text" 
                                className='form-control'
                                name='enganche'
                                id='enganche'
                                value={cotizacion.enganche}
                                onChange={actualizarCotizacion}
                                pattern="[0-9]{0,13}"
                                >
                            </input>
                            <StyleDiv className='d-flex justify-content-between'>
                                <p >Enganche inicial minimo 25%</p>
                            </StyleDiv>
                            {
                                errorPorcentaje ? <Mensaje 
                                            mensaje="El enganche debe ser mayor al 25%"
                                            clase="alert alert-danger"
                                        />
                                        :null
                            }
                        </div>
                        <div className="form-group">
                            <label  className='font-bold'>Marca:</label>
                            <select 
                                id="marca"
                                name="marca"
                                className='custom-select'
                                onChange={actualizarMarca}
                                >
                                <option value="-1">Seleccione la marca</option>
                                {marcas.map(marca => 
                                        <Opciones 
                                        key={marca.id}
                                        opciones={marca}
                                    />
                                    )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label  className='font-bold'>Modelo:</label>
                            <select 
                                id="modelo"
                                name="modelo"
                                className='custom-select'
                                >
                                <option value="-1">Seleccione el modelo</option>
                                {modelos.map(modelo => 

                                    <Opciones 
                                        key={modelo.id}
                                        opciones={modelo}
                                    />
                                    )}
                            </select>
                        </div>
                        <button 
                            type="submit"
                            className='btn btn-primary'
                            onClick={realizarCotizacion}
                            >Cotizar</button>
                    </div>
                    <StyleTable className='col-6 '>  
                        <img src={ImagenCarro} width="110" height="100"></img>
                            <StyleTextoCredito >Tu crédito sería de:    </StyleTextoCredito>
                             {
                                 cargando ?  <Spinner /> :
                                    <p className='font-cantidad-credito'>
                                     {new Intl.NumberFormat("ES-MX", {
                                        style: "currency",
                                        currency: "MXN"
                                    }).format(montoTotal)}
                                    </p>
                             }   
                             <StyleTextoSeguro className='mt-5'>* Incluye un seguro por $4,200.00</StyleTextoSeguro>
                    </StyleTable>
                </div>
                </FormStyle>
                
            </DivAlinear>

            
                { totalMeses.length> 0 ? 
                    <DivAlinearCards>
                        <StyleCenter >
                            <h5> ¿Cuánto quieres pagar al mes? </h5>
                        </StyleCenter>
                        
                        <StyleCenter >
                            <p>El pago mensual no incluye IVA ni comisiones</p>
                        </StyleCenter>
                        <StyleDivCards> 
                        <div className="row">
                        { 
                            totalMeses.map(mes => (
                                <Cards
                                key={mes.meses}
                                mes={mes}
                                />
                            ))
                        }
                        </div>
                        
                            
                        </StyleDivCards>
                    
                    </DivAlinearCards>

                    :null
                }
                
            



            
        </Fragment>
     );
}
 
export default FormCotizacion;