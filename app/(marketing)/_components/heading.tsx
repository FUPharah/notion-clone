"use client";
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading} = useConvexAuth();
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
      {isLoading && (
        <div className="w-full flex items-center justify-center">
        <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
          Get Started
          <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
        )}
      {!isLoading && !isAuthenticated && (
        <SignInButton mode="modal">
          <Button size="sm">Join Notion
            <ArrowLeft className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  )
}
