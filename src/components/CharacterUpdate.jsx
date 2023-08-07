import { updateCharacterById } from "../services/aotFetch";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CharacterUpdate({
  setEditable,
  setCharById,
  charById,
  setShowUpdateToast,
}) {
  let { id } = useParams();
  const newCharImg = charById.img?.split("revision")[0];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharById((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!charById) {
      return;
    }

    const updated = await updateCharacterById(id, charById);
    setCharById(updated);
    setEditable(false);
    setShowUpdateToast(true);
  };

  const handleBackBtn = () => {
    setEditable(false);
  };
  return (
    <>
      <div className="char-container">
        <h2 className="char-title" >{charById.name}</h2>
        <div className="char-info-container">
          <img src={newCharImg} alt={charById.name} />
          <div className="char-info">
      <Form.Label htmlFor="name">Name: </Form.Label>
      <Form.Control
        type="text"
        name="name"
        id="name"
        value={charById?.name || ""}
        onChange={handleChange}
      />
      <Form.Label htmlFor="age">Age: </Form.Label>
      <Form.Control
        type="text"
        name="age"
        id="age"
        value={charById?.age || ""}
        onChange={handleChange}
      />
      <Form.Label htmlFor="gender">Gender: </Form.Label>
      <Form.Control
        type="text"
        name="gender"
        id="gender"
        value={charById?.gender || ""}
        onChange={handleChange}
      />
      <Form.Label htmlFor="species">Species: </Form.Label>
      <Form.Control
        type="text"
        name="species"
        id="species"
        value={charById?.species || ""}
        onChange={handleChange}
      />
      <Form.Label htmlFor="occupation">occupation: </Form.Label>
      <Form.Control
        type="text"
        name="occupation"
        id="occupation"
        value={charById?.occupation || ""}
        onChange={handleChange}
      />
      <Form.Label htmlFor="status">Status: </Form.Label>
      <Form.Control
        type="text"
        name="status"
        id="status"
        value={charById?.status || ""}
        onChange={handleChange}
      />
      <Form.Label htmlFor="img">Image: </Form.Label>
      <Form.Control
        type="text"
        name="img"
        id="img"
        value={newCharImg}
        onChange={handleChange}
      />
          </div>
        </div>
      </div>
      <div className="char-details-btn">
        <Button variant="secondary" onClick={handleBackBtn}>Back</Button>
        <Button variant="success"  onClick={handleSubmit}>Update</Button>
      </div>        
    </>
  );
}
