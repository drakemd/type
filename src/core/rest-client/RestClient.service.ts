export function httpRequest<T>(url: string, method: string, headers: HeadersInit, body: string): Promise<T>{
    return fetch(url, {
        method: method,
        headers: headers,
        body: body
    }).then((response) => response.json())
    .then((data: T) => {
        return data;
    })
}