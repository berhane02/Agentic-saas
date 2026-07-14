"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="sticky top-0 z-50 px-4 sm:px-8 py-4 flex items-center justify-between bg-[#0b1120]/70 backdrop-blur-xl border-b border-white/5">
      <Link href="/" className="flex items-center group">
        <div className="relative h-8 w-8 mr-3 transition-transform duration-300 group-hover:scale-110">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Genius
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="outline"
            className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white transition-colors duration-300"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
