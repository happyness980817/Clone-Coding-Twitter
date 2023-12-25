import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { Button, Logo } from "./social-Auth-components"
import { auth } from "../firebase";

export default function GoogleButton(){
    const onClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth,provider);
        } catch (error) {
            console.error(error);
        }
        
    };
    return <Button onClick={onClick}>
        <Logo src="/Google.png" />
        Continue with Google
    </Button>
}