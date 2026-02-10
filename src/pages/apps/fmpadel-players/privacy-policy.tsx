import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pol&iacute;tica de Privacidad - Jugadores FMPadel</title>
        <meta
          name="description"
          content="Política de Privacidad de la aplicación Jugadores FMPadel."
        />
      </Head>

      <div
        className={`${inter.className} min-h-screen flex flex-col bg-white`}
      >
        <main className="flex-1 px-4 py-16 max-w-3xl mx-auto w-full">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Pol&iacute;tica de Privacidad
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            &Uacute;ltima actualizaci&oacute;n: 10 de Febrero 2026
          </p>

          <p className="mt-8 text-zinc-600 leading-relaxed">
            Esta Pol&iacute;tica de Privacidad describe c&oacute;mo se gestiona
            la informaci&oacute;n en la aplicaci&oacute;n m&oacute;vil Jugadores
            FMPadel (en adelante, &ldquo;la App&rdquo;).
          </p>

          <h2 className="mt-10 text-xl font-semibold text-zinc-900">
            1. Informaci&oacute;n general
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            La App es una aplicaci&oacute;n de car&aacute;cter informativo y de
            solo lectura, cuyo objetivo es mostrar datos p&uacute;blicos
            relacionados con el p&aacute;del que se obtienen a partir del sitio
            web fmpadel.com.
          </p>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            La App no requiere registro, no permite la creaci&oacute;n de
            cuentas de usuario y no solicita informaci&oacute;n personal.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-zinc-900">
            2. Datos personales
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            La App no recopila, almacena ni procesa datos personales de los
            usuarios.
          </p>
          <p className="mt-3 text-zinc-600 leading-relaxed">En particular:</p>
          <ul className="mt-3 space-y-2 text-zinc-600 leading-relaxed list-disc pl-6">
            <li>
              No se solicita nombre, correo electr&oacute;nico, n&uacute;mero de
              tel&eacute;fono ni ning&uacute;n otro dato identificativo.
            </li>
            <li>
              No se utilizan sistemas de autenticaci&oacute;n ni perfiles de
              usuario.
            </li>
            <li>
              No se recopila informaci&oacute;n del dispositivo con fines de
              identificaci&oacute;n.
            </li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-zinc-900">
            3. Uso de datos y seguimiento
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">La App:</p>
          <ul className="mt-3 space-y-2 text-zinc-600 leading-relaxed list-disc pl-6">
            <li>No utiliza cookies.</li>
            <li>No incorpora herramientas de anal&iacute;tica.</li>
            <li>No realiza seguimiento de la actividad del usuario.</li>
            <li>
              No incluye publicidad ni sistemas de monetizaci&oacute;n basados en
              datos.
            </li>
          </ul>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            El uso de la App es completamente an&oacute;nimo.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-zinc-900">
            4. Origen de los datos mostrados
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            La informaci&oacute;n que se muestra en la App procede de datos
            p&uacute;blicos disponibles en fmpadel.com.
          </p>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            La App act&uacute;a &uacute;nicamente como un visor informativo
            enriquecido de dichos datos.
          </p>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            La App no est&aacute; afiliada, patrocinada ni gestionada por
            fmpadel.com ni por la entidad responsable de dicho sitio web.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-zinc-900">
            5. Cesi&oacute;n de datos a terceros
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Dado que la App no recopila datos personales, no existe cesi&oacute;n
            de informaci&oacute;n a terceros.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-zinc-900">
            6. Enlaces externos
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            La App puede contener enlaces que redirigen a sitios web externos. El
            desarrollador de la App no se responsabiliza de las pol&iacute;ticas
            de privacidad ni del contenido de dichos sitios, que se rigen por sus
            propias condiciones.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-zinc-900">
            7. Cambios en la pol&iacute;tica de privacidad
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Esta pol&iacute;tica puede actualizarse en el futuro para reflejar
            cambios en la App o en la normativa aplicable.
          </p>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Cualquier modificaci&oacute;n ser&aacute; publicada en esta misma
            secci&oacute;n, indicando la fecha de la &uacute;ltima
            actualizaci&oacute;n.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-zinc-900">
            8. Contacto
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Si tienes alguna duda sobre esta Pol&iacute;tica de Privacidad,
            puedes contactar con el desarrollador en:
          </p>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            📧{" "}
            <a
              href="mailto:hello@enzoferey.com"
              className="underline hover:text-zinc-900"
            >
              hello@enzoferey.com
            </a>
          </p>
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

export default PrivacyPolicyPage;
