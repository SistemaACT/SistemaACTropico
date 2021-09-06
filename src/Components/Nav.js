import LogoACT from "../Images/LogoACT.png"
import {Link} from "react-router-dom"
import react, {useState} from "react"
import React from "react"



function Nav(props){

    let LoginBtn = ()=>{

        return <button style={{height:"30px"}} onClick={props.login}>Session</button>

    }
    let Hamburger = ()=>{
        const [state, setstate] = useState(false);
        console.log(state)

        if(state === false){
            return(<button className="HamburgerMenu" onClick={()=>{setstate(true)}}>Abrir menu</button>)
        }
        if(state === true){
            return(
                <React.Fragment>
                <button className="HamburgerMenu" onClick={()=>{setstate(false)}}>Cerrar menu</button>
                <div id="MenuModal">
                <ul className="Hamburger-Nav-Hrefs" style={{display:"flex", flexDirection:"column"}}>
                    <Link to="/">
                        <li onClick={()=>props.setOptions(undefined)}>Home</li>
                    </Link>
                    <Link to="/Asistencia/">
                    <li onClick={()=>props.setOptions("Asistencia")}>Asistencia</li>
                    </Link>
                    <Link to="/Inventario/">
                    <li onClick={()=>props.setOptions("Inventario")}>Inventario</li>
                    </Link>
                    <Link to="/Directorio/">
                    <li onClick={()=>props.setOptions("Directorio")}>Directorio</li>
                    </Link>
                </ul>
                <LoginBtn></LoginBtn>
                </div>
                </React.Fragment>
            )
        }

    }

    console.log("window width")
    console.log(window.screen.width)

    if(window.screen.width < 800){
        return(
            <nav>
                <img alt="Logo" id="logo"src={LogoACT}></img>
                <Hamburger></Hamburger>
            </nav>
        )
    }

    if(window.screen.width >= 800){
    return(
        <nav style={{display:"flex"}}>
            <img alt="Logo" id="logo"src={LogoACT}></img>
            <div>
                <ul className="Nav-Hrefs" style={{display:"inline-flex"}}>
                    <Link to="/">
                        <li onClick={()=>props.setOptions(undefined)}>Home</li>
                    </Link>
                    <Link to="/Asistencia/">
                    <li onClick={()=>props.setOptions("Asistencia")}>Asistencia</li>
                    </Link>
                    <Link to="/Inventario/">
                    <li onClick={()=>props.setOptions("Inventario")}>Inventario</li>
                    </Link>
                    <Link to="/Directorio/">
                    <li onClick={()=>props.setOptions("Directorio")}>Directorio</li>
                    </Link>
                </ul>
                <LoginBtn></LoginBtn>
            </div>
        </nav>

    )
    }
}

export default Nav