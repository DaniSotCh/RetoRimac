var apiURL = 'https://jsonplaceholder.typicode.com/';

export async function genericGetWithParameters(apiName: string, params: any) {
    try {
        let query = Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
        let response = await fetch(apiURL + apiName + '/' + query, {
            method: 'GET',
            headers: {
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
            headers: {},
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
            headers: {},
        });
        let responseJson = await response.json();
        responseJson.httpStatusCode = response.status;
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}
export async function genericDeleteNoParameters(apiName: string, params: any) {
    try {
        let response = await fetch(apiURL + apiName + '/' + params, {
            method: 'DELETE',
            headers: {},
        });
        let responseJson = await response.json();
        responseJson.httpStatusCode = response.status;
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function genericCallWithBody(method: string, apiName: 'string', model: any) {
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