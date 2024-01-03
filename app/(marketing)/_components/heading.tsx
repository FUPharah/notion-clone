"use client";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl " >
      Your ideas, documents, & tasks in one place. Welcome to the
      <span className="underline font-bold"> Notion</span>
      <span className=" underline font-light"> Clone</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
      A simple, beautiful, and collaborative workspace
      that helps you and your team organize your ideas.
      </h3>
      <Button>
        Get Started
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  )
}