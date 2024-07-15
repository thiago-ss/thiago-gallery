import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <h1 className="text-2xl font-bold">Thiago&apos;s Gallery</h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
