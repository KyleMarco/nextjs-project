import { signIn, signOut } from "../../../../auth";

export const SignIn = () => {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google");
            }}
        >
            <button type="submit">Signin with Google</button>
        </form>
    )
};  

export const SignOut = () => {
    return (
        <form
            action={async () => {
                    "use server"
                    await signOut()
                }
            }
        >
            <button type="submit">Sign Out</button>
        </form>
    )
};  