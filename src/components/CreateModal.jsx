import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import React, { Fragment, useState, useContext } from "react";
import DatePicker from "react-datepicker";
import { agendaSchema, agendaSchemaInit } from "../utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomDateInput from "./CustomDateInput";
import CalendarIcon from "./Icons/CalendarIcon";
import Button from "./Button";
import SuccessToast from "./SuccessToast";
import { v4 as uuidv4 } from "uuid";
import { AgendaContext } from "../context/AgendaContext";

const CreateModal = ({ show, onClose = () => {}, setShow }) => {
  const uuid = uuidv4;
  const { addAgenda } = useContext(AgendaContext);

  const [activeDate, setActiveDate] = useState(new Date().toISOString());
  const [showCreateSuccess, setShowCreateSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(agendaSchema),
    defaultValues: {
      ...agendaSchemaInit,
      status: "pending",
      date: activeDate,
    },
  });

  const handleSuccessClose = () => {
    setShowCreateSuccess(false);
    setShow(false);
  };

  const submitAgenda = (values) => {
    const newAgenda = {
      ...values,
      id: uuid(),
    };
    addAgenda(newAgenda);
    setShowCreateSuccess(true);
  };
  return (
    <>
      <Transition show={show} appear as={Fragment}>
        <Dialog as="div" className="relative z-[10000]" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm max-h-[90vh] text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="px-4 py-4">
                    <div className="flex justify-between items-center mb-6">
                      <p>Creat An Agenda</p>
                      <button
                        className="border border-gray-400 text-[9px] bg-gray-300 rounded-full px-[0.3rem]"
                        onClick={onClose}
                      >
                        x
                      </button>
                    </div>
                    <form onSubmit={handleSubmit(submitAgenda)}>
                      <div>
                        <label className="text-[.8rem]">Title</label>
                      </div>
                      <div className="mb-4">
                        <input
                          name={"title"}
                          {...register("title")}
                          type="text"
                          className="border border-app-purple-4 rounded-md w-full p-1"
                        />
                        {errors ? (
                          <p className="text-red-600 text-xs">
                            {errors?.title?.message}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <label className="text-[.8rem]">Description</label>
                      </div>
                      <div className="mb-4">
                        <textarea
                          name={"description"}
                          {...register("description")}
                          type="text"
                          rows="5"
                          className="border border-app-purple-4 rounded-md w-full p-1"
                        />
                        {errors ? (
                          <p className="text-red-600 text-xs">
                            {errors?.description?.message}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <label className="text-[.8rem]">Date</label>
                      </div>
                      <div className="relative z-50 mb-4">
                        <span
                          role="presentation"
                          className="absolute left-0 scale-75 translate-x-1 top-2/4 -translate-y-2/4"
                        >
                          <CalendarIcon />
                        </span>
                        <DatePicker
                          placeholderText="Select a date"
                          selected={new Date(activeDate)}
                          onChange={(date) => setActiveDate(date.toISOString())}
                          customInput={<CustomDateInput />}
                        />
                        {errors ? (
                          <p className="text-red-600 text-xs">
                            {errors?.date?.message}
                          </p>
                        ) : null}
                      </div>
                      <div className="flex justify-end">
                        <Button
                          type="submit"
                          className="bg-sec-alt-500 px-3 py-2"
                        >
                          Create
                        </Button>
                      </div>
                    </form>
                  </div>
                  <SuccessToast
                    show={showCreateSuccess}
                    handleClose={handleSuccessClose}
                    message={"Agenda created successfully"}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreateModal;
