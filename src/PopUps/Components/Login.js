import React, {useState} from "react"

//import Cookies from "universal-cookie/es6";

function Login(props){


    const [Username, setUsername] = useState(undefined)
    const [Password, setPassword] = useState(undefined)
    const [Success, setSuccess] = useState(false)

    function handleChangeUsername(e){
        setUsername(e.target.value);

        console.log(Username)
    }
    function handleChangePassword(e){
        setPassword(e.target.value);

        console.log(Password)
    }

    function validate_(){
        var storeUser = [];

        var url="https://script.google.com/macros/s/AKfycbzmSG40GuOkzGsqnG_AN34-8jUBFqIfoWSCBbWrV15ICb2cRdIFJomxy_iZ8piuQKxdww/exec";

        console.log("This works")

        fetch(url)
            .then(response => {
                
            return response.json()
            }).then(data =>{

                console.log(data)
                
                data.map((user)=>{
                    if(storeUser[0] === undefined){


                    console.log("user →")
                    console.log(user)

                    if(user.NombeDeUsuario === Username){
                        if(user.Contrasena === Password){
                             storeUser.push(user)
                             props.setuser(storeUser[0])
                             console.log("goes trhough here")
                             setSuccess(true)
                             console.log("Succes1")
                             console.log(Success)
                             resonse()
                        }
                    }

                    
                }
                    return null

                })

                
            })
            
          

    }

    function resonse(){

            alert("Has iniciado sesion")
            props.close();

    }
    

    return(
        <div id="LoginPopup">
            <a onClick={props.close} className="closeBTN">X</a>
            <label>Nombre de Usuario</label>
            <input onChange={handleChangeUsername} id="Usuario" type="text"></input>
            <label>Constraseña</label>
            <input onChange={handleChangePassword} id="contraseña" type="password"></input>
            <button onClick={validate_} style={{margin:"20px"}}>Iniciar Session</button>
        </div>

    )

}
export default Login