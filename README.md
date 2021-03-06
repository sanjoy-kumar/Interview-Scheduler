# Interview Scheduler

## Project Description & Features:

Interview Scheduler is a Single Page Application for tracking students interviews built with the latest tools and techniques for optimized user experience. The App utilizes React built-in and custom hooks and allows users to add, edit and delete appointments in real time. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. For quality assurance, the project follows best practices of TDD (Test Driven Development), where individual Components are tested in isolation as well as End-to-End testing is performed.

Features are as follows:

1. Appointment days (Monday to Friday) are displayed and colour-coordinated depending on availability
2. The days show the number of slots available as a snapshot of the week
3. A user can switch between days and see detailed information
4. Booked and available slots are clearly differentiated
5. A user can book interviews by typing in a student name and clicking on an interviewer from a list of interviewers
6. A user can change the details of an existing interview by pressing the edit icon
7. A user can cancel an existing interview, a pop-up message will ask to confirm the action before permanently deleting an interview
8. Days display currently remaining spots and capture updates after each modification

## Home View:

![Home View](./public/images/11.jpg)

## New Appointment Booking:

![New Appointment Booking](./public/images/22.jpg)

## Interview Cancel:

![Interview Cancel](./public/images/33.jpg)







## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```


## Dependencies

i. Axios
ii. Classnames
iii. Normalize.css
iv. React
v. React-dom
vi. React-scripts
vii. Babel/core
viii. Storybook/addon-actions
ix. Storybook/addon-backgrounds
x. Storybook/addon-links
xi. Storybook/addons
xii. Storybook/react
xiii. Testing-library/jest-dom
xiv. Testing-library/react
xv. Testing-library/react-hooks
xvi. Babel-loader
xvii. Node-sass
xviii. Prop-types
xix.React-test-renderer