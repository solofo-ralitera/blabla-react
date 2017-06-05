const App = {
    title : 'KkOoZzYy!.'
}

const ApiBaseUrl = 'http://10.0.2.2/api-project/web/app_dev.php/api';

const Api = {
    url : ApiBaseUrl,
    login : ApiBaseUrl + '/login_check',
    users : ApiBaseUrl + '/users',
}

export { App, Api };