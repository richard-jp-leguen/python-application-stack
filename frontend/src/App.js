import axios from "axios"
import React, { useEffect, useState } from "react";

const App = () => {

   const [datetime, setDatetime] = useState("(loading...)");
   useEffect(() => {
       setInterval(() => {
           axios.get("/api/current_time").then((currentTime) => {
               setDatetime(currentTime.data);
           });
       }, 500);
   }, []);

   return <div>Hello, World! The current datetime is {datetime}</div>;
};

export default App;
