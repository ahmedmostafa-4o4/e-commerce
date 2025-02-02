import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsSpin,
  faPenToSquare,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import axiosInstance from "../../axiosInstance";
import { getAuthUser } from "../rtk/Slices/user-slice";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
function User({ auth }) {
  const [formData, setFormData] = useState({
    name: auth.data.name,
    email: auth.data.email,
    phone_number: auth.data.phone_number,
    image: "",
  });
  const editHandel = () => {
    const editBtn = document.querySelector(".edit-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const saveBtn = document.querySelector(".save-btn");
    const pInfo = document.querySelector(".personal-info");
    pInfo.style.backgroundColor = "var(--blue-color-O)";
    editBtn.style.display = "none";
    cancelBtn.style.display = "block";
    saveBtn.style.display = "flex";
    const inputs = document.querySelectorAll(".personal-info input");

    inputs.forEach((i) => {
      i.disabled = false;
    });
  };

  const [errors, setErrors] = useState([]);

  const cancelHandel = () => {
    const editBtn = document.querySelector(".edit-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const saveBtn = document.querySelector(".save-btn");
    const pInfo = document.querySelector(".personal-info");
    pInfo.style.backgroundColor = "white";
    editBtn.style.display = "flex";
    cancelBtn.style.display = "none";
    saveBtn.style.display = "none";
    const inputs = document.querySelectorAll(".personal-info input");

    inputs.forEach((i) => {
      i.disabled = true;
    });

    setErrors([]);

    setFormData({
      name: auth.data.name,
      email: auth.data.email,
      phone_number: auth.data.phone_number,
    });
  };

  const imageRef = useRef();
  const img = useRef();
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("image", formData.image);
    form.append("phone_number", +formData.phone_number);
    form.append("_method", "PUT");

    try {
      await axiosInstance.post(`/user/${auth.data.id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(getAuthUser());
    } catch (error) {
      console.error(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else console.error("Registration failed:", error);

      if (error.response.status === 401) setErrors(error.response.data);
    }

    // Log form data to check values

    // Here you could send `form` to the server if needed
  };

  return (
    <div className="user">
      <div className="user-image">
        <img
          src={`${
            auth.data.image
              ? `${process.env.REACT_APP_IMAGE_BASE_URL}${auth.data.image}`
              : "/images/default-user.jpg"
          }`}
          ref={img}
          alt=""
        />
        <div>
          <input
            type="file"
            name="image"
            hidden
            id="profile-image"
            ref={imageRef}
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                image: e.target.files[0],
              }));
              img.current.src = URL.createObjectURL(e.target.files[0]);
            }}
          />
          <div>
            <button
              className="image-upload-btn"
              onClick={() => document.getElementById("profile-image").click()}
            >
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeWidth="2"
                  stroke="#fffffff"
                  d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#fffffff"
                  d="M17 15V18M17 21V18M17 18H14M17 18H20"
                ></path>
              </svg>
              Upload new photo
            </button>
            {formData.image && (
              <>
                <button
                  className="image-upload-btn"
                  onClick={(e) => handleUpdate(e)}
                >
                  <FontAwesomeIcon icon={faSave} />
                  Save
                </button>
                <button
                  className="image-upload-btn"
                  onClick={() => {
                    setFormData((prevData) => ({
                      ...prevData,
                      image: "",
                    }));
                    img.current.src = `${
                      auth.data.image
                        ? `${process.env.REACT_APP_IMAGE_BASE_URL}${auth.data.image}`
                        : "/images/default-user.jpg"
                    }`;
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faArrowsSpin} />
                  Reset
                </button>
              </>
            )}
          </div>

          <p>
            At least 800 x 800 px recommended.
            <br />
            JPG or PNG is allowed
          </p>
          {errors.image && <p className="danger">{errors.image}</p>}
        </div>
      </div>

      <div className="personal-info">
        <div>
          <p> Personal Info</p>
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
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="full-name">Full Name</label>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              value={formData.name || ""}
              disabled
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              value={formData.email || ""}
              disabled
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phone_number">Phone Number</label>
            <input
              className="input"
              type="text"
              name="phone_number"
              id="phone_number"
              value={formData.phone_number || ""}
              disabled
              onChange={handleInputChange}
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="image-upload-btn save-btn"
            disabled={
              auth.data.name === formData.name &&
              auth.data.email === formData.email &&
              auth.data.phone_number === formData.phone_number
            }
          >
            Apply Changes
          </Button>
        </form>
        {errors.name && <p className="danger">{errors.name}</p>}
        {errors.email && <p className="danger">{errors.email}</p>}
        {errors.phone_number && <p className="danger">{errors.phone_number}</p>}
      </div>
    </div>
  );
}

export default User;
