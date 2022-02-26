
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram,faWhatsapp,faTwitter,faLinkedin } from '@fortawesome/fontawesome-free-brands';
import Logo from '../../img/logo_small.png';


const Footer = () => {
    return ( 
        <>
        <div className="text-center text-lg-start bg-light text-muted">
         
        <section
          className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
              
          
                <div>
                    <a href="#!" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faFacebook} className='mr-2' />
                    </a>
                    <a href="#!" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faInstagram} className='mr-2' />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faTwitter} className='mr-2'  />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                    </a>
                    <a href="" className="me-4 text-reset">
                    <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                    <i className="fab fa-github"></i>
                    </a>
                </div>
             </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
                      <div className="row mt-3">
              
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    <img src={Logo}  height='30' />
                </h6>
                <p>
                Autocredito México recibió el reconocimiento de "Mejor Institución Digital en México 2019" en la pasada edición de los premios World Finance Banking Awards.
                </p>
              </div>
              
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                           <h6 className="text-uppercase fw-bold mb-4">
                  Servicios
                </h6>
                <p>
                  <a href="#!" className="text-reset">Seguro para tu auto</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Cotización de autos</a>
                </p>
                <p>
                  <a href="/creditoAutomotriz" className="text-reset">Financiamiento</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Ayuda</a>
                </p>
              </div>
              
      
              
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                           <h6 className="text-uppercase fw-bold mb-4">
                  Contacto
                </h6>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                    clientes@autocredito.com
                </p>
                <p> <FontAwesomeIcon icon={faPhone} className='mr-2' /> 667-99-881-90</p>
                <p> <FontAwesomeIcon icon={faWhatsapp} className='mr-2' /> 667-99-881-91</p>
              </div>
              
            </div>
                    </div>
        </section>
      
        <div className="text-center p-4" >
               2022 AutoCredito México, S.A., Institución de prestamos financieros. Avenida Paseo de la Reforma 510, colonia Centro, código postal 80300, Culiacán, Sinaloa.
        </div>
             </div>
        </>
      );
}
 
export default Footer;