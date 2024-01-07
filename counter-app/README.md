# React To-Do List

A simple React component for creating and displaying a to-do list.

## Topic that i learnt in this project

1. **Functional Components:**
   The `ToDo` component is a functional component, which is a way of defining React components using a function.

2. **State Management:**
   The `useState` hook is used for managing state in functional components. Two state variables, `text` and `task`, are declared using `useState` to manage the input text and the list of tasks, respectively.

3. **Input Handling:**
   The `handleInputChange` function is triggered when the input field changes, updating the `text` state with the current input value.

4. **Task Addition:**
   The `handleAddText` function is called when the "Add" button is clicked. It checks if the input is not empty, adds the input value to the `task` state array, and then clears the input field.

5. **Rendering a List:**
   The list of tasks is rendered inside an unordered list (`ul`). The `map` function is used to iterate over the `task` array and render a list item (`li`) for each task.

6. **Key Prop in List Items:**
   Each list item has a `key` prop set to the index of the task in the `task` array. It helps React identify which items have changed, are added, or are removed.


## Getting Started

Follow these steps to get the to-do list app up and running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/Rituraj95/React-concept-with-Projects.git
cd React-concept-with-Projects
