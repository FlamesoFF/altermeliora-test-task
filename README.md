# Test Task for "Altermeliora" 
Fullstack Typescript developer test assignment

## Description

File upload application.

Create an application that will handle the upload of files to a remote service.

* In the application, the user should see a form for uploading a file or a set of files.
* The progress indicator (percentage and bar or circle) should be shown as file uploads.
* Indicators for success/failure of the upload should be shown.
* Plus the background of the app should gradually turn light green on upload success and light red on failure.
* To mock failure add file size limit (1MB) on the backend.
* You don't need to store uploaded files anywhere.

## Requirements

1. Use ReactJS and NestJS frameworks and Typescript
2. Structure your project as a mono-repository for frontend and backend parts.
3. You can use UI library of your choice, but we prefer ant.design.
4. Create a repository in service of your choice (GitHub, GitLab, Bitbucket) and make sure your results are in Master branch
5. Provide clear instructions on the installation and running of your app
6. Provide tests (we prefer Jest) for all crucial functionality

## Installation and launch instructions 
0. `npm install -g typescript ts-node`
0. `npm install`
0. `lerna bootstrap`
0. Go to `../packages/backend`
0. Run `npm run start`
0. Go to `../packages/frontend`
0. Run `npm run start`
0. Enjoy opened browser page with the app (or use localhost:3000).
