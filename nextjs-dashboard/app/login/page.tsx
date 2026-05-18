import { lusitana } from '@/app/ui/fonts';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <h1 className={`${lusitana.className} text-2xl`}>
          Log In
        </h1>

        <p>Login page coming soon...</p>
      </div>
    </main>
  );
}