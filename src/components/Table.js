import React from "react";
import "../page_style/Table.css";

const Table = ({ tableDataArr }) => {
    // var records = tableDataArr.slice(1);

    const [page, setPage] = React.useState(1);

    function page1() { setPage(1); }
    function page2() { setPage(2); }
    function page3() { setPage(3); }
    function page4() { setPage(4); }
    function page5() { setPage(5); }

    if (page === 1) var recordPage = tableDataArr.slice(1, 9);
    if (page === 2) var recordPage = tableDataArr.slice(9, 17);
    if (page === 3) var recordPage = tableDataArr.slice(17, 25);
    if (page === 4) var recordPage = tableDataArr.slice(25, 31);
    if (page === 5) var recordPage = tableDataArr.slice(31, tableDataArr.length);

    // clicked button active
    let bn = document.querySelectorAll(".btn");
    bn.forEach( bFun1 => {
        bFun1.addEventListener('click', function() {
            bn.forEach( bFun2 => bFun2.classList.remove('active'));
                                 this.classList.add('active');
        })
    })

    return (<div>
        <div id="main-div">
            <br />
            <div className="div-head" id="head"> <br />
                <h5 className="bg-secondary text-light mr">&nbsp; Confirmed &nbsp;</h5>
                <h5 className="bg-secondary text-light mr">&nbsp; Active &nbsp;</h5>
                <h5 className="bg-secondary text-light mr">&nbsp; Recovered &nbsp;</h5>
                <h5 className="bg-secondary text-light mr">&nbsp; Deaths &nbsp; </h5> <br />.
        </div> <hr />
            {
                recordPage.map((value) => {
                    return <div>  <div id="body" className="text-center">
                        <h5 className="text-secondary mr"> {value.state} &nbsp;&nbsp;
                            <span className="text-success">({value.statecode})</span>
                        </h5>
                        <div className="div-ele" >
                            <h5 className="bg-info bg-l mr">&nbsp; {value.confirmed} &nbsp;</h5>
                            <h5 className="bg-warning mr">&nbsp; {value.active} &nbsp;</h5>
                            <h5 className="bg-info mr">&nbsp; {value.recovered} &nbsp;</h5>
                            <h5 className="bg-r bg-warning mr">&nbsp; {value.deaths} &nbsp;</h5>
                        </div>    </div> <br />
                    </div>
                })
            } </div>

        {/* --- Pagination -- */}
        <nav aria-label="Page navigation example fixed-bootom">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <button className="btn active" onClick={page1}> 1 </button>
                </li>
                <li className="page-item">
                    <button className="btn" onClick={page2}> 2 </button>
                </li>
                <li className="page-item">
                    <button className="btn" onClick={page3}> 3 </button>
                </li>
                <li className="page-item">
                    <button className="btn" onClick={page4}> 4 </button>
                </li>
                <li className="page-item">
                    <button className="btn" onClick={page5}> 5 </button>
                </li>
            </ul>
        </nav>
                   <br/>
    </div>);
}

export default Table;

// <h5 className="bg-secondary text-light mr"> &nbsp; State &nbsp;</h5>
//  <div> <h5 className="bg-l">&nbsp;  {value.state} &nbsp;</h5> </div>



