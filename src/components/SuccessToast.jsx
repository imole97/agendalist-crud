import { Transition } from "@headlessui/react";


const SuccessToast = ({ message, show, handleClose }) => {
  return (
    <Transition show={show}>
      <div className="fixed z-[10000000000] top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25" />

      <div className="fixed z-[10000000001] top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 overflow-y-auto">
        <div className="flex items-center justify-center p-2 text-center">
          <Transition.Child
            enter="ease-out duration-200"
            enterFrom="scale-0"
            enterTo="scale-100"
            leave="ease-in duration-100"
            leaveFrom="scale-100"
            leaveTo="scale-0"
          >
            <div
              className="flex items-center  max-w-lg p-4 
        text-gray-500 bg-white rounded-lg shadow "
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="mx-3 text-sm font-normal">{message}</p>
              <button
                type="button"
                onClick={handleClose}
                className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400"
                aria-label="Close"
              >
                {/* <span className="sr-only">Close</span> */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Transition>
  );
};

export default SuccessToast;
