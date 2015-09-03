Polymer('polymer-nebri', {
    instanceName: "demo",
    apiModule: "",
    viewName: "",
    handleAs: "json",
    method: "POST",
    withCredentials: false,
    headers: {},
    params: {},
    body: "",
    contentType: "application/json",
    context: null,
    auto: false,
    csrftoken: "",
    responseHandler: function(event, response){
        console.log('response handler');
        try {
            this.fire('response', response);
        } catch(e){
            console.log(e);
        }
    },
    defaultResponseHandler: function(event, response){
        console.log('default response handler');
    },
    completeHandler: function(event, response){
        try {
            this.fire('complete', response);
        } catch(e){

        }
    },
    defaultResponseHandler: function(event, response){

    },
    errorHandler: function(event, response){
        try {
            this.fire('error', response);
        } catch(e){

        }
    },
    defaultErrorHandler: function(event, response){

    },
    get requestHeaders() {
        var retHeaders = {};
        for(var prop in this.headers){
            if(this.headers.hasOwnProperty(prop)){
                retHeaders[prop] = this.headers[prop];
            }
        }
        retHeaders["X-CSRFToken"] = this.csrftoken;
        return retHeaders;
    },
    go: function() {
        this.$.ajax_element.go();
    }
});