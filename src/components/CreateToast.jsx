import Toast from "react-bootstrap/Toast";

export default function CreateToast({ showCreateToast, setShowCreateToast }) {

  return (
    <Toast
    bg="success"
    position="top-center"
    onClose={() => setShowCreateToast(false)}
    show={showCreateToast}
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
      <strong className="me-auto">Character Created</strong>
    </Toast.Header>
    <Toast.Body>The character has been successfully Created!.</Toast.Body>
  </Toast>
  );
}
