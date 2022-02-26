const Cards = ({mes}) => {
    console.log(mes);
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
                        <button href="#" className="btn btn-primary btn-padding">Ver Amortización</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cards;

