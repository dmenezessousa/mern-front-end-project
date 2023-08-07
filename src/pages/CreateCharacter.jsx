import { useState } from "react";
import { createCharacter } from "../services/aotFetch";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CreateCharacter({setShowCreateToast}) {
  let navigate = useNavigate();

  const [createNewChar, setCreateNewChar] = useState({
    img: "",
    name: "",
    alias: [],
    species: [],
    gender: "",
    age: "",
    status: "",
    occupation: [],
    roles: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateNewChar((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log(createNewChar)
    e.preventDefault();
    await createCharacter(createNewChar);
    setShowCreateToast(true);
    navigate("/");
  };

  const handleBackBtn = () => {
    navigate("/");
  };

  return (
    <>
      <h1 className="char-page-title">Create Character</h1>
      <div className="create-char">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              name="img"
              placeholder="Enter Image"
              value={createNewChar.img}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={createNewChar.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Alias</Form.Label>
            <Form.Control
              type="text"
              name="alias"
              placeholder="Enter Alias (comma separated)"
              value={createNewChar.alias}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Species</Form.Label>
            <Form.Control
              type="text"
              name="species"
              placeholder="Enter Species (comma separated)"
              value={createNewChar.species}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              name="gender"
              placeholder="Enter Gender"
              value={createNewChar.gender}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              name="age"
              placeholder="Enter Age"
              value={createNewChar.age}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              name="status"
              placeholder="Enter Status"
              value={createNewChar.status}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Occupation</Form.Label>
            <Form.Control
              type="text"
              name="occupation"
              placeholder="Enter Occupation (comma separated)"
              value={createNewChar.occupation}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Roles</Form.Label>
            <Form.Control
              type="text"
              name="roles"
              placeholder="Enter Roles (comma separated)"
              value={createNewChar.roles}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="create-btn" variant="secondary" onClick={handleBackBtn}>
          Back
        </Button>
        <Button className="create-btn" variant="success" type="submit">
          Create
        </Button>
        </Form>
      </div>
    </>
  );
}
