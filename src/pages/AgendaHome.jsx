import React, { useState } from "react";
import Button from "../components/Button";
import CreateModal from "../components/CreateModal";
import { useContext } from "react";
import { AgendaContext } from "../context/AgendaContext";
import AgendaCard from "../components/AgendaCard";


const AgendaHome = () => {
  const { sortedAgendas } = useContext(AgendaContext);

  const [openCreate, setOpenCreate] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredAgenda =
    searchValue.trim() === ""
      ? sortedAgendas
      : sortedAgendas.filter((agenda) => {
          return agenda.title.toLowerCase().includes(searchValue.toLowerCase());
        });

  console.log(filteredAgenda);

  const handleOpenModal = () => {
    setOpenCreate(true);
  };

  const handleCloseModal = () => {
    setOpenCreate(false);
  };

 

  return (
    <>
      <div className="m-10">
        <div className="bg-slate-100 rounded-lg p-3">
          <p className="font-semibold text-3xl flex justify-center mb-6">
            AGENDA LIST
          </p>
          <div className="flex justify-center mb-4">
            <Button className="bg-sec-alt-600 px-3" onClick={handleOpenModal}>
              Create Agenda
            </Button>
          </div>

          <div className="relative flex justify-center">
            <input
              name="Search"
              id="search"
              type="text"
              className="search"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="card">
          {filteredAgenda.map((agenda, index) => (
           
            <AgendaCard agenda={agenda} index={index} key={agenda.id} />
            
          ))}
        </div>

        {openCreate && (
          <CreateModal
            onClose={handleCloseModal}
            show={openCreate}
            setShow={setOpenCreate}
          />
        )}
      </div>
    </>
  );
};

export default AgendaHome;
