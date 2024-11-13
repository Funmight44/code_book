

export async function getUser() {
    const token = JSON.parse(sessionStorage.getItem('token'));
    const cbid = JSON.parse(sessionStorage.getItem('cbid'));

    const resp = await fetch(`${process.env.REACT_APP_HOST}/600/users/${cbid}`, {
        method: 'GET', 
        headers: {'Content-type': 'application/json', Authorization: `Bearer ${token}`}
    });
    if(!resp.ok){
        throw {message: resp.statusText, status: resp.status}
    };
    const data = await resp.json();
    return data;
}


export async function createOrder(cartList, total, user) {
    const token = JSON.parse(sessionStorage.getItem('token'));

    const order = {
        products: cartList,
        total: total,
        userOrder: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        method: "POST",
        headers: {'Content-type': 'application/json', Authorization: `Bearer ${token}`},
        body: JSON.stringify(order)
    });
    if(!response.ok){
        throw {message: response.statusText, status: response.status}
    };
    const data = await response.json();
    return data;
};


export async function getuserOrder() {
    const token = JSON.parse(sessionStorage.getItem('token'));
    const cbid = JSON.parse(sessionStorage.getItem('cbid'));

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?userOrder.id=${cbid}`, {
        method: "GET",  
        headers: {'Content-type': 'application/json', Authorization: `Bearer ${token}`},
    });
    if(!response.ok){
        throw {message: response.statusText, status: response.status}
    };
    const data = await response.json();
    return data;
}

