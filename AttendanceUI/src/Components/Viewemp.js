import React, { useState, useEffect } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'
//import bootstrap from 'bootstrap';
const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState({ blogs: [] });
    useEffect(() => {
        fetch("http://127.0.0.1:7000/attendance/showemp")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers({ blogs: data });
                    console.log(data)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [])
    
    const deleteEmployee = async (e) => {
        console.log(e)
        await fetch("http://127.0.0.1:7000/attendance/delemp", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                id:e.id
            })
        });
        window.location.reload(true);
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Mobileno</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.blogs && users.blogs.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.address}</td>
                                    <td>
                                    <OverlayTrigger
                                    overlay={
                                    <Tooltip id={`tooltip-top`}>
                                    Edit
                                    </Tooltip>
                                    }>
                                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                    overlay={
                                    <Tooltip id={`tooltip-top`}>
                                    Delete
                                    </Tooltip>
                                    }>
                                    <button onClick={() => deleteEmployee(user)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                                    </OverlayTrigger>
                                    </td>
                                    <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>
                                    Edit Employee
                                    </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <EditForm theuser={user} />
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                    Close Button
                                    </Button>
                                    </Modal.Footer>
                                    </Modal> 
                                </tr>
                                
                            ))
                        }
                    </tbody>
                </ReactBootStrap.Table>  
            </>
        );
    }
}
export default Home;