import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div className="footer">
      <footer className="w-100 py-4 flex-shrink-0 bg-dark">
        <div className="container py-4">
            <div className="row gy-4 gx-5 text-light">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 ">MED-ON-CHAIN</h5>
                    <p className="small text-muted">TEAM MED-ON-CHAIN, <br/> Information Technology, GCE Karad. 
                    <br/>
                    Implementation of Blockchain and Peer-to-Peer
                    Network for Digital Management of Reacords in Medical Field.</p>
                    <p className="small text-muted mb-0">&copy; THANK YOU</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="h1 ">Quick links</h5>
                    <ul className="small text-muted"><h6>
                        <li className="small text-muted"><a href="https://github.com/nishant219/WCE-Code_Clan" className="link-light"  target="_blank" rel="noreferrer">Github</a></li>
                        <br></br>        
                        </h6>      
                    </ul>
                </div>
                {/* <div className="col-lg-5 col-md-6">
                    <h5 className="h1 text-dark">Newsletter</h5>
                    <p className="small text-muted">Sign up to receive updates, news and informations from us!</p>
                      <form action="#">
                          <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Recipient's email" aria-label="Recipient's email" aria-describedby="button-addon2" />
                            <button className="btn btn-primary" id="button-addon2" type="button">Submit</button>
                          </div>
                      </form>
                  </div> */}
              </div>
          </div>
      </footer>
    </div>
  );
}

export default Footer;