const Opciones = ({opciones}) => {
    return (
        <option value={opciones.id}>{opciones.nombre}</option>
      );
}
 
export default Opciones;