import {useEffect, useState} from "react";
import './App.css';
import SideBar from "./components/sideBar/sideBar";
import Main from "./components/main/main";
import airplane from "./assets/airplane.svg"
import {Route, Routes} from "react-router-dom";
import axios from 'axios';

function App() {
    const [data, setData] = useState();
    const fetchData = async () =>{
        let res = await axios.get("/db/tickets.json")
        if(res.status === 200){
            return {response : res.data.tickets}
        }
    }

    useEffect( () => {
        fetchData().then((res) => {
            let response = res.response
            setData(response)
            console.log("response", response)
        }).catch((err) => {
            console.log(err)
        });
    },[])
    console.log("state data", data)
  return (
    <div className="App">
        <div className="LogoWrapper">
            <img src={airplane} alt="airplane"/>
        </div>
      <div className="ContentWrapper">
          <SideBar/>
          <Routes>
              <Route path="/" element={ <Main price="RUB" data={data}/>} />
              <Route path="/usd" element={ <Main price="USD" data={data}/>} />
              <Route path="/eur" element={ <Main price="EUR" data={data}/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
