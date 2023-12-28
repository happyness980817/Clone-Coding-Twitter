import { GithubAuthProvider, signInWithPopup } from "firebase/auth"
import { Button, Logo } from "./social-Auth-components"
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function GithubButton(){
    const navigate = useNavigate();
    const onClick = async () => {
        try {
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth,provider);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
        
    };
    return <Button onClick={onClick}>
        <Logo src="/github-mark.svg" />
        Continue with Github
    </Button>
}