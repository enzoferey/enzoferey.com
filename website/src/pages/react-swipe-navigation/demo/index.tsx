import React from "react";
import { NextPage } from "next";

const DemoPage: NextPage = (props) => {
  React.useEffect(() => {
    import("./package.js");
  }, []);

  return <div id="app" style={{ height: "100vh" }}></div>;
};

export default DemoPage;
