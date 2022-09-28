import React from "react";

import Swal from "sweetalert2";

const Button = () => {
  const handleBookmark = () => {
    Swal.fire("Good job!", "You Finished Your Exercise!", "success");
  };
  return (
    <div>
      <button onClick={handleBookmark} className='btn btn-primary'>
        Activity Completed
      </button>
    </div>
  );
};

export default Button;
