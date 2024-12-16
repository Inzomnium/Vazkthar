import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Modal = ({ img, title, showModal, closeModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal} // Cierra el modal al hacer click en el overlay
        >
          <motion.div
            className="modal-content"
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.5 } }}
            exit={{ y: '100vh', opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer click en el contenido
          >
            <img src={img} alt={title} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
