const RECEIVE_API_BASE_URL = "http://localhost:8088/receive/"
const REQUEST_API_BASE_URL = "http://localhost:8088/request/"
const REQUESTS_API_BASE_URL = "http://localhost:8088/requests/"

function getStudentReceives(id, course){
    return axios.get(RECEIVE_API_BASE_URL+id+"/"+course);
}

function getStudentRequests(id, course){
    return axios.get(REQUEST_API_BASE_URL+id+"/"+course);
}

function approveRequest(token, requester, course){
    return axios.get(REQUEST_API_BASE_URL+"approve/"+token+"/"+requester+"/"+course);
}

function addRequest(receiver, token, course){
    return axios.get(REQUEST_API_BASE_URL+"add/"+receiver+"/"+token+"/"+course);
}

function removeRequestByID(id){
    return axios.get(REQUEST_API_BASE_URL+"del/"+id);
}

function removeRequest(receiver, token, course){
    return axios.get(REQUEST_API_BASE_URL+"del/"+receiver+"/"+token+"/"+course);
}

function clearRequest(token, course){
    return axios.get(REQUEST_API_BASE_URL+"clear/"+token+"/"+course);
}