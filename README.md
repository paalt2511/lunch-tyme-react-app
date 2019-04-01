# Lunch Tyme React Redux App

Lunch Tyme is a web app which lists the restaurants available in the JSON API (http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json).

## Lunch Page

The user can navigate to **Lunch Page** by clicking on the **Lunch** icon in the footer. The Lunch Page contains two views, which are:

1.  **List View**: It has a vertical list of restaurants. Each list item displays basic information about the restaurant:

    - Restaurant Name
    - Category
    - Display Image

    The user can scroll through the list and select a restaurant by clicking on the listing item.

2.  **Details View**: It displays the location of the restaurant with Google Maps and basic information like address, contacts and twitter handle.

## Responsive Design

Lunch Tyme is a **mobile-first responsive web app**. It means that it looks perfect on mobile as well as tablet and desktop screen sizes.

The Lunch Page shows only list view on mobile phone in portrait orientation, but switches to **2-column layout** for tablet resolutions and higher.

## iOS Customization

The web app is customized for the users of iPhone and iPad. Following changes are made to the app:

- Removed the global footer
- The **Details View** exists on the same page as the **List View** and slides out with a drawer animation.
- Ignored the "Web.png" comp file

## Browser Support

The web app supports all major browsers like Chrome, Firefox, Safari, IE10 and Edge.

## Installation

Follow below steps to install and run the web app:

1. Open the terminal and navigate to the root folder of the web app
2. Run `npm install`
3. Run `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>


## Note 
As mentioned in requirements document "Ignore the "Web.png" comp file" ,  not worked on this one