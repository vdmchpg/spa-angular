import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    const credentials: {login : string, password : string}= {
        login: 'vadym',
        password: 'chepiga'
    };

    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {

            if (connection.request.url.endsWith('api/login') && connection.request.method === RequestMethod.Post) {
                const params = JSON.parse(connection.request.getBody());
                const status = (credentials.login === params.login && credentials.password === params.password) ? "OK" : "Fail";

                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: {
                        authStatus: status
                    }
                })))
            }

            if (connection.request.url.endsWith('api/logout') && connection.request.method === RequestMethod.Post) {

                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: {
                        logoutStatus: 'LoggedOut'
                    }
                })))
            }

            // pass through any requests not handled above
            const realHttp = new Http(realBackend, options);
            const requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                        connection.mockRespond(response);
                    },
                    (error: any) => {
                        connection.mockError(error);
                    });
        }, 0);

    });

    return new Http(backend, options);
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
