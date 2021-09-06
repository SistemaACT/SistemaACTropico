

function Options(props){

    function EnviarAsistencia(){
        const url = "https://script.google.com/macros/s/AKfycbyW5aeV7JoN_AthUcg0B-m3m5AqyqbQAWr87yevWgehDMl2RKA07dXRy1ijgG69vAMw/exec"
        var date = new Date();

        if(date.getHours()>12){
            alert("No se puede reportar Asistencia despues de Medio día")
        }else if(date.getHours()<= 12){

        fetch(url, {
            method:"POST",
            mode: "no-cors",
            cache:"no-cache",
            headers: {"Content-Type":"aplication/json"},
            redirect:"follow",
            body: JSON.stringify({"Array": props.postArray, "user":props.user})
        })
    }
    
    }
  
    if(props.user !== undefined){
    if(props.OpenModal === true){


        

        if(props.DisplayOptions === "Asistencia"){
            if(props.user.Asistencia === true){
                return (
                <div id="OptionsModal">
                   <center><button style={{fontSize:"xx-large", margin:"20px"}} onClick={EnviarAsistencia}>Enviar</button></center>
                </div>
            )}if(props.user.Asistencia === false) {
               
                return <h1>This shouldn't happen</h1>
            }
        }   
    



    }if(props.OpenModal === false){
      
        return null
    }
    }
    else if(props.user === undefined){
        if(props.OpenModal === true) {alert("Necestias iniciar sesion"); return null;}
        if(props.OpenModal === false) return null
    }
}




export default Options