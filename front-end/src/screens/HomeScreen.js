import React, { useEffect, useState } from "react";
import services from "../services";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Modal, Button } from "react-bootstrap";

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchPosts = async () => {
    try {
      const data = await services.getAllPosts();
      setPosts(data.data);
    } catch (error) {
      alert("Failed to fetch posts.");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const columns = [
    { dataField: "id", text: "Post ID" },
    { dataField: "title", text: "Post title" },
    { dataField: "createdDate", text: "Date created" },
  ];

  const rowEvents = {
    onClick: (e, row) => {
      console.log(row);
      setModalInfo(row);
      toggleTrueFalse();
    },
  };

  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Post information:</h1>
          <h3>{modalInfo.body}</h3>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className="App">
      <br />
      <br />
      <h1 id="centered">Table for posts</h1>
      <br />
      <br />
      <BootstrapTable
        hover
        className=".table-hover"
        keyField="id"
        data={posts}
        columns={columns}
        pagination={paginationFactory()}
        rowEvents={rowEvents}
      />

      {show ? <ModalContent /> : null}
    </div>
  );
};

export default HomeScreen;
