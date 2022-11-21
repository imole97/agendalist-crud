import * as yup from "yup";


const agendaSchema = yup
.object()
.shape({
    title: yup.string().trim().required("Agenda title is required"),
    description: yup.string().trim().required("Agenda description is required"),
    date: yup.string().required("Select a date for agenda"),
    status: yup.string().optional()
})

const agendaSchemaInit = {
    title: "",
    description: "",
    date: "",
    status: ""
}

export {agendaSchema, agendaSchemaInit}