
export async function login(authDetails) {
    const postRequest = {  
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(authDetails)
  }

    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, postRequest);
    if(!response.ok){
        throw {message: response.statusText, status: response.status} //eslint-disable-line
    };
    const data = await response.json();


    if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
    }

    return data
};


export async function register(authDetails) {
    const postRequest = {  
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(authDetails)
}

        const response = await fetch(`${process.env.REACT_APP_HOST}/register`, postRequest);
        if(!response.ok){
            throw {message: response.statusText, status: response.status} //eslint-disable-line
        };
        const data = await response.json();
        
        if(data.accessToken){
            sessionStorage.setItem("token", JSON.stringify(data.accessToken));
            sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
        }

        return data
};


export async function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}



