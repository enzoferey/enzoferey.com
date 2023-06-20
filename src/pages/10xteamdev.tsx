import React from "react";
import { NextPage } from "next";

import { Layout } from "@/components/Layout";
import { Paragraph } from "@/components/Paragraph";
import { OrderedList } from "@/components/OrderedList";

const TenXTeamDevPage: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
        Technical Leadership for Young Teams 🚀
      </h1>

      <h3 className="mt-2 mb-8 text-xl font-medium tracking-tight text-zinc-500 sm:text-2xl">
        Fostering a culture of technical excellence. Setup your team for
        success.
      </h3>

      <Paragraph>
        It is not enough for a team to have skilled individuals. In order for
        technical teams to excel, there are many factors that need to align. The
        day-to-day friction needs to be as close to zero as possible.
      </Paragraph>

      <Paragraph>
        Architectures, libraries choices, PR reviews, branching strategy, CI
        pipelines, deployments, release management, automated tests, hotfixes,
        feature flags, rollbacks, ticket management, design handovers, business
        goals changes, documentation.
      </Paragraph>

      <Paragraph>
        All these topics are part of what we call “meta-development” and they
        are usually decided as after-thoughts because they don&apos;t directly
        provide value to the end users. However, they are the elements that
        introduce friction on a daily basis, making your team slower and
        ultimately losing their motivation to ship.
      </Paragraph>

      <Paragraph>
        Young teams usually start experiencing the effect of these decisions
        after shipping the MVP or when they start hiring more engineers to
        accelerate growth. What was once sacrificed for the sake of speed now
        creates all kinds of symptoms. Slow onboarding times, regressions, user
        complaints, decreased performance, lower energy levels, lack of
        visibility about production issues, single points of failure in the
        team, architectures not being respected, and many more.
      </Paragraph>

      <Paragraph>
        This is why I have founded{" "}
        <a
          href="https://www.10xteam.dev"
          className="font-medium text-[#2B98FF] underline"
        >
          10xTeam.dev
        </a>
        , the perfect copilot for your quest towards an excellent technical
        team. Let&apos;s build together.
      </Paragraph>

      {/*
      <div className="mt-9 mx-auto max-w-lg rounded-2xl border border-solid border-zinc-200 p-6">
        <h2 className="text-sm font-semibold text-zinc-900 flex justify-start items-center">
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
          I&apos;m currently offering a <u>free 30 minutes call</u> to discuss
          your needs.
          <br />I can&apos;t wait to hear from you!
        </p>
        <div className="w-full mt-6 flex">
          <a
            href="https://calendly.com/enzo-ferey/tech-lead-as-a-service"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70"
          >
            Book call
          </a>
        </div>

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
      */}
    </Layout>
  );
};

export default TenXTeamDevPage;
