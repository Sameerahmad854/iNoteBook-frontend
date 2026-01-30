import React from "react";

function Alert({ alert }) {
  const capitalize = (word) => {
    if (!word) return "";

    // 'danger' ko 'error' mein convert kar rahe hain
    if (word === "danger") {
      word = "error";
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
