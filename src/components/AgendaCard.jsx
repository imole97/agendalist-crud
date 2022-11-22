import React, { useState } from "react";
import { useContext } from "react";
import { AgendaContext } from "../context/AgendaContext";
import { formatDateTime } from "../utils/dateTimeHelper";
import EditAgendaModal from "./EdiitAgendaModal";
import DeleteIcon from "./Icons/DeleteIcon";
import EditIcon from "./Icons/EditIcon";
const AgendaCard = ({ agenda, index }) => {
  let descriptionArray = agenda.description.split(" ");
  let description = descriptionArray.slice(0, 8).join(" ");
  const { deleteAgenda } = useContext(AgendaContext);

  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenEditModal = () => {
    setOpenEdit(true);
  };

  const handleCloseEditModal = () => {
    setOpenEdit(false);
  };

 
  return (
    <>
      <div
       
        className={`bg-white shadow-2xl border-t-4 border-t-slate-700 p-2 h-[10rem] flex flex-col justify-between`}
      >
        
        <p className="p-2 rounded-md bg-slate-100">{agenda.title}</p>


        <p className="text-sm m-0">{description + "..."}</p>

        <div>
          <div className="flex justify-between">
            <p className="text-sm">
              {formatDateTime(agenda.date, "EEE, MMM dd, yyyy")}
            </p>
            <div className="flex justify-end">
              <button className="mr-2" onClick={handleOpenEditModal}>
                <EditIcon className={"#0000FF"} />
              </button>
              <button onClick={() => deleteAgenda(agenda.id)}>
                <DeleteIcon className={"#FF0000"} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {openEdit && (
        <EditAgendaModal
          agenda={agenda}
          onClose={handleCloseEditModal}
          show={openEdit}
          setShow={setOpenEdit}
        />
      )}
    </>
  );
};

export default AgendaCard;
