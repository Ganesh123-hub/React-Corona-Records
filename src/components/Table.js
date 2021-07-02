import React from "react";
import "../page_style/Table.css";

const Table = ({ tableDataArr }) => {
    var records = tableDataArr.slice(1);
    return (<div>
        <div id="main-div">
            <br/>
        <div className="div-head" id="head"> <br/>
            <h5 className="bg-secondary text-light mr"> &nbsp; State &nbsp;</h5>
            <h5 className="bg-secondary text-light mr">&nbsp; Confirmed &nbsp;</h5>
            <h5 className="bg-secondary text-light mr">&nbsp; Active &nbsp;</h5>
            <h5 className="bg-secondary text-light mr">&nbsp; Recovered &nbsp;</h5>
            <h5 className="bg-secondary text-light mr">&nbsp; Deaths &nbsp; </h5> <br/>.
        </div> <hr/>
        {
            records.map((value) => {
                return <div>
                    <div className="div-ele" id="body">
                        <h5 className="bg-l mr">&nbsp;  {value.state} &nbsp;</h5>
                        <h5 className="bg-info mr">&nbsp; {value.confirmed} &nbsp;</h5>
                        <h5 className="bg-warning mr">&nbsp; {value.active} &nbsp;</h5>
                        <h5 className="bg-info mr">&nbsp; {value.recovered} &nbsp;</h5>
                        <h5 className="bg-r bg-warning mr">&nbsp; {value.deaths} &nbsp;</h5>
                    </div> <br/>
                </div>
            })
        } </div>
    </div>);
}

export default Table;

