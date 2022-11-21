import React from "react";

const SearchIcon = ({className}) => {
  return (
    <>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9381 10.915L16.4215 15.3983C16.579 15.556 16.6675 15.7698 16.6674 15.9928C16.6674 16.2157 16.5787 16.4295 16.421 16.5871C16.2633 16.7446 16.0495 16.8331 15.8266 16.833C15.6036 16.833 15.3899 16.7443 15.2323 16.5866L10.749 12.1033C9.40871 13.1414 7.72335 13.6299 6.03573 13.4694C4.3481 13.309 2.78498 12.5117 1.66436 11.2396C0.543731 9.96763 -0.0502209 8.31648 0.00333027 6.62209C0.0568814 4.9277 0.753913 3.31735 1.95262 2.11864C3.15134 0.919928 4.76169 0.222897 6.45608 0.169346C8.15046 0.115795 9.80161 0.709746 11.0736 1.83037C12.3456 2.951 13.143 4.51412 13.3034 6.20174C13.4639 7.88937 12.9754 9.57473 11.9373 10.915H11.9381ZM6.66729 11.8325C7.99337 11.8325 9.26514 11.3057 10.2028 10.368C11.1405 9.43032 11.6673 8.15855 11.6673 6.83247C11.6673 5.50639 11.1405 4.23462 10.2028 3.29694C9.26514 2.35925 7.99337 1.83247 6.66729 1.83247C5.3412 1.83247 4.06944 2.35925 3.13175 3.29694C2.19407 4.23462 1.66729 5.50639 1.66729 6.83247C1.66729 8.15855 2.19407 9.43032 3.13175 10.368C4.06944 11.3057 5.3412 11.8325 6.66729 11.8325Z"
          fill="black"
          fillOpacity="0.5"
        />
      </svg>
    </>
  );
};

export default SearchIcon;