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

export  async function searchMember(token, membershipId) {
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