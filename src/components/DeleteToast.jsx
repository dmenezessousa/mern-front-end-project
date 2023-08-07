import Toast from "react-bootstrap/Toast";

export default function UpdateToast({ showDeleteToast, setShowDeleteToast }) {

  return (
    <Toast
    bg="danger"
    position="top-center"
    onClose={() => setShowDeleteToast(false)}
    show={showDeleteToast}
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
      <strong className="me-auto">Character Deleted</strong>
    </Toast.Header>
    <Toast.Body>The character has been successfully Deleted.</Toast.Body>
  </Toast>
  );
}
