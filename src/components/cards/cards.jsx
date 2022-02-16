const Cards = ({mes}) => {
    return ( 
        <div className="col-sm-4 mt-3">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{mes.meses} Meses</h5>
                <p className="card-text">
                    {new Intl.NumberFormat("ES-MX", {
                        style: "currency",
                        currency: "MXN"
                    }).format(mes.total)
                    
                    } MXN</p>
                <a href="#" className="btn btn-primary">Ver Amortización</a>
            </div>
            </div>
        </div>
     );
}
 
export default Cards;

