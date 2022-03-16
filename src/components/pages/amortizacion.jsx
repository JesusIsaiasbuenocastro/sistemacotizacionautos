import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from 'styled-components';

import Table from "../genericos/table";

const StyleDiv = styled.div`
    width: 10;
    margin-right:10rem;
    margin-left:10rem;
    margin-top: 4rem;
`;
const StyleTable = styled.table`
    
    font-size: .8rem;
    border-radius: 20px;
    width: 90rem;
    box-shadow: 7px 7px 15px PowderBlue; 
    margin-top: 1rem;
    text-align: center;


`;

const Amortizacion = () => {
    let { meses,total } = useParams();
    const [amortizacion, setAmortizacion] = useState([]);
    const [totalConIntereses, setTotalConIntereses] = useState(0);

    useEffect(()=>{
        const getCotizacion = async() =>{
            try {
                let request;
                const cotizacion = {meses: meses, precio: Number(total) }
                request = await fetch('http://localhost:4000/api/cotizacion',{
                    method: 'PUT',
                    body: JSON.stringify (cotizacion),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        
                const resultado = await request.json();
                
                setTotalConIntereses(resultado.totalCredito);
                setAmortizacion(resultado.amortizacion);
            } catch (error) {
                console.log(error);
            }
        }
        
        getCotizacion();
        

       
    },[])

    return (
        <>
            <div className="centrar">
                <h1>
                    Tabla de Amortización Crédito Automotriz
                </h1>
            </div>
            <StyleDiv className="centrar">

            
                <div className="row">
                    <div className="col">
                        <label className="font-bold m-2">Crédito: </label>
                        <label>{new Intl.NumberFormat("ES-MX", {
                                    style: "currency",
                                    currency: "MXN"
                                }).format(total)}</label>
                    </div>
                    <div className="col">
                        <label className="font-bold m-2">Plazo: </label>
                        <label>{meses}</label>
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <label className="font-bold m-2">Monto total a pagar: </label>
                        <label>{
                        new Intl.NumberFormat("ES-MX", {
                            style: "currency",
                            currency: "MXN"
                        }).format(totalConIntereses)}</label>
                    </div>
                    <div className="col">
                        <label className="font-bold m-2">Fecha simulación: </label>
                        <label>{new Date().toLocaleString()}</label>
                    </div>

                </div>
            </StyleDiv>

            <StyleTable className="container table table-borderless table-hover ">
       
                <thead height="10" >
                    <tr>
                        <th>Mes</th>
                        <th>Saldo Insoluto</th>
                        <th>Pago Mensual</th>
                        <th>Interés en el perido</th>
                        <th>Total a pagar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        amortizacion.map( item => (
                            <Table 
                                key={item.mes}
                                item={item}
                            />
                        ))
                    }
                </tbody>
                <tfoot className="font-bold">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total:</td>
                        <td>
                            {
                                new Intl.NumberFormat("ES-MX", {
                                style: "currency",
                                currency: "MXN"
                                    }).format(totalConIntereses)}
                            </td>
                    </tr>
                </tfoot>
            </StyleTable>
            <div className="m-5 p-2 back-ground-color-grey  font-grey">
                <p>
                    <span className="font-bold size-font-p-encabezado">CAT 19.6% Sin IVA.</span> Informativo. Fecha de cálculo al 01 de enero de 2022 . Vigencia de la oferta al 15 de diciembre de 2022 .
                </p>
                <p>
                    Simulación realizada con la tasa máxima de interés fija del <span className="font-bold size-font-p-encabezado" >15.99% anual.</span>  Si tu precalificación es exitosa, uno de nuestros asesores se pondrá en contacto contigo para explicarte las ofertas disponibles para ti.
                </p>
                    <p>
                    * El otorgamiento de la tasa de interés final estará sujeta a validación de historial crediticio, aprobación de crédito, capacidad de pago, perfil del cliente, enganche a pagar en la agencia automotriz y la marca de vehículo seleccionado.
                    </p>
                    <p>

                   Contratación en moneda nacional, aplican restricciones. Auto Crédito, S.A. Institución de Banca Múltiple, Grupo Financiero México. Paseo de la Reforma N. 510, col. Juárez, Culiacán Sinaloa,  C.P. 80000.
                </p>

            </div>
            
        </>
        
    );
}
 
export default Amortizacion;

