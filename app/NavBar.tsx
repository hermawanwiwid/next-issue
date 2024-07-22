"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbVirusSearch } from "react-icons/tb";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  // console.log(currentPath);

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Isuues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b h-16 items-center px-5 mb-5">
      <Link href="/">
        <TbVirusSearch />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classNames({
              "text-zinc-100": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-200 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
