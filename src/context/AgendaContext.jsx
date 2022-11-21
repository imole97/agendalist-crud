import { useState,createContext, useEffect } from "react";


export const AgendaContext = createContext({
    agendas: [],
    setAgendas: () => {}
})


const AgendaProvider = ({children}) => {

    const [agendas, setAgendas] = useState([])

    useEffect(() => {
        const json = localStorage.getItem("agendas");
        const loadedAgendas = JSON.parse(json);
        loadedAgendas ? setAgendas(loadedAgendas) : setAgendas([]);
    }, []);

    useEffect(() => {
        if(agendas?.length){ //only store state if agendas exist and is greater than one
            const json = JSON.stringify(agendas);
            localStorage.setItem("agendas", json);
        }
    }, [agendas]);

    const addAgenda = (newAgenda) => {
        setAgendas([...agendas, newAgenda])
    }

    const deleteAgenda = (id) => {
        const updatedAgenda = agendas.filter(agenda => agenda.id !== id)
        setAgendas(updatedAgenda)
        
    }

    const updateAgenda = (id, updatedAgenda) => {
        const updatedAgendas = agendas.map(agenda => agenda.id === id? updatedAgenda:agenda)
        setAgendas(updatedAgendas)
    }

    const sortedAgendas = agendas.sort((a, b) =>
            a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
    )

    const value = { sortedAgendas, addAgenda, deleteAgenda, updateAgenda, setAgendas };

    return(
        <AgendaContext.Provider value={value}>
            {children}
        </AgendaContext.Provider>
    )

}

export default AgendaProvider