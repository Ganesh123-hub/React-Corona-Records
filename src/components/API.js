
import axios from "axios";

    const url = "https://api.covid19india.org/data.json";
     
    export const api = async () => {
          const resp = await axios.get(url);  // full data
         const res = (resp.data.statewise);  // stte-wise data
        //  console.log(res);
         return (res);  
    }
  
    
            
  


