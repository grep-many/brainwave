import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
const ButtonGradient = React.lazy(() => import("./assets/svg/ButtonGradient"));
const Benefits = React.lazy(() => import("./components/Benefits"));
const Collaboration = React.lazy(() => import("./components/Collaboration"));

const App = () => (
  <React.Suspense fallback={<Loading />}>
    <Header />
    <Hero />
    <ButtonGradient />
    <Benefits />
    <Collaboration />
  </React.Suspense>
);

export default App;
