const { GroupsPaging, AlfrescoApiConfig } = require("alfresco-js-api");

const alfrescoJsApi = new AlfrescoApi({ provider:'ECM', hostEcm: 'http://localhost:8080' });

alfrescoJsApi.login('admin', 'admin').then(
    data => {
        console.log('API called successfully Login in  BPM and ECM performed ');
    },
    error => {
        console.error(error);
    }
);


const isLoggedIn = alfrescoJsApi.isLoggedIn();
const gapi = new AlfrescoApiConfig

// Check if logged in
if (isLoggedIn) {
    console.log('You are logged in');
} else {
    console.log('You are not logged in');
}

// After the log in you can retrieve you ECM ticket
const ecmTicket = alfrescoJsApi.getTicketEcm() ;

console.log('This is your  ECM ticket  ' + ecmTicket);

// validates the ticket acquired above

const ticket = ecmTicket;

alfrescoJsApi.loginTicket(ticket).then(
    data => {
        console.log('valid ticket you are logged in');
    },
    error => {
        console.error(error);
    }
);