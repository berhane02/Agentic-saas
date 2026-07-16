"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-28 md:py-36 px-4 text-center space-y-8">
      <div className="animate-fade-up inline-flex items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs md:text-sm font-medium text-zinc-300 backdrop-blur">
        <Sparkles className="h-3.5 w-3.5 text-violet-400" />
        Powered by the latest AI models
      </div>

      <div
        className="animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-4 font-extrabold tracking-tight"
        style={{ animationDelay: "150ms" }}
      >
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-fuchsia-500 to-pink-500 pb-2">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Music Generation.",
                "Code Generation.",
                "Video Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div
        className="animate-fade-up mx-auto max-w-xl text-sm md:text-xl font-light text-zinc-400 leading-relaxed"
        style={{ animationDelay: "300ms" }}
      >
        Create content using AI 10x faster. Chat, images, video, music and
        code — all in one place.
      </div>

      <div
        className="animate-fade-up flex items-center justify-center gap-x-4"
        style={{ animationDelay: "450ms" }}
      >
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="group md:text-lg p-4 md:p-6 rounded-full font-semibold shadow-lg shadow-fuchsia-500/25 transition-all duration-300 hover:shadow-fuchsia-500/40 hover:scale-[1.03]"
          >
            Start Generating for Free
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      <div
        className="animate-fade-up text-zinc-500 text-xs md:text-sm font-normal"
        style={{ animationDelay: "600ms" }}
      >
        No credit card required.
      </div>
    </div>
  );
};
