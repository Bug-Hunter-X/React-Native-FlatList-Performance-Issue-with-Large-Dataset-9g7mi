# React Native FlatList Performance Issue

This repository demonstrates a performance issue with React Native's FlatList component when rendering a large dataset. The application experiences UI freezes and lag, making it unresponsive.

## Problem
The provided `MyComponent.js` renders a FlatList with 1000 items.  On lower-end devices or when dealing with significantly larger datasets, this leads to noticeable performance degradation.

## Solution
The `MyComponentSolution.js` file offers an improved implementation using techniques like `windowSize` and `ItemSeparatorComponent` to significantly optimize rendering performance.

## How to Run
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npx react-native run-android` (or `npx react-native run-ios`) to run the application.

## Technologies Used
- React Native
- JavaScript