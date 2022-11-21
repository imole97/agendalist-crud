import format from "date-fns/format";

const formatDateTime = (date, dateFormat = "yyyy/LL/dd") => {
    if (!date) {
      return "N/A";
    }
  
    let formatted;
  
    try {
      formatted = format(new Date(date), dateFormat);
    } catch {
      formatted = format(new Date(), dateFormat);
    }
  
    return formatted;
  };

  

  export {formatDateTime}