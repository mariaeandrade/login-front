import Link from "next/link";

export default function TurmasPage() {
  return (
    <main className="card">
      <h1> Turmas </h1>
      <Link href="/turmas/docente" className="btn">
        Docentes
      </Link>
      <Link href="/turmas/instrutor" className="btn">
        Instrutores
      </Link>
    </main>
  );
}
