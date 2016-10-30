# Sample project to test service workers

The goal of this project is to test out the capabilities of service workers ranging from simple installation to complex tasks. Service workers is an [experimental technology](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) however you will find it in use in many websites (i.e. youtube, google, gmail, pinterest, twitter, etc...) It is currently supported by Firefox 47+, Chrome 49+, Opera 41+.

Service workers are a "Method that enables applications to take advantage of persistent background processing, including hooks to enable bootstrapping of web applications while offline." - http://caniuse.com/#search=service%20workers

# Running examples

A nodejs development server is available to run the examples, however you don't need it. You can use any development server you like as long as you point to the example sub-directories (i.e. `example-1`). If using another development server you must use `http://localhost` or `https://localhost`. If using any other domain name you must be using `https`. This is because service workers support either development behind localhost or using https. 

## Running 

Install node dependencies then...

`npm run ...example name...`

for example, to run example1

`npm run example1` 

# Example 1

Demonstrates a GET fetch request to the resource `/hello`

# Bugs

Service workers seem to return null on hard refresh, performing a normal refresh seems to fix this behavior. This is a known problem with the service worker implementation itself. Here's a stack overflow to save you from googling it

[http://stackoverflow.com/questions/35628243/how-to-prevent-hard-reloads-from-bypassing-the-service-worker](http://stackoverflow.com/questions/35628243/how-to-prevent-hard-reloads-from-bypassing-the-service-worker) 