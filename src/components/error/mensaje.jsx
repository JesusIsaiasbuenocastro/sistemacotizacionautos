

const Mensaje = (props) => {
    console.log(props)
    
    return ( 
        
        <div className={props.clase} role="alert">
           {props.mensaje}
        </div>
     );
}
 
export default Mensaje;