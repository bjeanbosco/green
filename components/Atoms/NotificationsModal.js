import React from "react";
import Modal from "react-modal";

const NotificationsModal = ({ isOpen, onRequestClose, upcomingEvents }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Upcoming Events"
      style={customStyles}
    >
      <div className="z-50">
        <h3 className="text-primary">Upcoming Events & News</h3>
        <ul>
          {upcomingEvents.map((event) => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default NotificationsModal;

const customStyles = {
  content: {
    top: "20%",
    left: "80%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "#000",
    maxWidth: "50vw", // Set 75% of the viewport width
    width: "100%", // Ensure the modal takes up the full width within 75vw
  },
};
