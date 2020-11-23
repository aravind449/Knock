import axios from "axios";

const customerLogin = async (fields) => {
    console.log("inside customer login")
    const response = await axios.post("/users/customer-login", fields);
    return response;
};

const technicianLogin = async (fields) => {
    console.log("inside techniciann login")
    const response = await axios.post("/users/technician-login", fields);
    return response;
};

const customerRegistration = async (fields) => {
    const response = await axios.post("/users/customer-registration", fields);
    return response.status;
};
const changepassword = async (fields) => {
    const response = await axios.post("/users/change-password", fields);
    return response.status;
};

const technicianRegistration = async (fields) => {
    const response = await axios.post("/users/technician-registration", fields);
    return response.status;
};

const otp2 = async (fields) => {
    const response = await axios.post("/users/otp", fields);
    return response.status;
};

const fotp = async (fields) => {
    alert('fotp fotp 21')

    const response = await axios.post("/users/fotp", fields);
    alert('fotp fotp 22')

    return response.status;
};

const fpassword = async (fields) => {
    alert('f 1')
    const response = await axios.post("/users/forgot-password", fields);
    alert('f 2')
    return response;
};

const getTechnicianCategories = async () => {
    const response = await axios.get("/services/list-service-category");
    return response.data;
};

const getTechnicianCategoriesRegex = async (search) => {
    const response = await axios.post("/services/list-service-category-regex", search);
    return response.data;
};

export {
    customerLogin,
    technicianLogin,
    customerRegistration,
    technicianRegistration,
    getTechnicianCategories,
    otp2,
    fotp,
    getTechnicianCategoriesRegex,
    fpassword,
    changepassword,
};