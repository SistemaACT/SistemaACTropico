
import Login from "./Components/Login"
import LogOut from "./Components/Logout"



function Auth(props){

  

    if (props.user === undefined){
        if(props.logged === true){
        return (<Login close={props.closeAuth} fn={props.login} setuser={props.setuser}></Login>)
        }
        else if(props.logged === false) return null
    }
    if(props.user !== undefined){
        
        if(props.logged === true){
       
            return (<LogOut user={props.user} fn={props.login}></LogOut>)
            }
            else if(props.logged === false) return null

    }


}
export default Auth