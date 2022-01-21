const alfrescoJsApi = new AlfrescoApi({ provider:'ECM', hostEcm: 'http://localhost:8080' });

alfrescoJsApi.login('admin', 'admin').then(
    data => {
        console.log('API called successfully Login in  BPM and ECM performed ');
    },
    error => {
        console.error(error);
    }
);