import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {useState} from 'react';

import './App.css';
import Asistencia from "./Components/Asistencia"
import Nav from "./Components/Nav"
import LandingPage from "./Components/LandingPage";
import Directorio from "./Components/Directorio";
import Footer from "./Components/Footer";
import Auth from "./PopUps/Auth";



function App() {
  var postArray = []

  const [Logged, Login] = useState(false)
  const [DisplayOptions, setDisplayOptions] = useState(undefined);
  
  const [user, setuser] = useState(undefined)


  function HandleAuth(){
    Login(true)
  }
  function closeAuth(){
    Login(false)
  }

  function SetUser(obj){
    


    setuser(obj);


  }

  function SetOptions(params){
    setDisplayOptions(params)
  }


  return (
    <Router>
      <Nav setOptions={SetOptions} login={HandleAuth} logged={Logged} user={user}></Nav>
      <Switch>
        <Route  path="/" exact component={LandingPage}></Route>
        <Route  path="/Asistencia/" component={()=><Asistencia SetOptions={SetOptions} user={user} postArray={postArray}></Asistencia>}></Route>
        <Route  path="/Directorio/" component={()=> <Directorio user={user}></Directorio>}></Route>
      </Switch>
      <Footer postArray={postArray} user={user} DisplayOptions={DisplayOptions} ></Footer>

      {/*These are the websites pop ups */}
      <Auth closeAuth={closeAuth} logged={Logged} user={user} setuser={SetUser}></Auth>

    </Router>
  );
}

export default App;
