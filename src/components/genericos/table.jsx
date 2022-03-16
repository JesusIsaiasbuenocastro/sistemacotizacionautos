

const Table = ({item}) => {
    return (  

        <tr >
        <td >{item.mes}</td>
        <td >{
                new Intl.NumberFormat("ES-MX", {
                    style: "currency",
                    currency: "MXN"
                }).format(item.saldoInsoluto)
                }</td>
        <td >{
                
                new Intl.NumberFormat("ES-MX", {
                    style: "currency",
                    currency: "MXN"
                }).format(item.pagoMensual)
        }</td>
        <td >{
                
                new Intl.NumberFormat("ES-MX", {
                    style: "currency",
                    currency: "MXN"
                }).format(item.interesPorAmortizacion)
        }</td>
        <td >{
                
                new Intl.NumberFormat("ES-MX", {
                    style: "currency",
                    currency: "MXN"
                }).format(item.totalPagar)
        }</td>
    </tr>
    );
}
 
export default Table;