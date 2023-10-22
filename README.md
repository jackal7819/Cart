# Shopping Cart Application

This is a Shopping Cart Application project. The project involves building a shopping cart with various features like adding items, updating quantities, removing items, clearing the cart, calculating totals, and fetching data from an API. The project uses technologies like React, JavaScript, and global state management with useReducer and context.

## Introduction

The Shopping Cart Application is a web-based e-commerce platform that allows users to add items to their shopping cart, adjust quantities, and view the total cost of the items. It offers a rich set of features to provide a seamless shopping experience.

**[Link to the Project](https://cart-app-z16o.onrender.com)**

## Technologies Used

- React: The project is built using the React library for creating user interfaces.
- JavaScript: JavaScript is the primary programming language used for the application's logic.
- useReducer: The useReducer hook in React is employed to manage global state and handle complex state changes.
- Context API: The Context API is used to provide global state management and share data and actions across different components.
- Figma: Figma is a design tool that was used for creating the initial design and layout of the application.

## Project Description

### Global Context and useReducer

Global context and useReducer are set up to manage the state of the shopping cart. Two files are created for this purpose: one for the reducer and another for actions.

### Cart State Value

In the default state, the cart is set as a new Map(). This choice of data structure provides efficient lookup and updates based on unique product IDs.

### Functionalities

The following functionalities are implemented in the reducer and actions files, and made available in the global context:

- **Clear Cart:** An action that clears the entire cart.
- **Remove Item:** An action that removes a specific item from the cart.
- **Increase Amount:** An action that increases the quantity of a specific item in the cart.
- **Decrease Amount:** An action that decreases the quantity of a specific item in the cart.

### Calculate Totals

A function is implemented to calculate the total cost of items in the cart. This function helps users keep track of their expenses.

### Fetch Data

Data is fetched from an external API.

An action is implemented to fetch data from the API and store it in the cart state. This allows users to add items from the API to their cart.

## Data Structure Options

The project uses a new Map() to store shopping cart data, ensuring efficient lookups and updates based on unique product IDs. This choice of data structure is explained in the README, providing a clear understanding of why a Map is preferred over other options like arrays or objects.

## Additional Resources

For more information about working with Maps in JavaScript, you can watch the following video:

- **JS Nuggets Video: [Array.from](https://www.youtube.com/watch?v=zg1Bv4xubwo&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=11)**

The video explains how to convert data between arrays and Maps, which can be useful when dealing with shopping cart data.

## Conclusion

The Shopping Cart Application is a comprehensive e-commerce platform built with React and global state management. It offers a range of features for a user-friendly shopping experience, including adding and removing items, adjusting quantities, clearing the cart, calculating totals, and fetching data from an external API. The project utilizes a Map data structure for efficient data management.
