import React from "react";
import { useContext } from "react";
import { AgendaContext } from "../context/AgendaContext";
import { formatDateTime } from "../utils/dateTimeHelper";
import DeleteIcon from "./Icons/DeleteIcon";
import EditIcon from "./Icons/EditIcon";
const AgendaCard = ({ agendaList }) => {
  const { deleteAgenda } = useContext(AgendaContext);

  const colors = [
    {
      primary: "#5D93E1",
      secondary: "#ECF3FC",
    },
    {
      primary: "#F9D288",
      secondary: "#FEFAF1",
    },
    {
      primary: "#5DC250",
      secondary: "#F2FAF1",
    },
    {
      primary: "#F48687",
      secondary: "#FDF1F1",
    },
    {
      primary: "#B964F7",
      secondary: "#F3F0FD",
    },
  ];
  return (
    <>
      {agendaList.map((agenda, index) => {
        let descriptionArray = agenda.description.split(" ");
        let description = descriptionArray.slice(0, 8).join(" ");

        return (
          <div
            key={agenda.id}
            className={`bg-white shadow-2xl border border-t-[#B964F7] p-1 h-[10rem] flex flex-col justify-between`}
          >
            <p>{agenda.title}</p>

            <p className="text-sm m-0">{description + "..."}</p>

            <div>
              <div className="flex justify-between">
                <p className="text-sm">
                  {formatDateTime(agenda.date, "EEE, MMM dd, yyyy")}
                </p>
                <div className="flex justify-end">
                  <button className="mr-2">
                    <EditIcon className={"#B964F7"} />
                  </button>
                  <button onClick={() => deleteAgenda(agenda.id)}>
                    <DeleteIcon className={"#B964F7"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AgendaCard;
