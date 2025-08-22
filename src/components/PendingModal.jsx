import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PendingModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Checkout
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Comming soon....</h4>
        <p>
          This feature is under development. Please check back later.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PendingModal;