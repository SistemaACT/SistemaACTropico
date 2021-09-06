import React, {useState} from "react"

var storage = []

function Confirmacion(props){




    const Response = ()=>{
        const [confirmacion, setConfirmacion] = useState(null)

        function Confirmacion(param,obj){
            setConfirmacion(param)
            if (param === "Asistio")  storage = [obj.Nombre, 1] ;
            if (param === "Falto") storage = [obj.Nombre, 0];
            if (param === "Medío Día") storage = [obj.Nombre, 0.5];

            props.postArray.push(storage)



        }

    if(confirmacion === "Asistio"){
        return(
        <div>
         <button className="Asistencia-Button" onClick={()=>{Confirmacion("Asistio", props.Empleado)}}>Asistio</button> 
         <button className="Asistencia-Button" onClick={()=>{Confirmacion("Medío Día", props.Empleado)}}>Medio Día</button>
         <button className="Asistencia-Button" onClick={()=>{Confirmacion("Falto", props.Empleado)}}>Falto</button>   
         <br></br><img alt="Yes" style={{width:"50px",marginTop:"20px"}} src="https://image.flaticon.com/icons/png/512/3572/3572255.png"></img>
        </div>
        )
    }
    else if(confirmacion === "Falto"){
        return(        <div>
            <button className="Asistencia-Button" onClick={()=>{Confirmacion("Asistio", props.Empleado)}}>Asistio</button>
            <button className="Asistencia-Button" onClick={()=>{Confirmacion("Medío Día", props.Empleado)}}>Medio Día</button>
            <button className="Asistencia-Button" onClick={()=>{Confirmacion("Falto", props.Empleado)}}>Falto</button>   
            <br></br><img alt="No" style={{width:"50px", marginTop:"20px"}} src="https://image.flaticon.com/icons/png/512/3572/3572260.png"></img>
           </div>)
    }else if(confirmacion === "Medío Día"){
        return(        <div>
            <button className="Asistencia-Button" onClick={()=>{Confirmacion("Asistio", props.Empleado)}}>Asistio</button>
            <button className="Asistencia-Button" onClick={()=>{Confirmacion("Medío Día", props.Empleado)}}>Medio Día</button>
            <button className="Asistencia-Button" onClick={()=>{Confirmacion("Falto", props.Empleado)}}>Falto</button>   
            <br></br><img alt="No" style={{width:"50px", marginTop:"20px"}} src="https://image.flaticon.com/icons/png/512/3572/3572260.png"></img>
           </div>)
    }
    else if(confirmacion == null){
        return(
        <div><button className="Asistencia-Button" onClick={()=>{Confirmacion("Asistio" , props.Empleado)}}>Asistio</button>
        <button className="Asistencia-Button" onClick={()=>{Confirmacion("Medío Día", props.Empleado)}}>Medio Día</button>
        <button className="Asistencia-Button" onClick={()=>{Confirmacion("Falto", props.Empleado)}}>Falto</button></div>)
    }

    }

    return <Response></Response>


}
export default Confirmacion