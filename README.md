# Bayside

## Installation

```bash
$ npm install bayside
```

## Features

  * Very minimal, high performance Node framework
  * Built for single page app's
  * The entire project is one file for easy debugging
  * Everything is optional from templates to single page app's
  * Built as a simple server side API for modern app's using React or Angular
  
## Security Issues

  If you discover a security vulnerability in Bayside, please see [Security Policies and Procedures](Security.md).

## Instructions:

  Create a file called app.js in your root directory.

```bash
$ app.js
```
  
  Add your JavaScript to app.js with your custom config settings.

```js
var config = {
    root: "/projects/root/directory",
    port: 3000
}

var app = new bayside(config);
```

  Create a index.html file in the same directory as app.js
  
```js
<html>
    <head>
        <link rel="stylesheet" href="{root}/static/main.css" />
    </head>
    <body>
        <h1>Your Bayside App is Running!</h1>
    </body>
</html>
'''

  Add a static folder for your images, css and JS files.

'''bash
mkdir static
'''

  Add a CSS folder to your static directory
 
 '''bash
 mkdir css
 '''
 
   Add a css file to your css directory called main.css, than add a simple CSS style to it. 
   
```js
 h1 { color: red; }
 '''


### Start the server:

```bash
$ node app.js
```

## Philosophy

  The entire philosophy behind Bayside is to do the absolute minimum for the developer.  
  The main idea is to prevent as much black box magic as possible so the developer has 
  absolute control. 

  Bayside is not a full stack framework.   If you want it to be a single page 
  application using Angular, React or Knockout, well that's up to you.  If 
  you wish it to be a standard content website that's up to you as well.   
  Do whatever you want with Bayside.
  
## Examples

  examples will be provided soon.
  
## Tests

  tests will be provided soon.
  
## People

The original author of Bayside is [Chris Hawkes](https://github.com/chawk)

## License

  [MIT](LICENSE)

