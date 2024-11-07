"use client";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { register, error } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(name, username, password, passwordConfirmation);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-blue-300 w-full">
      <div className="flex flex-col max-w-md w-full h-full p-4 mx-auto text-center text-black bg-white">
        <h1 className="mb-4 text-lg font-bold">Página de Registro</h1>
        <form className="flex flex-col items-center gap-4" onSubmit={handleRegister}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 text-black bg-white border border-gray-300 outline-none"
            type="text"
            placeholder="Nome"
            required
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 text-black bg-white border border-gray-300 outline-none"
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 text-black bg-white border border-gray-300 outline-none"
            type="password"
            placeholder="Senha"
            required
          />
          <input
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="w-full p-2 text-black bg-white border border-gray-300 outline-none"
            type="password"
            placeholder="Confirmação da senha"
            required
          />
          <button
            className="px-4 py-2 font-bold text-white bg-blue-400 max-w-32 hover:bg-blue-600"
            type="submit"
          >
            Registrar
          </button>
          <p>Ja tem uma conta?</p>
          <a className="text-blue-400" href="/login">Clique aqui</a>
          

          {error && <p className="text-red-400">{error.message}</p>}
        </form>
      </div>
    </main>
  );
};

export default Page;
