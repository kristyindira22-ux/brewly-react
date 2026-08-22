import { useState } from "react";

function Input({
  label,
  type = "text",
  placeholder,
  showToggle = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    showToggle && showPassword ? "text" : type;

  return (
    <div className="form-group">
      <label>{label}</label>

      <div className="input-wrapper">
        <input
          type={inputType}
          placeholder={placeholder}
        />

        {showToggle && (
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i
              className={
                showPassword
                  ? "bi bi-eye"
                  : "bi bi-eye-slash"
              }
            ></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;