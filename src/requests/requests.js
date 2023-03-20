import jwt_decode from 'jwt-decode';
import axios from 'axios';

const token = localStorage.getItem('Access Token');
const decodedToken = jwt_decode(token);

// get customer details
const customerDetails = (customer_id) = async() => {
    axios.get(`http://localhost:5000/customer/${customer_id}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
    })
    .then(response => {
    console.log(response.data);
    })
    .catch(error => {
    console.error(error);
    });
}




// get employee details