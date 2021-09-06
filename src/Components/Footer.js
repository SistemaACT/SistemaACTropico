import React, {useState} from "react"
import Options from "./NestedComponent/Options";

function Footer(props, user){

    const [OpenModal, FunctionOpenModal] = useState(false);



    if(user === undefined){
    return(<h1>Logged Out</h1>  )
    }
    else if(user !== undefined){


        return(
            <React.Fragment>
            <Options user={props.user} OpenModal={OpenModal} DisplayOptions={props.DisplayOptions} postArray={props.postArray}></Options>
            <div id="Footer">
                <div className="OptionsButton" onClick={()=>{
                    if(OpenModal === false){
                         FunctionOpenModal(true); 

                    };
                    if(OpenModal === true){
                        FunctionOpenModal(false);

                    }
                }}></div>
            </div>

            </React.Fragment>
            )
    }

}

export default Footer