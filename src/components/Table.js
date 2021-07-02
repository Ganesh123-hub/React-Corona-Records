import React from "react";
import "../page_style/Table.css";

const Table = ({ tableDataArr }) => {
    var records = tableDataArr.slice(1);
    return (<div>
        <br /> <div id="main-div">
            <br/>
        <div className="div-head">
            <h5 className="bg"> &nbsp; Sate</h5>
            <h5>Confirmed</h5>
            <h5>Active</h5>
            <h5>Recovered</h5>
            <h5>Deaths &nbsp; </h5>
        </div> <hr/>
        {
            records.map((value) => {
                return <div>
                    <div className="div-ele border">
                        <h5 className="bg"> &nbsp; {value.state}</h5>
                        <h5>{value.confirmed}</h5>
                        <h5>{value.active}</h5>
                        <h5>{value.recovered}</h5>
                        <h5>{value.deaths} &nbsp; </h5>
                    </div> <br/>
                </div>
            })
        } </div>
    </div>);
}

export default Table;

