import { singInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthorization = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await singInWithGoogle()
        // console.log({result});
        if ( !result.ok ) dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))
    }
}
