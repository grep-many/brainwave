import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
const ButtonGradient = React.lazy(() => import("./assets/svg/ButtonGradient"));
const Benefits = React.lazy(() => import("./components/Benefits"));
const Collaboration = React.lazy(() => import("./components/Collaboration"));
const Services = React.lazy(() => import("./components/Services"));
const Pricing = React.lazy(() => import("./components/Pricing"));

const App = () => (
  <>
    <Header />
    <Hero />
    <React.Suspense fallback={<Loading />}>
      <ButtonGradient />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
    </React.Suspense>
  </>
);

export default App;
