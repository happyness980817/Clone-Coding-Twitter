import { GithubAuthProvider, signInWithPopup } from "firebase/auth"
import { Button, Logo } from "./social-Auth-components"
import { auth } from "../firebase";

export default function GithubButton(){
    const onClick = async () => {
        try {
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth,provider);
        } catch (error) {
            console.error(error);
        }
        
    };
    return <Button onClick={onClick}>
        <Logo src="/github-mark.svg" />
        Continue with Github
    </Button>
}