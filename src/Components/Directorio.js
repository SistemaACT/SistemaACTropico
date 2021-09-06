import React, {useState,useEffect} from "react"


function Directorio(props){

    var user = props.user
    
   


        const [LoadedData, setLoadedAPIData] = useState([]);
    
        useEffect(()=>{
                var url="https://script.google.com/macros/s/AKfycbyUGhau5pJYbdM9d2zKc77GK_COLTtcPzN0E6LGkbHED96NS0PhxKGWuaEspFEkF6Ydjw/exec";
    
            fetch(url)
                .then(response => {
                return response.json()
                }).then(data =>{
                   
                   setLoadedAPIData(data);
                    
                })
    
        },[]);


    if(user){

        var Permisions = ["Admin", "Ingeniero", "Compras"]

            if(Permisions.indexOf(user.Rol) !== -1){
                
                return (

                    <React.Fragment>
                    {LoadedData.map((Proveedor)=>{
                    return(
                    <center>    
                    <div className="DirectorioContainer">
                        <h1>Proveedor: {Proveedor.Proveedor}</h1>
                        <h3>Razon Social: {Proveedor.RazonSocial}</h3>
                        <p>Nombre: {Proveedor.Nombre}</p>
                        Telefono: <a style={{color:"black"}}>{Proveedor.Telefono}</a>
                        <p>Materiales: {Proveedor.Materiales}</p>
                    </div>
                    </center>
                    )
                })}
                </React.Fragment>)
            }else{
                return(<h1>No cuentas con los persmisos necesarios para ver esta información</h1>)
            }

    }else{
        return(<h1>Requiere iniciar sesion para ver esta pagina</h1>)
    }

}

export default Directorio