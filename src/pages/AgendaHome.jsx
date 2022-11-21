import React, { useState } from "react";
import Button from "../components/Button";
import CreateModal from "../components/CreateModal";
import { useContext } from "react";
import { AgendaContext } from "../context/AgendaContext";
import SearchIcon from "../components/Icons/SearchIcon";
import AgendaCard from "../components/AgendaCard";

const AgendaHome = () => {

  const {sortedAgendas} = useContext(AgendaContext)

  const [openCreate, setOpenCreate] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {

    setSearchValue(e.target.value)

  }

  const filteredAgenda =
  searchValue.trim() === ""
    ? sortedAgendas
    : sortedAgendas.filter((agenda) => {
        return agenda.title.toLowerCase().includes(searchValue.toLowerCase());
      });

console.log(filteredAgenda)

  const handleOpenModal = () => {
    setOpenCreate(true);
  };

  const handleCloseModal = () => {
    setOpenCreate(false);
  };

  return (
    <>
      <div className="m-10">
        <p className="font-semibold text-3xl flex justify-center mb-6">
          AGENDA LIST
        </p>
        <div className="flex justify-center mb-4">
          <Button className="bg-sec px-3" onClick={handleOpenModal}>
            Create Agenda
          </Button>
        </div>

        <div className="relative flex justify-center">
          <SearchIcon
            className={"absolute top-[12px] left-[300px] width-[14px] mr-2"}
          />
          <input
            name="Search"
            id="search"
            type="text"
            className="border border-[#8C1696] outline-0 outline-none rounded-2xl bg-white pl-8 text-sm py-2"
            placeholder="Search for agenda"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>

        <div className="grid grid-cols-4 gap-2">
          <AgendaCard agendaList={filteredAgenda}/>
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
