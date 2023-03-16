import React from "react";
import { NextPage } from "next";

import { Layout } from "@/components/Layout";
import { Paragraph } from "@/components/Paragraph";
import { OrderedList } from "@/components/OrderedList";

const TechLeadAsAServicePage: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
        Freelance Tech lead 🚀
      </h1>

      <h3 className="mt-2 mb-8 text-xl font-medium tracking-tight text-zinc-500 sm:text-2xl">
        A one-month program to setup your team for success
      </h3>

      <Paragraph>
        It is not enough for a team to have skilled individuals. In order for
        technical teams to excell, there are many factors that need to align.
        The day-to-day friction needs to be as close as zero as possible.
      </Paragraph>

      <Paragraph>
        Architectures, libraries choices, PR reviews, branching strategy, CI
        pipelines, deployments, release management, automated tests, hotfixes,
        feature flags, rollbacks, ticket management, design handovers, business
        goals changes, documentation.
      </Paragraph>

      <Paragraph>
        All these topics are part of what I call “meta-development” and they are
        usually decided as after-thoughts because they don&apos;t directly
        provide value to the end users. However, they are the elements that
        introduce friction on a daily basis making your team slower and
        ultimately lose their motivation to ship.
      </Paragraph>

      <Paragraph>
        Young teams usually start experiencing this after shipping the MVP or
        when they start hiring more engineers to accelerate the development of
        the product v1. What was sacrificed for the sake of speed now creates
        all kind of symptons. Slow onboarding times, regressions, users
        complaints, decreased performance, lower energy levels, lack of
        visibility about production issues, single points of failures in the
        team, architectures not being respected, and many more.
      </Paragraph>

      <Paragraph>
        Is your team on a similar spot? You are at the right the place, keep
        reading.
      </Paragraph>

      <Paragraph>
        After bootstrapping 50+ products on a wide range of markets and building
        10+ technical teams from the ground up, I have consolidated all my
        learnings into a one-month program where I will lead your team to
        success.
      </Paragraph>

      <Paragraph>This program consists of three steps:</Paragraph>

      <OrderedList>
        <span>
          1. Understand your business, build relationship with your team, and
          identify the friction points (~1 week).
        </span>
        <span>
          2. Cooperate with your team to deliver an autonomous system for
          developers to work within for the next year of growth (~2 weeks).
        </span>
        <span>
          3. Apply the designed system, assess its efficacity, and share the
          knowledge with the team (~1 week).
        </span>
      </OrderedList>

      <Paragraph>
        While I will request meeting some of the key players across your company
        to ensure a successful outcome, nobody will need to spend more than ~1
        hour per week. This means you can keep your business operating as usual
        and bringing direct value to your end users at the same time you get
        ready for the next milestone.
      </Paragraph>

      <div className="mt-9 mx-auto max-w-lg rounded-2xl border border-solid border-zinc-200 p-6">
        <h2 className="flex text-sm font-semibold text-zinc-900 flex justify-start items-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="grow-0 h-6 w-6"
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
          <span className="ml-3">Get in touch</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          For any more information or questions just reach out.
          <br />I can&apos;t wait to work with your team !
        </p>
        <div className="w-full mt-6 flex">
          <a
            href="mailto:hello@enzoferey.com"
            className="flex-1 flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70"
          >
            Email me
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default TechLeadAsAServicePage;
