# Angular 9/8/7 HttpClient Examples (GET, POST , UPDATE, DELETE)

In this [how-to tutorial](https://www.techiediaries.com/angular/angular-httpclient-9-8-service-api-calls-and-fetching-data/)
, we'll learn what is  the `HttpClient`  API available from `HttpClientModule` and how to use it in [Angular 9 by example](https://www.techiediaries.com/angular/angular-9-8-tutorial-by-example-rest-crud-apis-http-get-requests-with-httpclient/) with request timeout, responsetype, query parameters, http headers, interceptors, typed and full responses, and error handling. 

Also check out:

- [Build an Angular 9/8 CRUD Example & Tutorial](https://www.techiediaries.com/angular-9-8-crud-example-and-tutorial/)
- [Angular 9 Tutorial and Example: Build your First Angular App](https://www.techiediaries.com/angular-9-tutorial-and-example/)


We'll be seeing examples of common HTTP methods such as GET, PUT, PATCH, POST and DELETE, that you usually need to use when communicating with a server, or consuming and fetching data from a REST API server.

We'll be learning about:

- Accessing Http Headers,
- Passing Http Parameters, 
- Specifying HttpClient ResponseType i.e Text, JSON or Blob, 
- Setting up HttpClient Interceptors, 
- Implementing Http Error Handling,
- Dealing with Browser CORS and the Same Origin Policy


This tutorial is divided in the following parts:

- Importing `HttpClient` and sending Http get, post, put and delete requests to the server (this part),
- [Building a service to encapsulate the `HttpClient` code interfacing with the server](https://www.techiediaries.com/angular-httpclient/),
- [Getting headers and typed and full responses with Angular HttpClient](https://www.techiediaries.com/angular-httpclient-headers-full-response/),
- [Uploading files with Angular `HttpClient`](https://www.techiediaries.com/angular-file-upload-progress-bar)
- [Communicating with a Node.js & Express server using POST Requests](https://www.techiediaries.com/angular-tutorial-httpclient-post/)  
- [Using the async pipe for sending GET requests](https://www.techiediaries.com/angular-by-example-httpclient-get/),
- [Handling CORS and the Same Origin Policy in modern web browsers](https://www.techiediaries.com/fix-cors-with-angular-cli-proxy-configuration/)

Also read:

[Angular 7|6 Tutorial: Using Angular HttpClient with Node & Express.js - Example POST Requests](https://www.techiediaries.com/angular-tutorial-httpclient-post/)

[Angular 7|6 By Example: HTTP GET Requests with HttpClient (Services, async pipe and Observables)](https://www.techiediaries.com/angular-by-example-httpclient-get/)

## Run Fake Rest API server 

    npm install -g json-server
    json-server --watch db.json 

## Run Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

