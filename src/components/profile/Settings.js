import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axiosInstance from "../../axiosInstance";
import { useDispatch } from "react-redux";
import { getAuthUser } from "../rtk/Slices/user-slice";
import { Button } from "@mui/material";

function Settings({ auth }) {
  const [inputs, setInputs] = useState([{ value: "" }]);
  const [formData, setFormData] = useState({
    current_password: "",
    password: "",
    password_confirmation: "",
  });
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const addInput = () => {
    setInputs([...inputs, { value: "" }]);
  };

  const handleInputChange = (index, event) => {
    const newInputs = inputs.map((input, i) => {
      if (i === index) {
        return { value: event.target.value };
      }
      return input;
    });
    setInputs(newInputs);
  };
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("current_password", formData.current_password);
    form.append("password", formData.password);
    form.append("password_confirmation", formData.password_confirmation);

    try {
      await axiosInstance.put(`/user/${auth.data.id}/change_password`, form);

      dispatch(getAuthUser());
    } catch (error) {
      console.error(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else console.error("Change password failed:", error);

      if (error.response.status === 401) setErrors(error.response.data);
    }

    // Log form data to check values

    // Here you could send `form` to the server if needed
  };

  const removeInput = (index) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };
  const editHandel = () => {
    const editBtn = document.querySelector(".edit-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const saveBtn = document.querySelector(".save-btn");
    const pInfo = document.querySelector(".personal-info");
    const newBtn = document.querySelector(".address-container .new");
    const deleteBtn = document.querySelectorAll(".address-container .delete");
    pInfo.style.backgroundColor = "var(--blue-color-O)";
    editBtn.style.display = "none";
    newBtn.style.display = "block";
    deleteBtn.forEach((btn) => {
      btn.style.display = "block";
    });
    cancelBtn.style.display = "block";
    saveBtn.style.display = "flex";
    const inputs = document.querySelectorAll(".address-container input");

    inputs.forEach((i) => {
      i.disabled = false;
    });
  };

  const cancelHandel = () => {
    const editBtn = document.querySelector(".edit-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const saveBtn = document.querySelector(".save-btn");
    const pInfo = document.querySelector(".personal-info");
    const newBtn = document.querySelector(".address-container .new");
    const deleteBtn = document.querySelectorAll(".address-container .delete");
    pInfo.style.backgroundColor = "white";
    editBtn.style.display = "flex";
    cancelBtn.style.display = "none";
    newBtn.style.display = "none";
    deleteBtn.forEach((btn) => {
      btn.style.display = "none";
    });
    saveBtn.style.display = "none";
    const inputs = document.querySelectorAll(".address-container input");

    inputs.forEach((i) => {
      i.disabled = true;
    });
  };

  return (
    <div className="user settings">
      <div className="personal-info">
        <div>
          <p>Location</p>
          <button
            className="image-upload-btn edit-btn"
            onClick={() => editHandel()}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
            Edit
          </button>
          <button className="cancel-btn" onClick={() => cancelHandel()}>
            Cancel
          </button>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="address-container">
            <div>
              {inputs.map((input, index) => (
                <div className="in" key={index}>
                  <input
                    className="input"
                    type="text"
                    name={`address-${index}`}
                    id={`address-${index}`}
                    value={input.value}
                    onChange={(event) => handleInputChange(index, event)}
                    placeholder="Enter You Address"
                    disabled
                  />
                  <button className="delete" onClick={() => removeInput(index)}>
                    {" "}
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
              ))}
            </div>

            <button
              className="new image-upload-btn"
              onClick={() => (editHandel(), addInput())}
            >
              {" "}
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <button className="image-upload-btn save-btn">Apply Changes</button>
        </form>
      </div>
      <div className="personal-info">
        <div>
          <p>Change Password</p>
        </div>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="current-password">Current Password</label>
            <input
              className="input"
              type="password"
              name="current_password"
              id="current_password"
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <label htmlFor="new-password">New Password</label>
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm New Password</label>
            <input
              className="input"
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              onChange={handlePasswordChange}
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="image-upload-btn"
            disabled={
              formData.current_password === "" ||
              formData.password === "" ||
              formData.password_confirmation === ""
            }
          >
            Apply Changes
          </Button>{" "}
        </form>
        {errors.current_password && (
          <p className="danger">{errors.current_password}</p>
        )}
        {errors.password && <p className="danger">{errors.password}</p>}
        {errors.password_confirmation && (
          <p className="danger">{errors.password_confirmation}</p>
        )}
      </div>
      <div className="personal-info">
        <div className="ads">
          <input type="checkbox" name="ads" id="ads" />
          <label htmlFor="ads">
            I want to receive inspiration, marketing promotions and updates via
            email.
          </label>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{
            mt: 3,
            mb: 2,
            borderColor: "red",
            color: "red",
            ":hover": { borderColor: "red" },
            display: "flex",
            gap: "10px",
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
          <p style={{ marginBottom: "0" }}>Delete account</p>
        </Button>
      </div>
    </div>
  );
}

export default Settings;
