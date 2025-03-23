import classNames from "classnames";
import Link from "next/link";

export default function NavLinks() {

    const routes: { id: number, label: string, href: string }[] = [
        {
            id: 1,
            label: 'Main page',
            href: '/'
        },
        {
            id: 2,
            label: 'Login',
            href: '/login'
        },
        {
            id: 3,
            label: 'List',
            href: '/list'
        },
    ]

    return routes.map(({ id, href, label }) => (
            <Link
                key={id}
                href={href} 
                className={
                    classNames(
                    "flex items-center justify-center w-[150px] h-[50px] mb-2 text-center",
                    "border-4 border-gray-100 p-4 rounded-md",
                    "hover:bg-gray-100 hover:text-black"
                    )
                }
            > {label} </Link>
    ));
}