import React from "react";
import bannerImage from "../assets/image/banner.jpg"

const Donor=()=>{
    return(
        <div className="row" style={{marginTop: '20px', marginBottom: '20px'}}>
            <div className="col-sm-6">
                <div className="text-center">
                    <h2 style={{color: 'red',marginBottom: '20px', marginTop: '20px'}}>Become a Donor</h2>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width:"80%"}}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="text-center">
                <button className="btn btn-danger" style={{marginTop:'100px'}}>Join Us</button>
                </div>
            </div>
            <div className="col-sm-6">
                <img src={bannerImage} style={{width: '100%'}}/>
            </div>
        </div>
    )
}

export default Donor;