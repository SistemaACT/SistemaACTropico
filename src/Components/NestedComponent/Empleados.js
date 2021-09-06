import React from "react"
import Confirmacion from "./ConfirmacionAsistencia";



function Empleados(props){


   
    var filter = [];

    
    props.Personal.Asistencia.map((Empleado)=>{
        if(Empleado.Planta === props.Filter){
            filter.push(Empleado);
        }
        return null
    });

    
    return (

        <div style={{marginBottom:"110px"}}>

        {filter.map((Empleado)=>{
        return (
            <center key={Empleado.Id}>
            <div className="EmpleadoAsitencia" key={Empleado.Id}>
                <h1>{Empleado.Nombre}</h1> 
                
                <Confirmacion postArray={props.postArray} Empleado={Empleado}></Confirmacion>
            </div>
            </center>
            )
        })}
        </div>
        
    )

    
}

export default Empleados