import { forwardRef } from "react";
import { formatDateTime } from "../utils/dateTimeHelper";

const CustomDateInput = forwardRef((props, ref) => {
    const { value, onChange, onClick } = props;
  
    return (
      <input
        value={formatDateTime(new Date(value), "EEEE, MMM dd, yyyy")}
        onChange={onChange}
        onClick={onClick} //to trigger calenda open
        className=" border rounded-md block w-full text-center bg-transparent  px-5 mr-1 py-[12px]"
        ref={ref}
      />
    );
  });

export default CustomDateInput 