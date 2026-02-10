import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const FMPadelPlayersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jugadores FMPadel</title>
        <meta
          name="description"
          content="Explora los jugadores de la Federación Madrileña de Pádel. Acceso rápido y sencillo a ranking, partidos y estadísticas."
        />
      </Head>

      <div
        className={`${inter.className} min-h-screen flex flex-col items-center bg-white`}
      >
        <main className="flex-1 flex flex-col items-center px-4 py-16 max-w-5xl mx-auto">
          <Image
            src="/images/fmpadel/logo.png"
            alt="Jugadores FMPadel"
            width={120}
            height={120}
            className="rounded-2xl shadow-lg"
          />

          <h1 className="mt-8 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl text-center">
            Jugadores FMPadel
          </h1>

          <p className="mt-4 text-lg text-zinc-600 text-center max-w-2xl">
            Explora los jugadores de la Federaci&oacute;n Madrile&ntilde;a de
            P&aacute;del. Acceso r&aacute;pido y sencillo a ranking, partidos y
            estad&iacute;sticas.
          </p>

          <p className="mt-3 text-sm text-zinc-400 text-center">
            Datos actualizados cada d&iacute;a a las 04:00 UTC.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Image
              src="/images/fmpadel/screenshot-1.png"
              alt="Ranking de jugadores"
              width={300}
              height={649}
              className="rounded-2xl shadow-lg"
            />
            <Image
              src="/images/fmpadel/screenshot-2.png"
              alt="Perfil de jugador"
              width={300}
              height={649}
              className="rounded-2xl shadow-lg"
            />
            <Image
              src="/images/fmpadel/screenshot-3.png"
              alt="Detalle de torneo"
              width={300}
              height={649}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </main>

        <footer className="py-8 px-4 text-center text-sm text-zinc-400">
          Desarrollado por{" "}
          <a
            href="https://www.instagram.com/fereypadel/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-600"
          >
            @fereypadel
          </a>
          . Aplicaci&oacute;n no afiliada con la Federaci&oacute;n
          Madrile&ntilde;a de P&aacute;del.
        </footer>
      </div>
    </>
  );
};

export default FMPadelPlayersPage;
