# Countries Flag API

This project is an Angular application that allows users to explore countries using the REST Countries API. It provides features to view, search, and filter countries, as well as view detailed information about each country. The application also includes a theme toggler for switching between light and dark modes.

## Features

- View a list of all countries.
- Search for a country by name.
- Filter countries by region.
- View detailed information for a specific country.
- Toggle between light and dark themes.
- Responsive design for optimal viewing on different devices.

## Tech Stack

- **Angular**: A powerful framework for building dynamic web applications.
- **NgRx**: A state management library for Angular applications, providing a predictable state container.
- **RxJS**: A library for reactive programming using Observables, making it easier to compose asynchronous or callback-based code.
- **SCSS**: A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).

## Setup and Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/countries-flag.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Running the Application

To run the application in a development environment, use the following command:

```sh
ng build
```

This will start a development server, and you can view the application at `http://localhost:4200/`.

## Architectural Choices

### Standalone Components

This project utilizes Angular's standalone components, which simplifies the architecture by reducing the need for `NgModule`. Each component manages its own dependencies, making them more modular and reusable.

### SCSS for Styling

SCSS is used for styling to leverage features like variables, mixins, and nesting, which help in writing more maintainable and organized CSS.

## Folder Structure

The project follows a standard Angular CLI structure, with the main application code located in the `src` directory.

```
.
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── country-card
│   │   │   ├── country-details
│   │   │   ├── filter
│   │   │   ├── header
│   │   │   ├── home
│   │   │   ├── search
│   │   │   ├── spinner
│   │   │   └── theme-toggler
│   │   ├── models
│   │   ├── pipes
│   │   ├── services
│   │   └── store
│   │       ├── countries
│   │       └── theme
│   ├── assets
│   ├── environments
│   └── styles
├── public
└── ...
```

- **`src/app/components`**: Contains all the reusable UI components of the application.
- **`src/app/models`**: Defines the data structures and interfaces used throughout the application.
- **`src/app/pipes`**: Includes custom pipes for data transformation.
- **`src/app/services`**: Provides services for fetching data from the API.
- **`src/app/store`**: Contains the NgRx state management logic, divided into separate stores for `countries` and `theme`.
- **`src/assets`**: Stores static assets like images and icons.
- **`src/environments`**: Manages environment-specific configurations.
- **`src/styles`**: Contains global styles and SCSS variables.
## NgRx State Management

The application uses NgRx for state management, which is divided into two main stores: `country` and `theme`.

### Country Store

The `country` store manages the state related to countries, including the list of all countries, the currently selected country, loading status, and any errors.

- **Actions**:
  - `loadCountries`: Triggers fetching all countries.
  - `loadCountriesSuccess`: Dispatched when countries are successfully fetched.
  - `loadCountriesFailure`: Dispatched when there is an error fetching countries.
  - `loadCountryByCode`: Triggers fetching a single country by its code.
  - `loadCountryByCodeSuccess`: Dispatched when a single country is successfully fetched.
  - `loadCountryByCodeFailure`: Dispatched when there is an error fetching a single country.
  - `setSearchQuery`: Updates the search query for filtering countries.
  - `setFilterRegion`: Updates the region for filtering countries.

- **Effects**:
  - `CountryEffects`: Handles the side effects of fetching data from the `CountryService` and dispatches the appropriate success or failure actions.

- **Reducer**:
  - `countryReducer`: Manages the state changes for the country store based on the dispatched actions.

### Theme Store

The `theme` store manages the application's theme (light or dark).

- **Actions**:
  - `toggleTheme`: Toggles the theme between light and dark.
  - `setTheme`: Sets the theme to a specific value ('light' or 'dark').
  - `loadTheme`: Loads the theme from local storage.

- **Effects**:
  - `ThemeEffects`: Handles the side effects of persisting the theme to local storage.

- **Reducer**:
  - `themeReducer`: Manages the state changes for the theme store.

## Custom Pipes and Directives

### ObjectValuesPipe

The `ObjectValuesPipe` is a custom pipe used to transform and display complex object values, such as languages and currencies, in a readable format. It can handle nested objects and joins the values into a comma-separated string.
