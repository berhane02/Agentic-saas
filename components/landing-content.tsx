"use client";

import Link from "next/link";
import { tools } from "@/constants";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Luciy",
    avatar: "L",
    title: "Software Engineer",
    description: "This is the best application I've used for generative AI.",
  },
  {
    name: "John",
    avatar: "J",
    title: "DevOps Engineer",
    description: "I like how I can prompt everything from one endpoint.",
  },
  {
    name: "Yemane",
    avatar: "Y",
    title: "FullStack Engineer",
    description: "This application helps speed up my development.",
  },
  {
    name: "Nasa",
    avatar: "N",
    title: "Software Engineer",
    description: "It was fun generating solar system pics.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-6 sm:px-10 pb-24 space-y-24">
      {/* Features */}
      <section>
        <h2 className="text-center text-3xl md:text-4xl text-white font-extrabold tracking-tight mb-3">
          One platform, every medium
        </h2>
        <p className="text-center text-zinc-400 font-light mb-12 max-w-lg mx-auto">
          Five generative tools behind a single account.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map((tool) => (
            <Link href="/sign-up" key={tool.href}>
              <Card className="group h-full bg-white/[0.03] border border-white/5 text-white rounded-2xl transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:-translate-y-1">
                <CardContent className="flex flex-col items-center gap-y-4 p-6 text-center">
                  <div
                    className={cn(
                      "p-3 w-fit rounded-xl transition-transform duration-300 group-hover:scale-110",
                      tool.bgColor
                    )}
                  >
                    <tool.icon className={cn("h-7 w-7", tool.color)} />
                  </div>
                  <p className="font-medium text-sm text-zinc-200">
                    {tool.label}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-center text-3xl md:text-4xl text-white font-extrabold tracking-tight mb-12">
          Loved by builders
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((item) => (
            <Card
              key={item.description}
              className="bg-white/[0.03] border border-white/5 text-white rounded-2xl transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-fuchsia-600 text-sm font-semibold">
                    {item.avatar}
                  </div>
                  <div>
                    <p className="text-base font-semibold">{item.name}</p>
                    <p className="text-zinc-400 text-sm font-normal">
                      {item.title}
                    </p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0 text-sm text-zinc-300 font-light leading-relaxed">
                  “{item.description}”
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
