import axiosInstance from "./axiosInstance";

export const checkout = async (items) => {
  try {
    const response = await axiosInstance.post("/checkout", { items });
    console.log(response.data); // Display the response data
    window.open(response.data.url, "_blank");
    return response.data; // Return data for further handling if needed
  } catch (error) {
    console.error(
      "Error during checkout:",
      error.response?.data || error.message
    );
    throw error; // Re-throw the error to handle it in the calling function if necessary
  }
};
