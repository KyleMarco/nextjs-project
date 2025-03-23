import classNames from "classnames";
import { signIn, signOut } from "../../../../auth";

export const SignIn = () => {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google");
            }}
        >
            <button 
                type="submit"
                className={
                    classNames(
                      "p-4",
                      "rounded-md",
                      "hover:underline",
                      "cursor-pointer"
                    )
                }
            >
                Signin with Google
            </button>
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
            <button 
                type="submit"
                className={
                    classNames(
                      "p-4",
                      "rounded-md",
                      "hover:underline",
                      "cursor-pointer"
                    )
                }
            >
                Sign Out
            </button>
        </form>
    )
};  