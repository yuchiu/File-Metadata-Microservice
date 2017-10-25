## File-Metadata-Microservice

### Deployed on Heroku [DEMO](https://filemetadata-yuchiu.herokuapp.com/)

### User stories:
- I can submit a FormData object that includes a file upload.
- When I submit something, I will receive the file size within the JSON response.

#### Example output:
{ "name": "Algorithms_3rd.pdf", "mimetype": "application/pdf", "size": { "value": "5.1", "unit": "MB" } }

*****************************************************

### Local Usage 
#### 1. First install package cross-env globally(Optional)

```
npm i -g cross-env

```
Ensure npm scripts work properly across Linux, Windows, and all environments.

#### 2. install everything else

```
npm install

```

#### 3a. run on localhost

```
npm start

```
Server will be running on http://localhost:3000