import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { App } from "./App";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import reportWebVitals from "./reportWebVitals";
import { SkeletonTheme } from "react-loading-skeleton";
import { colors } from "./ui/colors";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <SkeletonTheme baseColor={colors.gray200} highlightColor={colors.gray300}>
    <RecoilRoot>
      <React.Suspense>
        <App />
      </React.Suspense>
    </RecoilRoot>
  </SkeletonTheme>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
