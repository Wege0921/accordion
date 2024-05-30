# Accordion Component

This repository contains a React component that implements an accordion interface. The accordion can be used to display a list of questions and their corresponding answers. Users can toggle between single and multiple selection modes to view the answers.

## Features

- **Single Selection Mode**: Only one answer can be expanded at a time. Selecting another question will collapse the previously selected answer.
- **Multiple Selection Mode**: Multiple answers can be expanded simultaneously.

## File Structure

- `Accordion.js`: The main component implementing the accordion functionality.
- `data.js`: A separate module where the questions and answers are stored.
- `styles.css`: The CSS file for styling the accordion component.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Wege0921/accordion.git
   cd accordion
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## Usage

### Accordion Component

The `accordion` component renders a list of questions and answers. It uses the following state variables:

- `selected`: Keeps track of the currently selected question in single selection mode.
- `enableMulti`: Boolean flag to toggle between single and multiple selection modes.
- `multiSelection`: Array to keep track of the selected questions in multiple selection mode.

### Functions

- `handleSelection(selectedId)`: Handles the selection of a question in single selection mode. If the selected question is already active, it will be deselected.
- `handleMultiSelection(selectedId)`: Handles the selection of questions in multiple selection mode. Questions can be added or removed from the selection.

### Rendering

The component conditionally renders the content based on the selection mode:

- **Single Selection**: Only the answer for the selected question is displayed.
- **Multiple Selection**: Answers for all selected questions are displayed.

### Example Data Structure

The data used by the accordion is an array of objects, where each object represents a question and its corresponding answer:

```js
const data = [
  //This is just sample data
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is a component?",
    answer: "A component is a reusable piece of UI.",
  },
  // Add more questions and answers here
];
```

### CSS Styling

The `styles.css` file contains the necessary styles for the accordion component. You can customize it to match your application's design.

## Example

Here's an example of how to use the `Accordion` component in your application:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./Accordion";

ReactDOM.render(
  <React.StrictMode>
    <Accordion />
  </React.StrictMode>,
  document.getElementById("root")
);
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.
