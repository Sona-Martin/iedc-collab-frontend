import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ModalBody } from "react-bootstrap";
import "./JoinTeamModal.scss";
import bubble9 from "../../assets/bubble_9.svg";
import bubble10 from "../../assets/bubble_10.svg";
import bubble11 from "../../assets/bubble_11.svg";
import sendPaperPlane from "../../assets/sendPaperPlane.svg";
import closeButton from "../../assets/close.svg";
import { useEffect, useState } from "react";
import { getUser, sendRequest } from "../../Firebase/firebase";
import axios from "axios";

const JoinTeamModal = ({ user, project, ...props }) => {
  console.log(user);
  const [message, setMessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      sender: user.displayName,
      sender_id: user.uid,
      sender_img: user.photoURL,
      receiver: project.leader_name,
      receiver_id: project.leader_id,
      receiver_img: project.leaderImg,
      project_id: project.id,
      project: project.name,
      status: "pending",
      message: message,
      createdAt: Date.now(),
    };
    sendRequest(data);
    await axios.post(
      "https://w2e9j471i2.execute-api.ap-south-1.amazonaws.com/dev/send-email",
      {
        toEmail: project.leaderEmail,
        subject: `Request to Join Team of ${project.name} from IEDC Collab`,
        content: message,
      }
    );
  };
  return (
    <>
      <Modal {...props} size="xl" className="join-team-modal" centered>
        <img src={bubble9} alt="" className="bubble_9" />
        <img src={bubble10} alt="" className="bubble_10" />
        <img src={bubble11} alt="" className="bubble_11" />
        <div className="rectangle-decoration top-rectangles">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
        </div>
        <div className="rectangle-decoration bottom-rectangles">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
        </div>

        <div className="close-button" onClick={props.onHide}>
          <img
            alt="close"
            src={closeButton}
            onClick={props.onHide}
            className="close-button"
          />
        </div>

        <ModalBody className="join-team-modal__body">
          <form onSubmit={onSubmit}>
            <h1 className="join-team-modal__title">Join Project Request</h1>
            <div className="message">
              <p className="message__label">Message</p>
              <textarea
                id="message__text"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <Button
              variant=""
              type="submit"
              className="btn"
              onClick={(event) => {
                onSubmit(event).then(() => {
                  props.onHide();
                });
              }}
            >
              <p>Send</p>
              <img src={sendPaperPlane} alt="" className="" />
            </Button>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default JoinTeamModal;
