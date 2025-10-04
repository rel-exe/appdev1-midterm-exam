import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import MainBanner from "./components/MainBanner";
import Services from "./components/Services";
import About from "./components/Abouts";
import Clients from "./components/Clients";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <Header onToggleModal={() => setToggleModal(!toggleModal)} />
      {toggleModal && <Modal onClose={() => setToggleModal(false)} />}
      <MainBanner />
      <About />
      <Services />
      <Pricing />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
