import {useState} from 'react';
import { Form, Button } from "react-bootstrap"
//import { json } from "express";
const EditForm = ({theuser}) => {
  const id = theuser.id;

    const [name, setname] = useState(theuser.name);
    const [mobile, setmobile] = useState(theuser.mobile);
    const [address, setaddress] = useState(theuser.address);
    const [designation, setdesignation] = useState(theuser.designation);
    const handleSubmit = (e) => {
      e.preventDefault();
    }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) =>setname(e.target.value)}
        />
        </Form.Group>
        <br/>
        <Form.Group>
        <Form.Control
          type="text"
          value={mobile}
          placeholder="mobile"
          onChange={(e) => setmobile(e.target.value)}
        />
        </Form.Group>
        <br/>
        <Form.Group>
        <Form.Control
          type="text"
          value={designation}
          placeholder="designation"
          onChange={(e) => setdesignation(e.target.value)}
        />
        </Form.Group>
        <br/>
        <Form.Group>
        <Form.Control
          as="textarea"
          type="text"
          value={address}
          placeholder="address"
          onChange={(e) => setaddress(e.target.value)}
        />
        </Form.Group>
        <br/>
        <Button variant="success" type="submit" block>
        Edit Employee
        </Button>
      </form>
    </div>
  );
}
export default EditForm;