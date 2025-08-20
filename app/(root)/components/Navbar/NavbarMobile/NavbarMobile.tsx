"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { links } from '../Navbar.data';
import Link from "next/link";

export function NavbarMobile() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex md:hidden">
        <Button className="text-black" 
                variant="outline"
                onClick={ () => setIsOpen(!isOpen) }>
            {isOpen ? <X size={24} /> : <Menu size={24} /> }
        </Button>
        {isOpen && (
            <div className="absolute top-full right-5 mt-1 bg-white text-black rounded-lg shadow-lg p-4 w-50 flex flex-col">
                {links.map((link) => (
                    <Link key={link.name} href={link.href as any} onClick={ () => setIsOpen(false) }>
                        {link.name}
                    </Link>
                ))}
            </div>
        )}
    </div>
  );
}
