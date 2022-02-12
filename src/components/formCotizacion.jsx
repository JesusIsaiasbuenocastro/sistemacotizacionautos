import {Fragment, useState, useEffect} from 'react';
import styled from 'styled-components';
import ImagenCarro from '../img/redCar.png';
import Mensaje from './error/mensaje';
import Spinner from './spinner/spinner';

const DivAlinear = styled.div`
    background-color: #DEFBFC;
    box-shadow: 7px 7px 15px PowderBlue; 
    margin-right:20rem ;
    margin-left:20rem ;
    
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
const FormCotizacion = () => {

    const [montoTotal, setMontoTotal] = useState(0); 
    const [cotizacion, setCotizacion ] = useState({
        precio: 50000,
        enganche: 50000 * .25
    });
    const [marcas, setMarcas] = useState([]);
    const [modelos, setModelos] = useState([]);

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
    }

    
    //useEfect

    useEffect(() => {      
          
       console.log(precio)
       setCotizacion({
            ...cotizacion,
           enganche: precio * .159
       })

       obtenerDatos();
        
    },[precio]);
     //useEfect

     useEffect(() => {      
          
        if(enganche < precio * .159){
            setErrorPorcentaje(true);
        }else{
            setErrorPorcentaje(false);
        }
         
     },[enganche]);

     useEffect(() => {      
          
        if(precio < 50000){
            setErrorMonto(true);
        }else{
            setErrorMonto(false);
        }
         
     },[precio]);
     

    //Obtener las marcas 
    const obtenerDatos = async () =>{
       let url =`http://localhost:4000/api/marca`;;
       let response = await fetch(url);
            
        let resultado = await response.json();
    
        if(response.status === 200){
            setMarcas(resultado);
        }
        console.log(modelos);
        
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

        console.log(modelos);
        
    }
    return ( 
        <Fragment>
            <StyleCenter ><h1>Simulador Crédito Auto </h1> </StyleCenter>
            <DivAlinear>
                <FormStyle>
                <div className='row'>
                    <div className='col-6'> 
                        <div className="form-group">
                            <label>Modelo:</label>
                            <select 
                                id="marca"
                                name="marca"
                                className='custom-select'
                                >
                                <option value="-1">Seleccione la año</option>
                                <option  value="1" >2019</option>
                                <option  value="2">2020</option>
                                <option  value="3">2021</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label>Precio:</label>
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
                            <label>Ingrese el enganche</label>
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
                            <label>Marca:</label>
                            <select 
                                id="marca"
                                name="marca"
                                className='custom-select'
                                onChange={actualizarMarca}
                                >
                                <option value="-1">Seleccione la marca</option>
                                {marcas.map(marca => 
                                    (<option value={marca.id}>{marca.nombre}</option>)
                                    )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Modelo:</label>
                            <select 
                                id="modelo"
                                name="modelo"
                                className='custom-select'
                                >
                                <option value="-1">Seleccione el modelo</option>
                                {modelos.map(modelo => 
                                    (<option value={modelo.id}>{modelo.nombre}</option>)
                                    )}
                            </select>
                        </div>
                        <button 
                            type="submit"
                            className='btn btn-primary'
                            onClick={realizarCotizacion}
                            >Cotizar</button>
                    </div>
                    <StyleTable className='col-6'>  
                        <img src={ImagenCarro} width="110" height="100"></img>
                             {
                                 cargando ?  <Spinner /> : <p>El moto total a pagar es de   
                                     {new Intl.NumberFormat("ES-MX", {
                                        style: "currency",
                                        currency: "MXN"
                                    }).format(montoTotal)}
                                    </p>
                             }           
                           
                            
                    </StyleTable>
                </div>
                </FormStyle>
            </DivAlinear>
        </Fragment>
     );
}
 
export default FormCotizacion;