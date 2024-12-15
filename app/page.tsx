import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            Welcome to Clerk Auth
          </CardTitle>
          <CardDescription>
            Experience secure authentication with Clerk
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <SignedOut>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center mb-4">
                    Please sign in to access protected content
                  </p>
                  <div className="flex justify-center gap-4">
                    <SignInButton mode="modal">
                      <Button>Sign In</Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button variant="outline">Sign Up</Button>
                    </SignUpButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          </SignedOut>

          <SignedIn>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Welcome to Protected Content!
                </h3>
                <p className="mb-4">
                  You&apos;ve successfully authenticated and can now access the
                  protected content! 🎉
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      Authentication vs Authorization
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">
                        Authentication (AuthN)
                      </span>
                      : Verifies who you are - like using your email/password to
                      sign in.
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Authorization (AuthZ)</span>
                      : Determines what you can access - like having permission
                      to view this content.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                      <li>Authentication: Logging into your email account</li>
                      <li>
                        Authorization: Having admin rights to delete posts
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <div className="flex justify-center py-4">
                <Button
                  asChild
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200"
                  variant="default"
                >
                  <Link
                    href="https://clerk.com/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More About Clerk
                  </Link>
                </Button>
              </div>
            </Card>
          </SignedIn>
        </CardContent>
      </Card>
    </div>
  );
}
