import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AgendaContext } from "../context/AgendaContext";
import { formatDateTime } from "../utils/dateTimeHelper";
import ExportIcon from "../components/Icons/ExportIcon";
import { useReactToPrint } from "react-to-print";

const AgendaDetails = () => {
  const { sortedAgendas } = useContext(AgendaContext);
  const { id } = useParams();
  const agenda = sortedAgendas.filter((agenda) => agenda.id === id);
  const agendaRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => agendaRef.current,
    documentTitle: "vouchers-report",
  });
  return (
    <>
      <div className="bg-slate-200 h-[1000px] p-20 phone-mini:p-2 sm:p-10 lg:p-20">
        <div
          className="flex justify-center m-6 bg-white rounded-xl p-8 phone-mini:p-2 "
          ref={agendaRef}
        >
          {agenda.map((a) => {
            return (
              <div key={a.id}>
                <h1 className="uppercase flex justify-center mb-10 phone-mini:text-3xl sm:text-4xl">
                  {a.title}
                </h1>
                <p className="m-2 text-2xl mb-10 phone-mini:text-xl">
                  {formatDateTime(a.date, "EEEE, MMMM dd, yyyy")}
                </p>
                <p className="m-2 text-justify mb-10">{a.description}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            className="p-1 px-2 ml-4 rounded-md text-[#C96FCC] bg-[#ffe583] shadow-md hover:shadow-sm flex items-center"
            type="button"
            onClick={handlePrint}
          >
            <span className="flex items-center">
              <ExportIcon />
              <p className="pl-2">Export PDF</p>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AgendaDetails;
