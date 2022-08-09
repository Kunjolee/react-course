import React from "react";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import FormContact from "./FormContact";
import SongSearch from "./SongSearch";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  const [isOpen1, openModal1, closeModal1] = useModal(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Modals</h2>
      <button onClick={openModal1}>Modal1</button>
      <Modal isOpen={isOpen1} closeModal={closeModal1}>
        <h3>Primer modal</h3>
        <p>Contenido del primer modal</p>
        <img src="https://placeimg.com/400/400/animals" alt="animals" />
      </Modal>
      <button onClick={openModal2}>Modal2</button>
      <Modal isOpen={isOpen2} closeModal={closeModal2}>
        <h3>Segundo modal</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis velit
          inventore perspiciatis cupiditate similique animi modi quod asperiores
          porro expedita delectus harum reprehenderit soluta aliquid vel vitae,
          sunt atque odio.
        </p>
        <img src="https://placeimg.com/400/400/tech" alt="tech" />
      </Modal>
      <button onClick={openModalContact}>Modal Contact</button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <FormContact />
      </Modal>
      <button onClick={openModalSong}>Modal Song</button>
      <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
        <SongSearch />
      </Modal>
      <button onClick={openModalPortal}>Modal usando portales</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Portal Modal</h3>
        <p>Definicion: Insertar contenido dinamico JSX en otro nodo del DOM</p>
        <p>
          Usualmente los portales se usan para ventanas modales, loaders, o
          contenido que quiero que aparezca dinamicamente en otro nodo del DOM
          en vez del nodo principal que se esta utilizando
        </p>
        <p>Se debe usar REACT DOM y la funcion createFragment</p>
        <img src="https://placeimg.com/400/400/tech" alt="tech" />
      </ModalPortal>
    </div>
  );
};

export default Modals;
