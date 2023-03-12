import React from "react";

import { Container } from "@/components/Container";
import { Header } from "@/components/Navbar";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <header className="mt-9">
        <Container>
          <Header />
        </Container>
      </header>
      <main className="mt-16 mb-16">
        <Container>{children}</Container>
      </main>
    </React.Fragment>
  );
};
