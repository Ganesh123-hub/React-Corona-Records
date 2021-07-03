import React from "react";
import "../page_style/Card.css";

const Card = ({ curDataArr }) => {
    // console.log(curDataArr[0]);  

    return (<div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3 col-lg-3 text-center record-div">
                    <h5 className="fw-bold my-1"> Confirmed </h5>
                    <i className="fa fa-user-plus"></i> <br/>
                    <h5 className="fw-bolder text-primary co-data">{(curDataArr[0]).confirmed}</h5> 
                </div>
                <div className="col-12 col-sm-6 col-md-3 col-lg-3 text-center record-div">
                    <h5 className="fw-bold my-1"> Active </h5>
                    <i className="fa fa-wheelchair"></i> <br/>
                    <h5 className="fw-bolder text-info co-data">{(curDataArr[0]).active}</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-3 col-lg-3 text-center record-div">
                    <h5 className="fw-bold my-1"> Recovered </h5>
                    <i className="fa fa-thumbs-up"></i> <br/>
                    <h5 className="fw-bolder text-success co-data">{(curDataArr[0]).recovered}</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-3 col-lg-3 text-center record-div">
                    <h5 className="fw-bold my-1"> Death </h5>
                    <i className="fa fa-user-times"></i><br/>
                    <h5 className="fw-bolder text-danger co-data">{(curDataArr[0]).deaths}</h5>
                </div>
            </div>
        </div>

    </div>);
}
export default Card;


