import jwt_decode from 'jwt-decode';
import axios from 'axios';

const token = localStorage.getItem('Access Token');
const decodedToken = jwt_decode(token);
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// get customer details
export const getCustomerDetails = async(event) => {
    let customer_id = decodedToken.customer_id;
    console.log(decodedToken);
    await axios.get( SERVER_URL + `customer/${customer_id}`, {
        headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => {
    console.log('customer',response.data);
    localStorage.setItem('customer_details',response)
    })
    .catch(error => {
    console.error(error);
    });
}


export const getEmployeeDetails = async(event) => {
    let employee_id = decodedToken.employee_id;
    await axios.get(`http://localhost:5000/employee/${employee_id}`, {
        headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => {
        console.log('employee',response.data);
        localStorage.setItem('employee_details',JSON.stringify(response.data))

    })
    .catch(error => {
    console.error(error);
    });
}

export const getUserDetails = async(event) => {
    let user_id = decodedToken.user_id;
    await axios.get(`http://localhost:5000/user/${user_id}`, {
        headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => {
        console.log('user',response.data);
        localStorage.setItem('user_details',response)
    })
    .catch(error => {
    console.error(error);
    });
}

// export const accountDetails = async(event) => {
//     let data = localStorage.getItem('customer_details');
//     let customer_id = data.customer_id;
//     await axios.get(`http://localhost:5000/account/${user_id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//     })
//     .then(response => {
//         console.log('user',response.data);
//         localStorage.setItem('user_details',response)
//     })
//     .catch(error => {s
//     console.error(error);
//     });
// }



export default getCustomerDetails;




// get employee details