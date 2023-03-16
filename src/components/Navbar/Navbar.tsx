import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { ROUTES } from "@/constants/routes";

import logo from "@/images/logo.webp";

interface Props {}

const activeLinkClassname =
  "bg-zinc-900 text-white rounded-md px-3 py-2 text-sm font-medium";
const nonActiveLinkClassname =
  "text-zinc-500 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";

const activeMobileLinkClassname =
  "bg-zinc-900 text-white block rounded-md px-3 py-2 text-base font-medium";
const nonActiveMobileLinkClassname =
  "text-zinc-500 hover:bg-zinc-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium";

export const Header: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const router = useRouter();

  return (
    <nav className="w-full">
      <div className="w-full relative flex items-center justify-start">
        <button
          type="button"
          className="grow-0 absolute left-0 sm:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => {
            setIsOpen((currentValue) => {
              return !currentValue;
            });
          }}
        >
          <span className="sr-only">Open main menu</span>

          <svg
            className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <svg
            className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex items-center justify-center flex-1 sm:flex-none sm:mr-8 sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href={ROUTES.HOME}
              aria-current={
                router.pathname === ROUTES.HOME ? "page" : undefined
              }
            >
              <Image
                alt=""
                src={logo}
                width="24"
                height="24"
                priority={true}
                quality={100}
              />
            </Link>
          </div>
        </div>

        <div className="hidden flex-1 sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Link
              href={ROUTES.HOME}
              className={
                router.pathname === ROUTES.HOME
                  ? activeLinkClassname
                  : nonActiveLinkClassname
              }
              aria-current={
                router.pathname === ROUTES.HOME ? "page" : undefined
              }
            >
              About me
            </Link>
            <Link
              href={ROUTES.TECH_LEAD_AS_A_SERVICE}
              className={
                router.pathname === ROUTES.TECH_LEAD_AS_A_SERVICE
                  ? activeLinkClassname
                  : nonActiveLinkClassname
              }
              aria-current={
                router.pathname === ROUTES.TECH_LEAD_AS_A_SERVICE
                  ? "page"
                  : undefined
              }
            >
              Tech lead as-a-service
            </Link>
            <Link
              href={ROUTES.PORTFOLIO}
              className={
                router.pathname === ROUTES.PORTFOLIO
                  ? activeLinkClassname
                  : nonActiveLinkClassname
              }
              aria-current={
                router.pathname === ROUTES.PORTFOLIO ? "page" : undefined
              }
            >
              Portfolio
            </Link>
          </div>
        </div>

        <a
          href="mailto:hello@enzoferey.com"
          className={`grow-0 absolute right-0 border border-solid border-zinc-200 hover:border-zinc-300 text-zinc-500 hover:text-zinc-700 rounded-md px-2 py-1 sm:px-3 sm:py-2 text-sm font-medium flex justify-start items-center`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="grow-0 w-6 h-6"
          >
            <path
              d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
              className="fill-zinc-100 stroke-zinc-400"
            ></path>
            <path
              d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
              className="stroke-zinc-400"
            ></path>
          </svg>
          <span className="ml-3 hidden md:block">Contact</span>
        </a>
      </div>

      <div
        className={`${isOpen ? "" : "hidden"} mt-6 sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link
            href={ROUTES.HOME}
            className={
              router.pathname === ROUTES.HOME
                ? activeMobileLinkClassname
                : nonActiveMobileLinkClassname
            }
            aria-current="page"
          >
            About me
          </Link>
          <Link
            href={ROUTES.TECH_LEAD_AS_A_SERVICE}
            className={
              router.pathname === ROUTES.TECH_LEAD_AS_A_SERVICE
                ? activeMobileLinkClassname
                : nonActiveMobileLinkClassname
            }
            aria-current="page"
          >
            Tech lead as-a-service
          </Link>
          <Link
            href={ROUTES.PORTFOLIO}
            className={
              router.pathname === ROUTES.PORTFOLIO
                ? activeMobileLinkClassname
                : nonActiveMobileLinkClassname
            }
          >
            Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
};
