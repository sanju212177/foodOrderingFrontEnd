import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  

export default function Footer(){
    return(
        <footer style={{padding:"5rem 0", backgroundColor: "#212529", color: "#fff"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row ">
                            <div className="col-6 col-lg-3 text-center" >
                                <h2 className="ps-3">Company</h2>
                                <ul>
                                    <li style={{ listStyle:"none",fontSize:"1rem",fontWeight:"lighter",color:"#fff",cursor:"pointer"  }}>
                                        <a href="" style={{textDecoration:"none", color:"#fff",}}>About Us</a>
                                    </li>
                                    <li style={{ listStyle:"none",fontSize:"1rem",fontWeight:"lighter",color:"#fff",cursor:"pointer"  }}>
                                        <a href="" style={{textDecoration:"none" , color:"#fff"}}>Team</a>
                                    </li>
                                    <li style={{ listStyle:"none",fontSize:"1rem",fontWeight:"lighter",color:"#fff",cursor:"pointer"  }}>
                                        <a href="" style={{textDecoration:"none", color:"#fff"}}>Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3 text-center" >
                                <h2 className="ps-3">Service</h2>
                                <ul>
                                    <li style={{ listStyle:"none",fontSize:"1rem",fontWeight:"lighter",color:"#fff",cursor:"pointer"  }}>
                                        <a href="" style={{textDecoration:"none", color:"#fff",}}>Home Delivery</a>
                                    </li>
                                    <li style={{ listStyle:"none",fontSize:"1rem",fontWeight:"lighter",color:"#fff",cursor:"pointer"  }}>
                                        <a href="" style={{textDecoration:"none" , color:"#fff"}}>Quick Support</a>
                                    </li>
                                    <li style={{ listStyle:"none",fontSize:"1rem",fontWeight:"lighter",color:"#fff",cursor:"pointer"  }}>
                                        <a href="" style={{textDecoration:"none", color:"#fff"}}>Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3 text-center">
                                <h2 className="ps-3">Legal</h2>
                                <ul>
                                    <li style={{ listStyle:"none",fontSize:"1rem",fontWeight:"lighter",color:"#fff",cursor:"pointer"  }}>
                                        <a href="" style={{textDecoration:"none", color:"#fff"}}>Terms & Conditions</a>
                                    </li>
                                    <li style={{ listStyle:"none",fontSize:"1rem",fontWeight:"lighter",color:"#fff",cursor:"pointer"  }}>
                                        <a href="" style={{textDecoration:"none", color:"#fff"}}>Offer Terms</a>
                                    </li>
                                    <li style={{ listStyle:"none",fontSize:"1rem",fontWeight:"lighter",color:"#fff",cursor:"pointer"  }}>
                                        <a href="" style={{textDecoration:"none", color:"#fff"}}>Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3 text-center">
                                <h2 className="ps-3">Follow Us</h2>
                                <div className="row">
                                    <div className="col-3 mx-auto">
                                        <a href="" className="youtube" style={{color: "#eb3223"}}>
                                        <FontAwesomeIcon icon={faYoutube} size="2x" />                                           
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="" className="facebook" style={{color: "#4968ad"}}>
                                        <FontAwesomeIcon icon={faFacebook} size="2x" />         
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="" className="twitter" style={{color: "#49a1eb"}}>
                                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="" className="instagram" style={{color: "pink"}}>
                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                                    <hr />
                                    <div className="mt-5">
                                        <p className="main-hero-para text-center w-100 m-0" >Copyright @{new Date().getFullYear()} FoodCart. All right reserved.</p>
                                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}