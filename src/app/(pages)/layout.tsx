// import NavLinks from "@/app/components/NavLinks";
// import Link from "next/link";
import { SignIn, SignOut } from "../components/login/auth-component";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDoubleDownIcon, HomeModernIcon } from '@heroicons/react/24/outline'
import { auth } from "../../../auth";
import Image from "next/image";
import LinkButton from "../components/link-button";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  console.log(' session ', session);

  return (
    <div>
      <section className="flex sticky top-0">
        <div className="hidden lg:flex items-center justify-center gap-2 p-6">
          <HomeModernIcon className="h-8 w-8"/>
        </div>
        <div className="flex lg:hidden items-center justify-center gap-2 p-6 ">
          <Menu as="div" className="relative inline-block items-center justify-center text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 ring-inset hover:bg-gray-50">
                <ChevronDoubleDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md ring-1 shadow-lg ring-gray/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <LinkButton label="Home" href="/home" />
                </MenuItem>
                <MenuItem>
                  <LinkButton label="Cart" href="/cart" />
                </MenuItem>
                <MenuItem>
                  <LinkButton label="About Me" href="/about" />
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <div className="hidden lg:flex grow items-center gap-2">
          <LinkButton label="Cart" href="/cart" />
          <LinkButton label="About Me" href="/about" />
        </div>
        <div className="flex grow items-center justify-end gap-4 p-4">
          {session?.user ? (
            <div>
              {session?.user?.image &&
                <div className="flex gap-4">
                  <span className="hidden lg:block">{session.user.email}</span>
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
      </section>
      <div>{children}</div>
    </div>
  );
}