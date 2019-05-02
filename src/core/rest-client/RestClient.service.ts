// export function login<T>(url: string, method: string, headers: string, body: string): Promise<T>{
//     return fetch('https://moqmulatorv2.azurewebsites.net/api2/login', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             firstParam: 'yourValue',
//             secondParam: 'yourOtherValue',
//         })
//     }).then((response) => response.json())
//     .then((data: LoginData) => {
//         return data;
//     })
// }

export function fetchData<T>(url: string, method: string, headers: HeadersInit, body: string): Promise<T>{
    return fetch(url, {
        method: method,
        headers: headers,
        body: body
    }).then((response) => response.json())
    .then((data: T) => {
        return data;
    })
}