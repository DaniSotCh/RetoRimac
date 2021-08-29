var apiURL = 'https://jsonplaceholder.typicode.com/';

export async function genericGetWithParameters(apiName: string, params: any) {
    try {
        /* let query = Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&'); */
        let response = await fetch(apiURL + apiName + '/' + params, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}
export async function genericGetNoParameters(apiName: string) {
    try {
        let response = await fetch(apiURL + apiName, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}
export async function genericDeleteWithParameters(apiName: string, params: any) {
    try {
        let query = Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
        let response = await fetch(apiURL + apiName + '/' + query, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        });
        let responseJson = await response.json();
        responseJson.httpStatusCode = response.status;
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function genericCallWithBody(method: string, apiName: string, model: any) {
    try {
        let response = await fetch(apiURL + apiName, {
            method: method,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(model),
        });
        let responseJson = await response.json();
        responseJson.httpStatusCode = response.status;
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

//-----------------------Calls----------------
export async function saveClientQuote(sendMailApprovalRequest: any) {
    try {
        let method = 'POST';
        let apiName = 'posts';
        let response = await genericCallWithBody(method, apiName, sendMailApprovalRequest);
        return response;
    } catch (error) {
        console.error(error);
    }
}
export async function getClientQuote(userId: any) {
    try {
        let apiName = 'posts';
        let response = await genericGetWithParameters(apiName, userId);
        return response;
    } catch (error) {
        console.error(error);
    }
}