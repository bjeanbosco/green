import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { LuDoorClosed, LuDownload } from "react-icons/lu";
import DecoratedList from "./decoratedList";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const handleDownloadHigh = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "/docs/GHA High School.pdf";
    link.setAttribute("download", "GHA High School.pdf");
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };
  const handleDownloadMiddle = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "/docs/GHA Middle School.pdf";
    link.setAttribute("download", "GHA Middle School.pdf");
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const handleDownloadGeneral = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "/docs/Green Hills Academy.pdf";
    link.setAttribute("download", "Green Hills Academy.pdf");
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className="flex flex-col gap-4">
        <div className=" pt-4 flex justify-between">
          <h3 className="font-bold italic text-primary">GHA Documents</h3>
        </div>
        <div>
          <div className="flex justify-between py-2 border-b items-center sm:flex-wrap">
            <DecoratedList color="#000" details="Green Hills Academy" />
            <motion.button
              onClick={handleDownloadGeneral}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: "#018c79",
                border: "1px solid var(--color-border)",
                color: "#fff",
              }}
              className="border rounded-lg gap-2 hover:bg-primary hover:border-[yellow] hover:text-white sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center"
            >
              Download
              <p>
                <LuDownload className="text-[yellow]" />
              </p>
            </motion.button>
          </div>
          <div className="flex justify-between py-2 border-b items-center sm:flex-wrap">
            <DecoratedList color="#000" details="GHA Middle School" />

            <motion.button
              onClick={handleDownloadMiddle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: "#018c79",
                border: "1px solid var(--color-border)",
                color: "#fff",
              }}
              className="border rounded-lg gap-2 hover:bg-primary hover:border-[yellow] hover:text-white sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center"
            >
              Download
              <p>
                <LuDownload className="text-[yellow]" />
              </p>
            </motion.button>
          </div>
          <div className="flex justify-between py-2 border-b items-center sm:flex-wrap">
            <DecoratedList color="#000" details="GHA High School" />
            <motion.button
              onClick={handleDownloadHigh}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: "#018c79",
                border: "1px solid var(--color-border)",
                color: "#fff",
              }}
              className="border rounded-lg gap-2 hover:bg-primary hover:border-[yellow] hover:text-white sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center"
            >
              Download
              <p>
                <LuDownload className="text-[yellow]" />
              </p>
            </motion.button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#000",
    backgroundColor: "#EAFBF3",
    maxWidth: "90vw",
    width: "auto",
    zIndex: 9999,
    borderRadius: "8px",
    padding: "20px",
  },
};
