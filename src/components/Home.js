import React from "react";
import "../page_style/Home.css";
import Card from "./Card";
import Table from "./Table";
import { api } from "./API";



const Home = () => {

  var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  let today = new Date();
  let date = today.getDate() + "/"
    + (today.getMonth() + 1) + "/"
    + today.getUTCFullYear() + " , "
    + days[today.getDay()];

  const [indiaCase, setIndiaCase] = React.useState([]);

  React.useEffect(() => {
    api().then(function (rslt) { //console.log(rslt);
      setIndiaCase(rslt);
    });
  }, []);
  // console.log( indiaCase);
  return (<div>
    <div className="bg-info">
      <br />
      <p className="text-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdh3Hmn7AEz1jy2fQv5iNDWIJPT_rXSmQxA&usqp=CAU"
          alt="" id="covid-logo" />
      </p>
    </div>
    <div className="sticky-top bg-info">
      <br /><br />
      <h2 className="text-center fw-bold h22"> Live India CORANA Tracker  </h2>
      <h6 className="text-center fw-bold"> {date}</h6>
      <br />
    </div>
    { (indiaCase.length > 0) && (<Card curDataArr={indiaCase} />)}
    { (indiaCase.length > 0) && (<Table tableDataArr={indiaCase} />)}

  </div>);

}

export default Home;




