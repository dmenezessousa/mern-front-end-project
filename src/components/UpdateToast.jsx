import Toast from "react-bootstrap/Toast";

export default function UpdateToast({ showUpdateToast, setShowUpdateToast }) {

  return (
    <Toast
    bg="success"
    position="top-center"
    onClose={() => setShowUpdateToast(false)}
    show={showUpdateToast}
    delay={3000}
    autohide
    style={{
      position: "fixed",
      top: "calc(50px + 1rem)",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1000, 
    }}
  >
    <Toast.Header>
      <strong className="me-auto">Character Updated</strong>
    </Toast.Header>
    <Toast.Body>The character has been successfully Updated.</Toast.Body>
  </Toast>
  );
}
