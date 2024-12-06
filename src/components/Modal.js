import React, { useState } from 'react';
import { motion, AnimatePresence  } from "framer-motion";


function generateRandomKey() {
    return Math.random().toString(36).substr(2, 9);
  }

function Modal({img, title}) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    
    return (
        <>
        
                <motion.button                     
                      
                        onClick={openModal}
                        className={showModal ? "imagen-desactivada img-base" : "imagen-activa img-base"}
                        key={generateRandomKey()}
                        > 
                 <img src={img} alt={title} />
                 <h1>{title}</h1>
                </motion.button>
            <AnimatePresence>                {showModal && (
                   <motion.div
                    className='model-open'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    >
                          
                            <motion.button
                             initial={{ y: '100vh', opacity: 0 }}
                             animate={{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.5 } }}
                             exit={{ y: '100vh', opacity: 0, transition: { type: 'spring', stiffness: 100, damping: 20, duration: 2 } }}
                             onClick={closeModal}
                            className="modal-abierto"
                            >
                                <img src={img} alt={title} />
                            
                            </motion.button>
                         
                   </motion.div>
                )}
                </AnimatePresence>

                </>

    );
}

export default Modal;