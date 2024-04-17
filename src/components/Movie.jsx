import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Modal, show, Button } from "react-bootstrap";
//Implements movie picture for the "categories" rows
const Movie = ({ item }) => {
  const [like, setLike] = useState([false]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <button
          className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center"
          onClick={handleShow}
        >
          {item?.title}
        </button>
        <p>
          {like ? (
            <FaHeart class="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart class="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
        <Modal
          show={show}
          onHide={handleClose}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div
              className="bg-white mx-auto rounded-lg shadow-lg z-50 overflow-hidden "
              style={{ width: "28rem" }}
            >
              <Modal.Header className="bg-gray-900 text-white">
                <Modal.Title></Modal.Title>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-white"
                ></button>
              </Modal.Header>
              <Modal.Body className="p-6">
                <img
                  className="w-full h-auto block mb-4 rounded"
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt={item.title}
                />
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>

                <h4 className="text-sm mb-1 flex items-end">
                  Rating: {item.vote_average}
                </h4>

                <h5 className="text-sm mb-1">
                  Release Date: {item.release_date}
                </h5>

                <h6 className="text-sm font-bold mb-2">Overview</h6>
                <p className="text-sm">{item.overview}</p>
                <Modal.Footer className="flex justify-end p-6">
                  <Button
                    onClick={handleClose}
                    className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal.Body>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Movie;
