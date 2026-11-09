import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { ACESSO } from "@/lib/acesso";

export default async function HomePage() {
  const user = await currentUser();
  const role = user?.publicMetadata?.role;

  const rotas = Object.keys(ACESSO).filter((rota) =>
    ACESSO[rota].includes(role),
  );

  return (
    <main className="card">
      {!user ? (
        <>
          <h1>Faça login para acessar o sistema</h1>
          <SignInButton mode="modal">Entrar</SignInButton>
          <SignUpButton mode="modal">Cadastrar</SignUpButton>
        </>
      ) : (
        <>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: { width: 150, height: 150 },
              },
            }}
          />

          <h1>{rotas.length ? "Escolha seu acesso" : "Sem acesso"}</h1>

          {rotas.map((rota) => (
            <Link key={rota} className="btn" href={`/${rota}`}>
              {rota}
            </Link>
          ))}
        </>
      )}
    </main>
  );
}
