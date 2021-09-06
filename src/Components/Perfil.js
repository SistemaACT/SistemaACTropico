import { useAuth0 } from "@auth0/auth0-react"
import React from "react"

function Perfil(){
    const {user, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <div>This works</div>
        )

    )

}

export default Perfil