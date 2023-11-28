import axios from "axios";
import {message} from "antd";

let url = "http://14.200.178.102:44000";
let credentials = {
    "registrationCode": "FEE272F8D227CAA9",
    "userId": "OUTACAMP",
    "webPassword": "A27983B0169A7337"
};

export async function startSession() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(credentials);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    let result = await fetch(url + "/api/session/startWebSession", requestOptions);
    return result.json()
}

export async function searchMember(token, membershipId) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer" + token);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    let raw = JSON.stringify({
        "membershipId": membershipId
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let result = await fetch(url + "/api/pos/getFullMemberDetails", requestOptions);
    return result.json()
}

const getSessionToken = async () => {
    try {
        const raw = {
            registrationCode: "FEE272F8D227CAA9",
            userId: "OUTACAMP",
            webPassword: "A27983B0169A7337",
        };
        const response = await axios.post(url + "/api/session/startWebSession", raw);
        return response.data.sessionToken;
    } catch (error) {
        console.error("Error during session start:", error.message);
        throw error; // You might want to handle the error appropriately
    }
};


export const getToken = async () => {
    try {
        const token = await getSessionToken();
        return token
    } catch (error) {
        console.error("Error getting session token:", error.message);
    }
};


export const getMemberDetails = async (sessionToken, memberNo) => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer${sessionToken}`, // Add a space after 'Bearer'
    };

    const data = {
        membershipId: memberNo,
    };

    try {
        const response = await axios.post(`${url}/api/pos/getFullMemberDetails`, data, {
            headers,
        });

        if(response.status){
            return response.data;
        }

    } catch (error) {
        console.error('Error fetching member details:', error.message);
        return error;
    }
};



export const maskPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) {
        return ''; // Handle the case where phoneNumber is null or undefined
    }

    const visibleDigits = 6; // Number of digits to keep visible in the center
    const maskedNumber =
        phoneNumber.slice(0, Math.ceil((phoneNumber.length - visibleDigits) / 2)) +
        '*'.repeat(visibleDigits) +
        phoneNumber.slice(Math.ceil((phoneNumber.length + visibleDigits) / 2));

    return maskedNumber;
};
