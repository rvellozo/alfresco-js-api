this.alfrescoJsApi = new AlfrescoApi({ provider:'ECM', hostEcm: 'http://localhost:8080' });

this.alfrescoJsApi.login('admin', 'admin').then(function (data) {
    alert('API called successfully to login into Alfresco Content Services.');
}, function (error) {
    console.error(error);
});