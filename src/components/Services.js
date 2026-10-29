import React from "react";
import helpImage from "../assets/image/help.png"

const Services=()=>{
    return(<div className="service_container">
        <div className="text-centre">
            <h2 className="service-title">Our Services</h2>
        </div>
    <div className="row">
        <div className="col-sm-3 text-center service-card">
            <div class="card w-80" style={{marginLeft: '10px'}}>
                <div className="text-centre">
                    <img class="card-img-top" src={helpImage} style={{height: '100px', width: '100px'}} alt="Card image cap" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Service 1</h5>
                </div>
            </div>
        </div>
        <div className="col-sm-3 text-center service-card">
            <div class="card w-80" >
                <div className="text-centre">
                    <img class="card-img-top" src={helpImage} style={{height: '100px', width: '100px'}} alt="Card image cap" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Service 2</h5>
                </div>
            </div>
        </div>
        <div className="col-sm-3 text-center service-card">
            <div class="card w-80" >
                <div className="text-centre">
                    <img class="card-img-top" src={helpImage} style={{height: '100px', width: '100px'}} alt="Card image cap" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Service 3</h5>
                </div>
            </div>
        </div>
        <div className="col-sm-3 text-center service-card">
            <div class="card w-80" style={{marginRight: '10px'}}>
                <div className="text-centre">
                    <img class="card-img-top" src={helpImage} style={{height: '100px', width: '100px'}} alt="Card image cap" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Service 4</h5>
             </div>
            </div>
        </div>
    </div>
    </div>)
}

export default Services;