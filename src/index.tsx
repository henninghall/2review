import React from "react";
import ReactDOM from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { RecoilRoot } from "recoil";
import { App } from "./App";
import "./index.css";
import { PullRequestProvider } from "./pull-request/PullRequestProvider";
import reportWebVitals from "./reportWebVitals";
import { colors } from "./ui/colors";
import Favicon from "react-favicon";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <SkeletonTheme baseColor={colors.gray300} highlightColor={colors.gray400}>
    <RecoilRoot>
      <React.Suspense>
        <PullRequestProvider>
          <App />
          <Favicon url="http://localhost:3000/favicon-yellow-dot.ico" />
          {/* <Favicon url="http://oflisback.github.io/react-favicon/img/github.ico" /> */}
        </PullRequestProvider>
      </React.Suspense>
    </RecoilRoot>
  </SkeletonTheme>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
