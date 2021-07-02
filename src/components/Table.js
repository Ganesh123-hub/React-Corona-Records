import React from "react";
import "../page_style/Table.css";

const Table = ({ tableDataArr }) => {
    var records = tableDataArr.slice(1);
    return (<div>
        <div id="main-div">
            <br/>
        <div className="div-head" id="head"> <br/>
            <h5 className="bg-light"> Sate</h5>
            <h5 className="bg-info">Confirmed</h5>
            <h5 className="bg-warning">Active</h5>
            <h5 className="bg-info">Recovered</h5>
            <h5 className="bg-warning">Deaths &nbsp; </h5> <br/>.
        </div> <hr/>
        {
            records.map((value) => {
                return <div>
                    <div className="div-ele" id="body">
                        <h5 className="bg-l"> {value.state}</h5>
                        <h5 className="bg-info">{value.confirmed}</h5>
                        <h5 className="bg-warning">{value.active}</h5>
                        <h5 className="bg-info">{value.recovered}</h5>
                        <h5 className="bg-r bg-warning">{value.deaths}  </h5>
                    </div> <br/>
                </div>
            })
        } </div>
    </div>);
}

export default Table;

