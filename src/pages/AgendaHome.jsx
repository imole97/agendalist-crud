import React, { useState } from "react";
import Button from "../components/Button";
import CreateModal from "../components/CreateModal";
import { useContext } from "react";
import { AgendaContext } from "../context/AgendaContext";
import SearchIcon from "../components/Icons/SearchIcon";
import AgendaCard from "../components/AgendaCard";
import { Link } from "react-router-dom";

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
        <div>
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
              className={"absolute top-[12px] left-[33.5rem] width-[14px] mr-2"}
            />
            <input
              name="Search"
              id="search"
              type="text"
              className="border border-[#8C1696] outline-0 outline-none rounded-2xl bg-white w-[15rem] pl-8 text-sm py-2 search"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 m-8">
          {filteredAgenda.map((agenda, index) => (
            <Link to>
            <AgendaCard agenda={agenda} index={index} key={agenda.id} />
            </Link>
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
