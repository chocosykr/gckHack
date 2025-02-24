const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-amber-800 ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          {/* <div>{children}</div> */}
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  