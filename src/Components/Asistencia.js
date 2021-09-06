import React, {useState,useEffect} from "react"
import Empleados from "./NestedComponent/Empleados";


function Asistencia(props){

    const [LoadedData, setLoadedAPIData] = useState([]);
    const [DisplayData, setDataToDisplay] = useState(null)

    useEffect(()=>{

        props.SetOptions("Asistencia")


        var url="https://script.google.com/macros/s/AKfycbzHi05JxKI_8eVhGlCarXKbA5NHcVm4qCYIpldvu9lZUqVpp2PbA-E3ggzHdosvEBOS/exec";

        fetch(url)
            .then(response => {
            return response.json()
            }).then(data =>{
                console.log("data ↓")
                console.log(data)

               setLoadedAPIData(data);
                
            })

    },[]);
    function selectObra(event){
        console.log(event.target.value)
        setDataToDisplay(event.target.value)
    }

    if(props.user !== undefined){
        if(LoadedData[0] !== undefined){
        

        console.log(LoadedData[2].Plantas)

        return (
            <React.Fragment>
                <center>
                <select onChange={selectObra} style={{width:"60%", height:"50px", borderRadius:"15px", marginTop:"15px"}}>
                    {LoadedData[2].Plantas.map((Planta)=>{
                        return <option key={Planta.Planta} value={Planta.Planta}>{Planta.Planta}</option>
                    })}
                </select>
                </center>
                <Empleados postArray={props.postArray} Filter={DisplayData} Personal={LoadedData[0]}></Empleados>
            </React.Fragment>

        )
        }
        else if(LoadedData[0] === undefined){
            return (
            <React.Fragment>
            <h1>Loading</h1>
            </React.Fragment>
            )
        }


    }else if(props.user === undefined){
        return <h1>Necesitas iniciar sesion</h1>
    }
}

    export default Asistencia