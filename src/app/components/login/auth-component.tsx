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
                      "hover:bg-[#d8dfe9cc] hover:text-black"
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
                      "hover:bg-[#d8dfe9cc] hover:text-black"
                    )
                }
            >
                Sign Out
            </button>
        </form>
    )
};  