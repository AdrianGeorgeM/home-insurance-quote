# Home Insurance Quote Summary Page 🏠

## Project Overview 🔍

This project is a ReactJS-based application designed for a Home Insurance product. It features a dynamic quote summary page that allows users to personalize their insurance coverage by adding or removing optional extras. The core functionality revolves around a user-friendly interface that enables users to interact with the quote in real-time, providing immediate feedback on pricing and selections.

## Approach and Key Components 🌟

### Component Design 🎨

- **QuoteSummary Component**: 
Designed to provide users with a personalized greeting and a summary of their base insurance quote, including reference and coverage start date.

- **PriceDisplay Component**: 
Implemented to dynamically display the price of the insurance quote, updating in real-time as users select or deselect extras. 
Includes the functionality to toggle between monthly and annual payment options.

- **AddonItem Component**: 
Each addon is represented by an `AddonItem` component, allowing users to add or remove extras from their quote. 
The component visually indicates whether an extra is selected and contributes to the overall price calculation.

### State Management 📊

- **Local State Hooks**: 
Utilized `useState` for managing the state within components, ensuring that the UI is consistent with the user's interactions.

- **Event Handling**: 
Adopted a straightforward approach to event handling for user actions, such as selecting extras and toggling between payment frequencies.

### API Integration 🌐

- **API Service**: 
Created an `apiService` to interact with the provided RESTful API, handling asynchronous requests for fetching quote data and available addons.

- **Error Handling**: 
Incorporated error handling to manage any issues during API interaction, ensuring the application's robustness.

### Responsiveness 📱

- **CSS Modules**: 
Leveraged CSS Modules for component-specific styling, allowing for a clean separation of concerns and avoiding style conflicts.

- **Media Queries**: 
Implemented responsive design using media queries, ensuring the application's layout and functionality are maintained across different device sizes.

### Development Strategy 🚀

- **Incremental Development**: 
Followed an incremental development approach, focusing on one component at a time to ensure each meets its intended functionality before moving on to the next.

- **Code Modularity**: 
Emphasized creating reusable components and utility functions to keep the code DRY (Don't Repeat Yourself) and enhance readability and maintainability.

### Testing and Quality Assurance 🧪

- **Manual Testing**: 
Conducted thorough manual testing to verify that each acceptance criterion was met and that the user experience was seamless.

- **Responsive Testing**:
 Tested the application across multiple devices and viewport sizes to ensure compatibility and usability.

## Challenges and Resolutions 🛠️

- **UI Alignment**: 
Encountered challenges in ensuring consistent alignment of elements across components, which was resolved through careful CSS flexbox adjustments and setting common height values.

- **State Synchronization**: 
Ensured that the state across components was synchronized, particularly when reflecting selected extras and the total price.

## Future Improvements 🚧

- **Accessibility**: 
Plan to improve accessibility by adding ARIA attributes and ensuring keyboard navigation is fully supported.

- **State Management**: 
Explore integrating a more robust state management solution, such as Redux or Context API, to handle the state more efficiently as the application scales.

- **Unit Testing**: 
Implement unit tests with Jest and React Testing Library to cover critical functions and component renders.

## Setup and Installation ⚙️

To get the application up and running on your local machine:

```bash
npm install
```

```bash
npm run json-server
```
  
Open a new terminal window and run the following command:
  ```bash
npm start
```


## Mock API

To get the details of the quote and addons, you'll need to run the JSON server by executing the following command:
This will generate the mocked data and host the API on port 3001.

To get the details of the quote, please use the following endpoint:

[http://localhost:3001/quote](http://localhost:3001/quote)

Likewise, to get all available addons, please use:

[http://localhost:3001/addons](http://localhost:3001/addons)

Full documentation for JSON Server is supplied here: [JSON Server GitHub](https://github.com/typicode/json-server).

```

## Contributions & Feedback 👐

Feel free to contribute, open issues, and provide feedback to improve the application.
