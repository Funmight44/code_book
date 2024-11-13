export async function getProductList(searchTerm) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ''}`);
    if(!response.ok){
        throw {message: response.statusText, status: response.status}
};
    
    const data = await response.json();
    return data;
}


export async function getFeatureLists() {
    const resp = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if(!resp.ok){
        throw {message: resp.statusText, status: resp.status}
};
    const data = await resp.json();
    return data;
}