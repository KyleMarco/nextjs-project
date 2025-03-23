// import NavLinks from "@/app/components/NavLinks";
// import Link from "next/link";
import { SignIn, SignOut } from "../components/login/auth-component";
// import { ShoppingCartIcon, QueueListIcon, UserIcon } from '@heroicons/react/24/outline'
import { auth } from "../../../auth";
import Image from "next/image";
import LinkButton from "../components/link-button";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  console.log(' session ', session);

  return (
    <div>
      {/* <div className="grid gap-2 h-[100px] border-2 border-gray-400">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
      </div> */}
      <div className="flex sticky top-0">
        <div className="flex grow gap-2 p-4">
          <LinkButton label="Cart" href="/cart" />
          {/* <ShoppingCartIcon className="size-6" /> */}
          {/* <LinkButton label="ToDo list" href="/todo" /> */}
          {/* <QueueListIcon className="size-6" /> */}
          <LinkButton label="About Me" href="/about" />
        </div>
        <div className="flex items-center justify-center gap-4 p-4">
          {session?.user ? (
            <div>
              {session?.user?.image &&
                <div className="flex gap-4">
                  {session.user.email}
                  <Image 
                    className="rounded-full ring-2 ring-white"
                    width={25}
                    height={25}
                    src={session.user.image ?? "https://source.boringavatars.com/beam/120"} 
                    alt="" 
                    />
                    <SignOut />
                </div>
              }
            </div>
          ) : <SignIn />}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}