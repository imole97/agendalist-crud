import React, { useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AgendaContext } from "../context/AgendaContext";
import { formatDateTime } from "../utils/dateTimeHelper";
import EditAgendaModal from "./EdiitAgendaModal";
import CheckIcon from "./Icons/CheckIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import EditIcon from "./Icons/EditIcon";
import SuccessToast from "./SuccessToast";

const AgendaCard = ({ agenda, index }) => {
  let descriptionArray = agenda.description.split(" ");
  let description = descriptionArray.slice(0, 8).join(" ");
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  //   const [done, setDone] = useState(false);
  const { deleteAgenda, sortedAgendas, updateAgenda } =
    useContext(AgendaContext);

  //   console.log(done);

  const navigate = useNavigate();

  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenEditModal = () => {
    setOpenEdit(true);
  };

  const handleCloseEditModal = () => {
    setOpenEdit(false);
  };

  const handleDelete = (id) => {
    deleteAgenda(id);
    setDeleteSuccess(true);
  };

  const handleView = (id) => {
    navigate(`agenda/${id}`);
  };

  const handleDone = (id) => {
    sortedAgendas.map((agenda) => {
      if (agenda.id === id && agenda.status === "pending") {
        const update = {
          ...agenda,
          status: "done",
        };
        return updateAgenda(id, update);
      }
      if (agenda.id === id && agenda.status === "done") {
        const update = {
          ...agenda,
          status: "pending",
        };
        return updateAgenda(id, update);
      }
      return agenda;
    });
  };

  //   useEffect(() => {
  //     handleDone()
  //   },[]);

  return (
    <>
      <div
        className={`${
          agenda.status === "done" ? "bg-gray-400" : "bg-white"
        } shadow-2xl border-t-4 border-t-slate-700 p-2 min-h-[10rem] min-w-fit flex flex-col justify-between`}
      >
        <div
          className={`${
            agenda.status === "done" ? "bg-gray-400" : " bg-slate-100"
          }  p-2 rounded-md flex justify-between mb-2`}
        >
          <p className="text-sm">{agenda.title}</p>
          <button onClick={() => handleView(agenda.id)}>
            <p
              className={`text-xs ${
                agenda.status === "done" ? "text-black" : "text-blue-700"
              }`}
            >
              view
            </p>
          </button>
        </div>

        <p className="text-sm mb-2">{description + "..."}</p>

        <div>
          <div className="flex justify-between">
            <p className="text-sm">
              {formatDateTime(agenda.date, "EEE, MMM dd, yyyy")}
            </p>
            <div className="flex justify-end">
              <button
                className={`mr-2 ${
                  agenda.status === "done" ? "bg-green-400" : "bg-white"
                }`}
                onClick={() => handleDone(agenda.id)}
              >
                <CheckIcon className={``} />
              </button>
              <button className="mr-2" onClick={handleOpenEditModal}>
                <EditIcon className={"#685c68"} />
              </button>
              <button onClick={() => handleDelete(agenda.id)}>
                <DeleteIcon className={`${agenda.status==='done'?'#685c68':'#FF0000'}`} />
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
      <SuccessToast
        show={deleteSuccess}
        handleClose={() => setDeleteSuccess(false)}
        message={"Agenda deleted successfully"}
      />
    </>
  );
};

export default AgendaCard;

