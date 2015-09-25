# Polymer Nebri

A simple and easy to use Polymer 0.5 component for making Nebri backend requests.

This component is intended for use with a Nebri instance. Visit https://nebrios.com to sign up for free!

<strong>NOTE</strong>: This component has only been tested with Polymer 0.5.6 and should not be used with Polymer 1.0.

<h2>Installation</h2>
This component can be installed via Bower
```
bower install https://github.com/nebrie/polymer-nebri.git
```
If you are not using Bower for your application, polymer-nebri.js and polymer-nebrios.html should be copied to your preferred location.

This component utilizes core-ajax and needs to be imported in your application
```
<link rel="import" href="path/to/core-ajax/core-ajax.html">
```
For more information about installing and using polymer, see https://www.polymer-project.org/0.5/docs/start/usingelements.html.

<h2>Usage</h2>
This component should be included in your application before you can utilize it
```
<link rel="import" href="path/to/polymer-nebrios/polymer-nebri.html">
```

<h2>Public Functions</h2>
Polymer Nebri is designed to mimic core-ajax and accepts the following attributes:
- instanceName: your Nebri instance name. i.e. https://<strong>instance_name</strong>.nebrios.com
- apiModule: the name of the api module stored on your Nebri instance
- viewName: the name of the target function contained in the given api module
- method: the desired HTTP method, defaults to POST
- params: the payload to be urlencoded, usually used in GET requests
- body: the payload in json format
- auto: if the request should be fired automatically
- contentType: the payload content type, defaults to application/json
- headers: any headers that should be added
- withCredentials: sets the withCredentials flag on the request
- handleAs: specifies what data to store in the response property, defaults to json

For more information on core-ajax and what can be handled, see https://www.polymer-project.org/0.5/docs/elements/core-ajax.html.


<h2>Examples</h2>
```
<link rel="import" href="../bower_components/polymer-nebrios/polymer-nebri.html">

<polymer-element name="test-element" attributes="resp greeting">
    <template>
        <span>Hello from <b>test-element</b>. This is my Shadow DOM.</span>
        <p>Greeting: {{greeting}}</p>
        <p>Response: {{resp}}</p>
        <label for="greetingInput">Greeting:</label>
        <input type="text" id="greetingInput" value="{{greeting}}">
        <button on-click="{{sendGreeting}}">Send Greeting!</button>
        <polymer-nebri id="startGreeting"
                         instanceName="instance_name"
                         apiModule="api_module"
                         viewName="view_name"
                         params='json_payload'
                         method="GET"
                         on-response="{{onResponse}}">
        </polymer-nebri>
    </template>
    <script>
        Polymer({
            resp: "",
            greeting: "hello",
            onResponse: function(event, response){
                console.log(response.response); //outputs api response
            },
            sendGreeting: function(){
                this.$.startGreeting.go();
            }
        });
    </script>
</polymer-element>
```
