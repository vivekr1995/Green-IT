## GreenIT Application Challenge

<p align="center">
GreenIT Application Challenge
</p>

This application is to provide an easy order management system for the users. Here user can able to view the existing data from the CSV file. In this application add, edit and delete actions can be performed.

Adding new data is provided with inline edit inside the table row. Edit can be done on the existing data through inline edit optoion. 

Data validatoion and restrictions are added both in frontend and backend also. Validation messages are displayed as popover messages.

Multiple selection of data can be performed to delete the existing data. Sorting of the table data is provided here.

Data can be searched using the global search option provided in the application.

## Application Screenshots
![Screenshot_main-screen](https://i.ibb.co/nn8zXRk/main-screen-jpg.png)
![Screenshot_add](https://i.ibb.co/nMyn3wn/add-jpg.png)
![Screenshot_edit](https://i.ibb.co/tL7nzbR/edit-jpg.png)
![Screenshot_delete](https://i.ibb.co/7KtYk76/delete-jpg.png)
![Screenshot_search](https://i.ibb.co/Db5Q5YD/search-jpg.png)


## Application Used Framework & Language Details

### Backend
- Language : PHP
- PHP Version : v 8.2.0
- PHP Framework : Core PHP

### Frontend
- Language : Typescript
- Framework Name : Angular
- Framework Version : v15.1.5
- UI : Angular Meterial

## Application Installation & configuration steps for run

### Angular Application:
1. Clone or donwload the repository.
2. Run `npm install` Inside the project folder.
3. Go to environments/environment.ts file & configure the local Backend application API url path.
4. Run `ng serve`.
5. Visit **http://localhost:4200** for see the running application.

### PHP Application:
1. Clone or donwload the repository.
2. Install the composer globally.
3. Open the Xampp or any local server & run the apache.
4. Run `composer update` Inside the project folder.
5. Visit **http://localhost/backend-project/** for see the running API's.

## Application Unit Testing

### Angular Unit Test :
The Angular CLI takes care of Jasmine and Karma configuration for you. It constructs the full configuration in memory, based on options specified in the angular.json file.

1. go to the project directory and run `ng test`.

Screenshot for Angular unit test case
![Screenshot_angular_test](https://i.ibb.co/Rv2Sfx2/angular-test-jpg.png)

### Core PHP Unit Test :
For PHP unit testing Codeception is being used. Codeception need to install with composer to perform unit testing. Reference for codeception : https://codeception.com/

1. go to the project directory and run `codecept run`.

Screenshot for Codeception unit test case
![Screenshot_php_test](https://antotechsolutions.com/project-images/laravel-unit-test.jpg)
