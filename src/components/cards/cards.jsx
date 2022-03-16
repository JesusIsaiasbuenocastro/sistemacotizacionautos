import { useNavigate } from "react-router-dom";

const Cards = ({mes}) => {
    const navigate = useNavigate();
    console.log(mes);

    const mostarModal = (e) =>{
        e.preventDefault();
        console.log('Entro al onclick');
        console.log(mes.meses);

        navigate(`/amortizacion/${mes.meses}/${mes.meses*mes.total-4200}` );
    }
    return ( 
        <div className="col mt-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{mes.meses} Meses</h5>
                    <p className="card-text">
                        {new Intl.NumberFormat("ES-MX", {
                            style: "currency",
                            currency: "MXN"
                        }).format(mes.total)
                        } MXN</p>
                    <div className="col-sm-6">
                        <button onClick={mostarModal} className="btn btn-primary btn-padding">Ver Amortización</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cards;

