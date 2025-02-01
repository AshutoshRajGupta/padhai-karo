### **1. What is React?**

**Answer:**
React is an open-source JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications (SPAs). It allows developers to create reusable UI components and manage the state of the application efficiently. React uses a virtual DOM to optimize rendering and improve performance.

---

### Definition of Components in React

In React, a **component** is a reusable piece of code that represents a part of the user interface. Components can be thought of as custom HTML elements that encapsulate the structure, style, and behavior of a part of the UI. There are two main types of components in React:

1. **Functional Components**: These are JavaScript functions that return JSX (JavaScript XML). They are simpler and are used for presenting static data.
2. **Class Components**: These are ES6 classes that extend from `React.Component` and can hold and manage state. They are more feature-rich and are used for dynamic data.

### How to Use Components in React

Components are used to break down the UI into smaller, manageable, and reusable pieces. For example, in an e-commerce website, you might have components like `Header`, `ProductList`, `ProductItem`, `Cart`, and `Footer`.

### Example: E-commerce Website Components

Let's create a simple e-commerce website with the following components:

1. **Header Component**: Displays the website header with a logo and navigation links.
2. **ProductList Component**: Displays a list of products.
3. **ProductItem Component**: Represents a single product item.
4. **Cart Component**: Displays the items in the shopping cart.
5. **Footer Component**: Displays the website footer.

#### 1. Header Component

```jsx
// Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <h1>My E-commerce Store</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
```

#### 2. ProductList Component

```jsx
// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
```

#### 3. ProductItem Component

```jsx
// ProductItem.js
import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
```

#### 4. Cart Component

```jsx
// Cart.js
import React from 'react';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
```

#### 5. Footer Component

```jsx
// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <p>© 2023 My E-commerce Store</p>
    </footer>
  );
}

export default Footer;
```

### Putting It All Together

Now, let's put all these components together in the main `App` component.

```jsx
// App.js
import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10 },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20 },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 30 },
];

const cartItems = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <ProductList products={products} />
        <Cart cartItems={cartItems} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

### How It Works

1. **Header Component**: This component is rendered at the top of the page and displays the website title and navigation links.
2. **ProductList Component**: This component takes an array of products as a prop and maps over it to render a `ProductItem` component for each product.
3. **ProductItem Component**: This component displays the details of a single product, including its name, description, and price, along with an "Add to Cart" button.
4. **Cart Component**: This component takes an array of cart items as a prop and displays each item in the shopping cart.
5. **Footer Component**: This component is rendered at the bottom of the page and displays the copyright information.

By breaking down the UI into these components, the code becomes more modular, easier to maintain, and reusable across different parts of the application.

### Conclusion

Components are the building blocks of a React application. They allow you to create a modular and maintainable codebase by breaking down the UI into smaller, reusable pieces. In the context of an e-commerce website, components like `Header`, `ProductList`, `ProductItem`, `Cart`, and `Footer` help organize the code and make it easier to manage and scale the application.

---

### Definition of Props in React

**Props** (short for "properties") are a way to pass data from a parent component to a child component in React. Props are read-only, meaning that a child component cannot modify the props it receives. They are used to customize and configure components, making them reusable and dynamic.

Props are passed to components similarly to how attributes are passed to HTML elements. For example, in HTML, you might write:

```html
<img src="image.jpg" alt="A description" />
```

In React, you can pass props to a component like this:

```jsx
<ComponentName propName="value" />
```

The child component can then access the passed data via its `props` object.

---

### How Props Work

1. **Parent Component**: The parent component passes data to the child component using props.
2. **Child Component**: The child component receives the data as `props` and uses it to render or perform logic.

Props are **immutable**, meaning the child component cannot change the value of the props it receives. If the parent component needs to update the data, it must pass new props to the child component.

---

### Example: Using Props in React

Let's use the example of an e-commerce website to demonstrate how props work. We'll create a `ProductItem` component that receives product details (name, description, and price) as props from its parent component (`ProductList`).

#### 1. Parent Component: `ProductList`

The `ProductList` component will pass product data as props to the `ProductItem` component.

```jsx
// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

function ProductList() {
  const products = [
    { id: 1, name: 'Laptop', description: 'High-performance laptop', price: 999 },
    { id: 2, name: 'Smartphone', description: 'Latest smartphone', price: 699 },
    { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones', price: 199 },
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
```

#### 2. Child Component: `ProductItem`

The `ProductItem` component receives the product details as props and uses them to render the product information.

```jsx
// ProductItem.js
import React from 'react';

function ProductItem(props) {
  return (
    <div className="product-item">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>${props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
```

#### 3. Using Destructuring for Props

Instead of accessing props using `props.name`, `props.description`, etc., you can use **destructuring** to make the code cleaner:

```jsx
// ProductItem.js (with destructuring)
import React from 'react';

function ProductItem({ name, description, price }) {
  return (
    <div className="product-item">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
```

#### 4. Rendering the Components

Finally, render the `ProductList` component in the `App` component:

```jsx
// App.js
import React from 'react';
import ProductList from './ProductList';

function App() {
  return (
    <div className="app">
      <h1>Welcome to My E-commerce Store</h1>
      <ProductList />
    </div>
  );
}

export default App;
```

---

### How It Works

1. The `ProductList` component defines an array of products and maps over it.
2. For each product, it renders a `ProductItem` component and passes the product's `name`, `description`, and `price` as props.
3. The `ProductItem` component receives these props and uses them to display the product details.
4. The `App` component renders the `ProductList`, which in turn renders multiple `ProductItem` components.

---

### Key Points About Props

1. **Read-Only**: Props are immutable. A child component cannot modify the props it receives.
2. **Passing Data**: Props are used to pass data from a parent component to a child component.
3. **Dynamic Content**: Props make components reusable by allowing them to display different data based on the props they receive.
4. **Destructuring**: You can use destructuring to make your code cleaner when accessing props.

---

### Example Output

When you run the above code, the output will look something like this:

```
Welcome to My E-commerce Store

Laptop
High-performance laptop
$999
[Add to Cart]

Smartphone
Latest smartphone
$699
[Add to Cart]

Headphones
Noise-cancelling headphones
$199
[Add to Cart]
```

---

### Conclusion

Props are a fundamental concept in React that allow you to pass data between components. They make your components reusable and dynamic, enabling you to build complex UIs with ease. In the example above, we used props to pass product details from the `ProductList` component to the `ProductItem` component, demonstrating how props work in a real-world scenario.

---

### 3. Definition of State in React

#### **Technical Definition**:

In React, **state** is a built-in object that stores data or information about the component. The state is mutable, meaning it can be updated over time, usually in response to user actions, network responses, or other events. When the state of a component changes, React automatically re-renders the component to reflect the new state.

#### **Simple Definition**:

State is like a component's memory. It keeps track of data that can change over time, such as whether a button is clicked, what the user has typed in a form, or whether a modal is open or closed. When the state changes, the component updates itself to show the new data.

---

### Key Characteristics of State

1. **Mutable**: State can be updated using the `setState` function (in class components) or the `useState` hook (in functional components).
2. **Component-Specific**: State is local to a component and cannot be accessed directly by other components.
3. **Triggers Re-renders**: When the state changes, React automatically re-renders the component to reflect the new state.
4. **Asynchronous Updates**: State updates in React are asynchronous, meaning they don't happen immediately.

---

### Example: Using State in React

Let's use a simple example to demonstrate how state works. We'll create a counter application where the user can click a button to increment a number.

#### 1. Functional Component with `useState` Hook

In modern React, functional components use the `useState` hook to manage state.

```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable called "count" with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1); // Update the state
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
```

#### 2. Class Component with `setState`

In class components, state is managed using the `setState` method.

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  // Initialize state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Function to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 }); // Update the state
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

---

### How It Works

1. **Initialization**:

   - In the functional component, `useState(0)` initializes the `count` state variable with a value of `0`.
   - In the class component, the state is initialized in the constructor with `this.state = { count: 0 }`.
2. **Updating State**:

   - In the functional component, the `setCount` function is used to update the `count` state.
   - In the class component, `this.setState` is used to update the `count` state.
3. **Re-rendering**:

   - When the state changes (e.g., `count` is incremented), React automatically re-renders the component to display the updated value.
4. **Event Handling**:

   - The `onClick` event on the button triggers the `increment` function, which updates the state.

---

### Output

When you run the code, you'll see a counter with a button. Each time you click the button, the counter increases by 1:

```
Counter: 0
[Increment]
```

After clicking the button:

```
Counter: 1
[Increment]
```

---

### Key Points About State

1. **State is Local**: State belongs to a specific component and cannot be accessed directly by other components.
2. **State Updates are Asynchronous**: React batches state updates for performance reasons, so state changes don't happen immediately.
3. **State Triggers Re-renders**: Whenever the state changes, React re-renders the component to reflect the new state.
4. **State is Mutable**: Unlike props, state can be changed within the component.

---

### Simple Analogy

Think of **state** as a light switch:

- The **current state** of the switch is either "on" or "off."
- When you flip the switch (update the state), the light (UI) turns on or off accordingly.
- The switch (state) is local to the room (component) and doesn't affect other rooms (components) directly.

---

### Conclusion

State is a powerful feature in React that allows components to manage and respond to dynamic data. It enables components to be interactive and responsive to user input or other events. In the example above, we used state to create a simple counter that updates every time the user clicks a button. Whether you use functional components with hooks or class components, understanding state is essential for building dynamic and interactive React applications.

---

### 4. Definition of `useState` Hook

#### **Technical Definition**:

The `useState` hook is a built-in React function that allows functional components to manage state. It takes an initial value as an argument and returns an array with two elements: the current state value and a function to update that state. When the state is updated, the component re-renders to reflect the new state.

#### **Simple Definition**:

`useState` is a tool that lets functional components "remember" and update data. It gives you a variable to store data and a function to change that data. When the data changes, the component automatically updates to show the new value.

---

### How `useState` Works

1. **Initialization**:

   - You call `useState(initialValue)` to create a state variable.
   - It returns an array with two elements: the current state value and a function to update the state.
2. **Updating State**:

   - You call the update function (e.g., `setState(newValue)`) to change the state.
   - React re-renders the component with the new state value.
3. **Re-rendering**:

   - Whenever the state changes, React automatically re-renders the component to reflect the updated state.

---

### Example: Using `useState` for State Management

Let's create a simple example where a component tracks the number of times a button has been clicked.

#### Code Example

```jsx
import React, { useState } from 'react';

function ClickCounter() {
  // Step 1: Declare a state variable "count" with an initial value of 0
  const [count, setCount] = useState(0);

  // Step 2: Function to update the state
  const handleClick = () => {
    setCount(count + 1); // Update the state
  };

  return (
    <div>
      <h1>Button Clicked: {count} times</h1>
      {/* Step 3: Button to trigger state update */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickCounter;
```

---

### How It Works

1. **Step 1: Declare State**:

   - `const [count, setCount] = useState(0);` initializes a state variable `count` with an initial value of `0`.
   - `count` is the current state value.
   - `setCount` is the function used to update the state.
2. **Step 2: Update State**:

   - When the button is clicked, the `handleClick` function is called.
   - Inside `handleClick`, `setCount(count + 1)` updates the `count` state by incrementing it by 1.
3. **Step 3: Re-render**:

   - When `setCount` is called, React re-renders the component with the new value of `count`.
   - The updated value is displayed in the `<h1>` tag.

---

### Output

When you run the code, you'll see:

```
Button Clicked: 0 times
[Click Me]
```

After clicking the button once:

```
Button Clicked: 1 times
[Click Me]
```

After clicking the button twice:

```
Button Clicked: 2 times
[Click Me]
```

---

### Key Points About `useState`

1. **Simple and Easy to Use**:

   - `useState` is straightforward and requires minimal setup.
   - It replaces the need for class components and `this.setState`.
2. **State is Local**:

   - The state created with `useState` is local to the component where it is declared.
3. **Re-renders on Update**:

   - Whenever the state is updated, React re-renders the component to reflect the new state.
4. **Multiple State Variables**:

   - You can use `useState` multiple times in a single component to manage different pieces of state.

   Example:

   ```jsx
   const [name, setName] = useState('John');
   const [age, setAge] = useState(25);
   ```

---

### Example with Multiple State Variables

Let's extend the example to include a text input that updates a name.

```jsx
import React, { useState } from 'react';

function UserInfo() {
  // State for name
  const [name, setName] = useState('');

  // State for age
  const [age, setAge] = useState(0);

  return (
    <div>
      <h1>User Information</h1>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))} // Update age state
        />
      </div>
      <h2>Hello, {name}! You are {age} years old.</h2>
    </div>
  );
}

export default UserInfo;
```

---

### Output

When you run the code, you'll see:

```
User Information
Name: [Input Field]
Age: [Input Field]
Hello, ! You are 0 years old.
```

After typing "Alice" in the name field and "30" in the age field:

```
User Information
Name: Alice
Age: 30
Hello, Alice! You are 30 years old.
```

---

### Conclusion

The `useState` hook is a simple and powerful way to manage state in functional components. It allows you to create dynamic and interactive UIs by tracking and updating data. In the examples above, we used `useState` to manage a counter and user information, demonstrating how easy it is to add state to functional components. Whether you're building a small feature or a complex application, `useState` is an essential tool in your React toolkit.

---

### 5. Definition of JSX

#### **Technical Definition**:

**JSX** (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It is used in React to describe what the UI should look like. JSX makes it easier to write and visualize the structure of components.

#### **Simple Definition**:

JSX is a way to write HTML inside JavaScript. It looks like HTML but is actually JavaScript under the hood. React uses JSX to create and render components in a simple and intuitive way.

---

### Why Use JSX?

1. **Readability**: JSX makes it easier to visualize the structure of your UI.
2. **Simplicity**: It combines HTML and JavaScript, so you don't need to write separate code for structure and logic.
3. **Powerful**: JSX allows you to embed JavaScript expressions (e.g., variables, functions) directly within the HTML-like syntax.

---

### How JSX Works

1. **HTML-Like Syntax**: JSX looks like HTML but is actually JavaScript.
2. **Embedding JavaScript**: You can embed JavaScript expressions inside JSX using curly braces `{}`.
3. **Compilation**: JSX is not valid JavaScript, so it needs to be compiled into regular JavaScript using tools like Babel.

---

### Example: Basic JSX

Here’s a simple example of JSX in a React component:

```jsx
import React from 'react';

function Greeting() {
  const name = 'Alice';

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to React.</p>
    </div>
  );
}

export default Greeting;
```

#### Explanation:

1. The `Greeting` component returns JSX.
2. The `name` variable is embedded in the JSX using curly braces `{}`.
3. The output will be:
   ```
   Hello, Alice!
   Welcome to React.
   ```

---

### Key Features of JSX

#### 1. **Embedding JavaScript Expressions**

You can embed any valid JavaScript expression inside JSX using curly braces `{}`.

Example:

```jsx
function App() {
  const user = { firstName: 'John', lastName: 'Doe' };
  const isLoggedIn = true;

  return (
    <div>
      <h1>Hello, {user.firstName} {user.lastName}!</h1>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}
```

#### Output:

```
Hello, John Doe!
Welcome back!
```

---

#### 2. **Using CSS Classes**

In JSX, you use `className` instead of `class` (since `class` is a reserved keyword in JavaScript).

Example:

```jsx
function App() {
  return (
    <div className="container">
      <h1 className="title">Welcome to JSX!</h1>
    </div>
  );
}
```

---

#### 3. **Inline Styles**

You can apply inline styles using a JavaScript object. Style names are written in camelCase.

Example:

```jsx
function App() {
  const style = {
    color: 'blue',
    fontSize: '24px',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      <h1>Styled with JSX!</h1>
    </div>
  );
}
```

---

#### 4. **Self-Closing Tags**

In JSX, tags without children must be self-closed, similar to XML.

Example:

```jsx
function App() {
  return (
    <div>
      <img src="logo.png" alt="Logo" />
      <br />
      <input type="text" placeholder="Enter your name" />
    </div>
  );
}
```

---

#### 5. **Conditional Rendering**

You can use JavaScript logic (e.g., `if` statements, ternary operators) to conditionally render elements.

Example:

```jsx
function App() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
    </div>
  );
}
```

---

### JSX vs HTML

| Feature                     | JSX                                      | HTML                                  |
| --------------------------- | ---------------------------------------- | ------------------------------------- |
| **Class Attribute**   | `className`                            | `class`                             |
| **Inline Styles**     | Object (e.g.,`style={{color: 'red'}}`) | String (e.g.,`style="color: red;"`) |
| **JavaScript**        | Embed with `{}`                        | Not possible                          |
| **Self-Closing Tags** | Mandatory (e.g.,`<img />`)             | Optional (e.g.,`<img>`)             |

---

### Example: Combining JSX and JavaScript

Let’s create a simple React component that displays a list of items using JSX and JavaScript.

```jsx
import React from 'react';

function ShoppingList() {
  const items = ['Apples', 'Bananas', 'Milk', 'Bread'];

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
```

#### Output:

```
Shopping List
- Apples
- Bananas
- Milk
- Bread
```

---

### How JSX is Compiled

JSX is not valid JavaScript, so it needs to be compiled into regular JavaScript. For example, this JSX:

```jsx
const element = <h1>Hello, world!</h1>;
```

is compiled into:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

---

### Conclusion

JSX is a powerful and intuitive way to write UI components in React. It combines the simplicity of HTML with the power of JavaScript, making it easier to build dynamic and interactive user interfaces. Whether you're embedding JavaScript expressions, applying styles, or rendering lists, JSX is an essential part of React development.

---

### **6. What are the key features of React?**

**Answer:**

- **Component-Based Architecture:** React applications are built using reusable components.
- **Virtual DOM:** React uses a virtual DOM to improve performance by minimizing direct manipulation of the real DOM.
- **JSX:** A syntax extension that allows you to write HTML-like code in JavaScript.
- **Unidirectional Data Flow:** Data flows from parent to child components via props.
- **Hooks:** Introduced in React 16.8, hooks allow you to use state and other React features in functional components.

---

### **7. What is the difference between state and props?**

**Answer:**

- **State:**

  - State is managed within a component (like a variable declared inside a function).
  - It is mutable and can be updated using `setState` in class components or the `useState` hook in functional components.
  - State is local to the component and cannot be accessed by child components unless passed as props.
- **Props:**

  - Props (short for properties) are used to pass data from a parent component to a child component.
  - Props are immutable and cannot be modified by the child component.

---



### 8. Definition of Keys in React

#### **Technical Definition**:

In React, **keys** are special attributes used to identify which items in a list have changed, been added, or been removed. Keys help React efficiently update and re-render lists by providing a unique identifier for each element.

#### **Simple Definition**:

Keys are like IDs for list items in React. They help React keep track of each item in a list so it can update the UI efficiently when the list changes.

---

### Importance of Keys

1. **Efficient Updates**:

   - Keys help React identify which items have changed, been added, or been removed, so it only updates the necessary parts of the UI.
2. **Stable Identity**:

   - Keys provide a stable identity for list items, even if their order or position changes.
3. **Avoiding Bugs**:

   - Without keys, React might incorrectly re-render or reuse elements, leading to bugs like incorrect input values or focus states.

---

### How Keys Work

When rendering a list of elements, React uses keys to match elements between renders. If a key is missing or duplicated, React might not be able to correctly identify which items have changed.

---

### Example: Using Keys with the `map` Function

Let’s create a simple example where we render a list of items using the `map` function and assign a unique key to each item.

#### Code Example

```jsx
import React from 'react';

function TodoList() {
  const todos = [
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Walk the dog' },
    { id: 3, text: 'Do laundry' },
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

---

### Explanation

1. **List of Todos**:

   - We have an array of `todos`, where each todo is an object with an `id` and `text`.
2. **Rendering with `map`**:

   - The `map` function is used to iterate over the `todos` array and create a list item (`<li>`) for each todo.
3. **Using Keys**:

   - Each `<li>` element is assigned a `key` prop with the value of `todo.id`. This ensures that each item has a unique identifier.
4. **Output**:

   - The rendered list will look like this:
     ```
     Todo List
     - Buy groceries
     - Walk the dog
     - Do laundry
     ```

---

### Why Keys Are Important

#### Without Keys

If you don't use keys, React might have trouble identifying which items have changed. For example:

```jsx
{todos.map((todo) => (
  <li>{todo.text}</li>
))}
```

React will warn you:

```
Warning: Each child in a list should have a unique "key" prop.
```

Without keys, React might:

- Re-render the entire list even if only one item changes.
- Mix up the order of items, leading to bugs like incorrect input values or focus states.

#### With Keys

Using keys ensures that React can efficiently update the list:

- If an item is added, removed, or reordered, React only updates the necessary elements.
- React can maintain the correct state and focus for each item.

---

### Example: Dynamic List with Keys

Let’s create a more dynamic example where the list can be updated.

```jsx
import React, { useState } from 'react';

function DynamicTodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Walk the dog' },
    { id: 3, text: 'Do laundry' },
  ]);

  const addTodo = () => {
    const newTodo = { id: todos.length + 1, text: 'New Task' };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Dynamic Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default DynamicTodoList;
```

---

### How It Works

1. **State Management**:

   - The `todos` array is stored in state using the `useState` hook.
   - The `addTodo` function adds a new todo to the list.
2. **Rendering with Keys**:

   - Each `<li>` element is assigned a unique `key` using `todo.id`.
3. **Dynamic Updates**:

   - When the "Add Todo" button is clicked, a new todo is added to the list, and React efficiently updates the UI.

---

### Output

Initially:

```
Dynamic Todo List
- Buy groceries
- Walk the dog
- Do laundry
[Add Todo]
```

After clicking "Add Todo":

```
Dynamic Todo List
- Buy groceries
- Walk the dog
- Do laundry
- New Task
[Add Todo]
```

---

### Key Points About Keys

1. **Unique Identifier**:

   - Keys should be unique among siblings (e.g., `todo.id`).
2. **Avoid Using Index as Key**:

   - Using the array index as a key can cause issues if the list order changes. Always use a stable, unique identifier if possible.

   Example of what **not** to do:

   ```jsx
   {todos.map((todo, index) => (
     <li key={index}>{todo.text}</li>
   ))}
   ```
3. **Keys and Performance**:

   - Keys help React optimize rendering, improving performance for large lists.

---

### Conclusion

Keys are an essential part of rendering lists in React. They help React efficiently update and re-render lists by providing a unique identifier for each item. By using keys with the `map` function, you can ensure that your lists are dynamic, performant, and bug-free. Always use a stable and unique identifier for keys to avoid issues and make your React applications more robust.

---



## 9. 📌 **What is the Virtual DOM?**

The **Virtual DOM (VDOM)** is a **lightweight copy** of the real **DOM (Document Object Model)** that React uses to improve performance. Instead of directly changing the real DOM (which is slow), React updates the Virtual DOM first and then efficiently updates only the necessary parts of the real DOM.

---

### 🔹 **Simple Definition**

💡 **The Virtual DOM is a faster, in-memory version of the real DOM that helps React update the UI efficiently without unnecessary re-rendering.**

---

## 🔹 **How Does React Use the Virtual DOM?**

1. **Render Phase (Virtual DOM Update)**
   * When state or props change, React creates a new Virtual DOM.
2. **Diffing Phase (Compare Old & New Virtual DOM)**
   * React compares the new Virtual DOM with the previous version using its **Diffing Algorithm** to find changes.
3. **Reconciliation Phase (Update the Real DOM Efficiently)**
   * Instead of re-rendering the entire UI, React updates **only the changed elements** in the real DOM.

---

## 🔹 **Example: E-commerce Website (React Virtual DOM in Action)**

### 🛒 **Scenario: Adding a Product to Cart**

Imagine a product page where a user clicks  **"Add to Cart"** .

### **Without Virtual DOM (Traditional DOM Updates)**

* Every time the cart updates, the browser  **re-renders the entire page** , making it slow.

### **With Virtual DOM (React's Approach)**

1. The user clicks  **"Add to Cart"** .
2. React updates the Virtual DOM  **instead of modifying the real DOM immediately** .
3. React **compares the new Virtual DOM** with the previous one.
4. It finds that only the **cart count** has changed, so it updates **only that part** of the real DOM.

---

### 🔹 **Code Example (React Virtual DOM in Action)**

```jsx
function Cart() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <h2>🛒 Cart Items: {cartCount}</h2>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
```

### **How Virtual DOM Works Here?**

* When `cartCount` updates, React creates a  **new Virtual DOM** .
* It **compares** the new Virtual DOM with the old one.
* It finds that  **only `<h2>` has changed** , so it updates **only that part** of the real DOM instead of reloading the whole page.

---

## 🔥 **Why is the Virtual DOM Important?**

✅ **Faster Rendering** – Only updates necessary parts of the UI.

✅ **Better Performance** – Reduces unnecessary re-renders.

✅ **Smooth User Experience** – UI updates feel seamless and responsive.

---

💡 **In simple terms, React’s Virtual DOM makes web apps faster and more efficient by minimizing direct changes to the real DOM!** 🚀

---



## 10. 📌 **What are React Hooks?**

**React Hooks** are special functions that **allow functional components** to use **state and other React features** without writing a class.

### 🔹 **Simple Definition:**

💡 **Hooks let you use React features (like state and lifecycle methods) inside functional components instead of class components.**

---

## 🔹 **Why Use Hooks?**

Before Hooks, React used **class components** for managing state and lifecycle methods. Hooks **simplify** this by allowing us to use state and effects directly in functional components.

✅ **No need for class components**

✅ **Cleaner, reusable, and easier-to-read code**

✅ **Better performance**

---

## 🔹 **Example: React Hooks in an E-commerce Website**

### **Scenario: A Product Page with "Add to Cart" Feature**

When a user clicks the **"Add to Cart"** button, the cart count should increase.

**Before Hooks (Class Component):**

```jsx
class Cart extends React.Component {
  constructor() {
    super();
    this.state = { cartCount: 0 };
  }

  addToCart = () => {
    this.setState({ cartCount: this.state.cartCount + 1 });
  };

  render() {
    return (
      <div>
        <h2>🛒 Cart Items: {this.state.cartCount}</h2>
        <button onClick={this.addToCart}>Add to Cart</button>
      </div>
    );
  }
}
```

* Requires **class components** and `this.state`.
* Code is longer and harder to maintain.

### **With Hooks (Functional Component using `useState`)**

```jsx
import { useState } from "react";

function Cart() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <h2>🛒 Cart Items: {cartCount}</h2>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Cart;
```

### **How Hooks Work Here?**

1. **`useState(0)`** → Initializes the state `cartCount` with a value of `0`.
2. **`setCartCount(cartCount + 1)`** → Updates the cart count when the button is clicked.
3. **Re-renders only the necessary part** (`<h2>` updates instead of reloading the page).

---

## 🔹 **Common React Hooks**

| Hook           | Purpose                                                  |
| -------------- | -------------------------------------------------------- |
| `useState`   | Manages state in functional components.                  |
| `useEffect`  | Handles side effects (like API calls, subscriptions).    |
| `useContext` | Provides global state management.                        |
| `useRef`     | Creates references to DOM elements without re-rendering. |
| `useReducer` | Similar to `useState`but for complex state logic.      |

---

## 🔥 **Key Takeaways:**

✅ **Hooks make functional components powerful** (No need for class components).

✅ **`useState` manages state easily** (like cart items, user login status).

✅  **Hooks improve performance and readability** .

---

💡 **In simple words, React Hooks let you manage state and side effects in functional components, making your React code shorter, cleaner, and more powerful!** 🚀

---



## 11. 📌 **Rules for Using React Hooks**

When using  **React Hooks** , you must follow these rules to ensure your components work correctly.

---

### **🔹 1. Only Call Hooks at the Top Level**

* **❌ Wrong:** Don’t call Hooks inside loops, conditions, or nested functions.
* **✅ Correct:** Always call Hooks at the **top level** of your function component.

🔹 **Why?**

* React maintains Hook calls in the **same order** every render.
* Placing them inside loops/conditions can break this order, causing errors.

**❌ Incorrect Example (Calling inside a condition):**

```jsx
function Cart({ showCart }) {
  if (showCart) {
    const [cartCount, setCartCount] = useState(0); // ❌ Wrong (Inside condition)
  }
}
```

**✅ Correct Example:**

```jsx
function Cart({ showCart }) {
  const [cartCount, setCartCount] = useState(0); // ✅ Right (Always called)

  return showCart ? <h2>Cart: {cartCount}</h2> : null;
}
```

---

### **🔹 2. Only Call Hooks from React Function Components or Custom Hooks**

* **❌ Wrong:** Don’t use Hooks in normal JavaScript functions or class components.
* **✅ Correct:** Use them inside **functional components** or  **custom hooks** .

🔹 **Why?**

* Hooks rely on the React rendering lifecycle.
* Using them outside React components breaks this flow.

**❌ Incorrect Example (Calling in a normal JS function):**

```jsx
function addItem() {
  const [cart, setCart] = useState([]); // ❌ Wrong (Outside a React component)
}
```

**✅ Correct Example:**

```jsx
function Cart() {
  const [cart, setCart] = useState([]); // ✅ Right (Inside a component)

  return <h2>Items in Cart: {cart.length}</h2>;
}
```

---

### **🔹 3. Follow the "use" Naming Convention for Custom Hooks**

* **✅ Always start custom hook names with `use`** (e.g., `useCart`, `useFetch`).

🔹 **Why?**

* Helps React detect **custom hooks** and apply optimizations.

**✅ Correct Example (Custom Hook):**

```jsx
function useCart() {
  const [cart, setCart] = useState([]);
  return [cart, setCart];
}
```

---

### **🔹 4. Hooks Must Be Called in the Same Order on Every Render**

* **❌ Wrong:** Don’t put Hooks inside conditional statements.
* **✅ Correct:** Hooks should always be called in the **same order** in every render.

🔹 **Why?**

* React relies on the **order of Hook calls** to track state and effects.

**❌ Incorrect Example (Conditional Hook Call):**

```jsx
function Cart({ showCart }) {
  if (showCart) {
    const [cartCount, setCartCount] = useState(0); // ❌ Wrong (Conditional Hook)
  }
}
```

**✅ Correct Example:**

```jsx
function Cart({ showCart }) {
  const [cartCount, setCartCount] = useState(0); // ✅ Always called

  return showCart ? <h2>Cart: {cartCount}</h2> : null;
}
```

---

## 🔥 **Summary of React Hook Rules**

✅ **1. Call Hooks only at the top level of a function component.**

✅ **2. Never use Hooks inside loops, conditions, or nested functions.**

✅ **3. Use Hooks only in React components or custom Hooks.**

✅ **4. Custom Hooks must start with "use" (e.g., `useCart`).**

✅ **5. Hooks must always be called in the same order on every render.**

Following these rules ensures **React Hooks work correctly** and prevent unexpected errors in your application! 🚀

---



## 12. 📌 **What is `useEffect` in React?**

`useEffect` is a **React Hook** that **performs side effects** in functional components, such as:

✅ Fetching data from an API

✅ Updating the DOM

✅ Subscribing to events (like window resize, scroll)

✅ Cleaning up resources

---

### 🔹 **Simple Definition:**

💡 **`useEffect` runs code after the component renders. It is used for fetching data, updating UI, or handling events.**

---

## 🔹 **How `useEffect` Works?**

1. **Runs after the first render** (like `componentDidMount` in class components).
2. **Runs again when dependencies change** (like `componentDidUpdate`).
3. **Can clean up resources** (like `componentWillUnmount`).

---

## 🔹 **Example: E-commerce Website (Fetching Product Data)**

Imagine an e-commerce website where we **fetch products from an API** and display them when the page loads.

### ✅ **React Code Example:**

```jsx
import { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch products when the component loads
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data)); 
  }, []);  // Empty dependency array means it runs only once when the component mounts

  return (
    <div>
      <h2>🛍️ Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
```

---

## 🔹 **How `useEffect` Works in the Above Code?**

1️⃣ **Component Renders** → `useEffect` runs after the first render.

2️⃣ **Fetch API Data** → `fetch("https://fakestoreapi.com/products")` gets product data.

3️⃣ **Update State** → `setProducts(data)` updates the product list.

4️⃣ **Re-render with New Data** → The product list updates in the UI.

---

## 🔹 **Understanding `useEffect` Dependency Array**

### **1️⃣ No Dependency (`useEffect(() => {...}, [])`)**

* Runs **only once** after the first render.
* ✅ **Best for API calls, setting up event listeners.**

```jsx
useEffect(() => {
  console.log("Runs only once on mount");
}, []);  // Empty array = No re-run
```

---

### **2️⃣ With Dependencies (`useEffect(() => {...}, [count])`)**

* Runs  **when `count` changes** .
* ✅ **Best for watching changes in state/props.**

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count changed: ${count}`);
}, [count]);  // Runs every time `count` updates
```

---

### **3️⃣ Cleanup Function (`useEffect(() => {... return () => {...}; }, [])`)**

* Cleans up resources when the component  **unmounts** .
* ✅ **Best for removing event listeners or clearing intervals.**

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Timer running...");
  }, 1000);

  return () => {
    clearInterval(interval); // Cleanup on unmount
    console.log("Timer stopped");
  };
}, []);
```

---

## 🔥 **Key Takeaways of `useEffect` Hook**

✅ Runs  **after the component renders** .

✅ Used for  **fetching data, updating the DOM, handling subscriptions** .

✅ Can run  **once, on every render, or when dependencies change** .

✅ Can include **cleanup code** to prevent memory leaks.

---

💡 **In simple words, `useEffect` helps React components do things like fetching data, setting timers, or handling user events efficiently! 🚀**

---



## 13. 📌 **Difference Between Controlled and Uncontrolled Components in React**

In React, **form inputs (like text fields, checkboxes, etc.)** can be handled in  **two ways** :

1. **Controlled Components** (React manages the state)
2. **Uncontrolled Components** (DOM manages the state)

---

## **1️⃣ What is a Controlled Component?**

💡 **In a controlled component, React controls the form element's value using `useState` or `useReducer`.**

### ✅ **How It Works?**

* The **state** stores the value of the input.
* The **`onChange` event handler** updates the state when the user types.
* The **input value** is always controlled by React state.

### **Example: Controlled Input (React Controls the Value)**

```jsx
import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState(""); // State to store input value

  const handleChange = (event) => {
    setName(event.target.value); // Update state when input changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
```

### 🔹 **What Happens Here?**

✅ The input value is  **stored in React state (`name`)** .

✅ The input is  **updated using `onChange`** .

✅ React **fully controls** the input behavior.

---

## **2️⃣ What is an Uncontrolled Component?**

💡 **In an uncontrolled component, the DOM handles the form input, and React does NOT store the value in state.**

### ✅ **How It Works?**

* React does NOT control the value of the input field.
* The **`useRef` hook** is used to access the value directly from the DOM.
* The input's value is handled by the **browser** (not React).

### **Example: Uncontrolled Input (DOM Controls the Value)**

```jsx
import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(); // Create a ref to access input value

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name: ${nameRef.current.value}`); // Get value directly from input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} /> {/* Uncontrolled input */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
```

### 🔹 **What Happens Here?**

✅ The input value is  **NOT stored in state** .

✅ The input value is accessed  **directly from the DOM using `useRef`** .

✅ React does NOT re-render when the value changes.

---

## 📊 **Key Differences: Controlled vs. Uncontrolled Components**

| Feature                  | Controlled Component                   | Uncontrolled Component                                      |
| ------------------------ | -------------------------------------- | ----------------------------------------------------------- |
| **Data Storage**   | Stored in React state (`useState`)   | Stored in the DOM (`useRef`)                              |
| **Value Handling** | Controlled via `onChange`            | Accessed via `ref`                                        |
| **Performance**    | More re-renders (on every change)      | Better performance (fewer updates)                          |
| **Best Use Case**  | When React needs to control UI updates | When working with third-party libraries (like file uploads) |
| **Example**        | Input field with state management      | File upload input (`<input type="file">`)                 |

---

## **🔥 When to Use Which?**

✅ **Use Controlled Components When:**

* You need to **validate input** (e.g., checking email format).
* You want **real-time updates** (e.g., live search, form validation).
* The form data is  **part of a React state** .

✅ **Use Uncontrolled Components When:**

* You need to **integrate third-party libraries** (e.g., file upload, Google reCAPTCHA).
* You want **better performance** by avoiding unnecessary re-renders.
* You are dealing with  **simple, non-dynamic form inputs** .

---

## **🔥 Key Takeaways**

✅ **Controlled Components** → React **manages input values** via state (`useState`).

✅ **Uncontrolled Components** → The  **DOM handles input values** , accessed via `useRef()`.

✅  **Controlled components are better for React-managed forms** , while  **uncontrolled components are useful for direct DOM interactions** .

**💡 In simple words:**

* **Controlled Components** = React controls the input value.
* **Uncontrolled Components** = The browser (DOM) controls the input value.

🚀 **For most cases, use controlled components for better control and flexibility!**

---



### **5. What are React Hooks?**

**Answer:**
Hooks are functions introduced in React 16.8 that allow you to use state and other React features in functional components. Some commonly used hooks are:

- `useState`: Manages state in functional components.
- `useEffect`: Handles side effects like data fetching, subscriptions, or manually changing the DOM.
- `useContext`: Accesses context in functional components.
- `useReducer`: Manages complex state logic.

Example:

```jsx
const [count, setCount] = useState(0);
```

---

### **6. What is the Virtual DOM?**

**Answer:**
The Virtual DOM is a lightweight copy of the real DOM. React uses it to improve performance by minimizing direct manipulation of the real DOM. When the state of a component changes, React first updates the Virtual DOM and then compares it with the real DOM using a process called **reconciliation**. Only the differences are updated in the real DOM.

---

### **7. What are keys in React?**

**Answer:**
Keys are special attributes used in React to identify which items in a list have changed, been added, or been removed. They help React optimize rendering by minimizing re-renders.

Example:

```jsx
<ul>
  {items.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
```

---

### **8. What is the difference between class components and functional components?**

**Answer:**

- **Class Components:**

  - Use ES6 classes and extend `React.Component`.
  - Have lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc.
  - Use `this.state` and `this.setState` to manage state.
- **Functional Components:**

  - Plain JavaScript functions.
  - Use hooks like `useState` and `useEffect` to manage state and side effects.
  - Simpler and more concise than class components.

---

### **9. What are React lifecycle methods?**

**Answer:**
Lifecycle methods are specific methods in class components that are called at different stages of a component's life. The main lifecycle methods are:

- **Mounting:** `componentDidMount`
- **Updating:** `componentDidUpdate`
- **Unmounting:** `componentWillUnmount`

In functional components, the `useEffect` hook replaces these lifecycle methods.

---

### **10. What is Redux, and how does it work with React?**

**Answer:**
Redux is a state management library for JavaScript applications. It helps manage the global state of an application in a predictable way. Redux works with React by:

- Storing the entire application state in a single **store**.
- Using **actions** to describe changes to the state.
- Using **reducers** to specify how the state changes in response to actions.

React-Redux provides a `Provider` component to connect the Redux store to the React app and `useSelector`/`useDispatch` hooks to access and update the state.

---

### **11. What is the significance of `useEffect`?**

**Answer:**
The `useEffect` hook is used to perform side effects in functional components. It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. You can use it for tasks like data fetching, subscriptions, or manually changing the DOM.

Example:

```jsx
useEffect(() => {
  // Code to run on component mount or update
  return () => {
    // Cleanup code (runs on component unmount)
  };
}, [dependencies]);
```

---

### **12. What is React Context?**

**Answer:**
React Context is a way to pass data through the component tree without having to pass props down manually at every level. It is useful for sharing global data like themes, user authentication, or language preferences.

Example:

```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

---

### **13. What is the difference between controlled and uncontrolled components?**

**Answer:**

- **Controlled Components:**

  - The component's state is managed by React.
  - The value of the input is controlled by the state.
  - Example: `<input value={value} onChange={handleChange} />`
- **Uncontrolled Components:**

  - The component's state is managed by the DOM.
  - The value of the input is accessed using a `ref`.
  - Example: `<input ref={inputRef} />`

---

### **14. What is React Router?**

**Answer:**
React Router is a library used for routing in React applications. It allows you to define routes and navigate between different components without reloading the page.

Example:

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

### **15. What is the purpose of `React.Fragment`?**

**Answer:**
`React.Fragment` is used to group multiple elements without adding an extra node to the DOM. It is useful when you need to return multiple elements from a component.

Example:

```jsx
<React.Fragment>
  <h1>Title</h1>
  <p>Description</p>
</React.Fragment>
```

---

### **16. What is the difference between `useState` and `useReducer`?**

**Answer:**

- **useState:**

  - Used for managing simple state.
  - Example: `const [count, setCount] = useState(0);`
- **useReducer:**

  - Used for managing complex state logic.
  - Works similarly to Redux, with actions and reducers.
  - Example:
    ```jsx
    const [state, dispatch] = useReducer(reducer, initialState);
    ```

---

### **17. What is code splitting in React?**

**Answer:**
Code splitting is a technique used to split your code into smaller bundles that can be loaded on demand. This improves the performance of your application by reducing the initial load time. React provides `React.lazy` and `Suspense` for code splitting.

Example:

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

---

### **18. What are Higher-Order Components (HOCs)?**

**Answer:**
A Higher-Order Component (HOC) is a function that takes a component and returns a new component. It is used to share common functionality between components.

Example:

```jsx
function withLogging(WrappedComponent) {
  return function(props) {
    console.log('Rendered:', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}
```

---

### **19. What is prop drilling, and how can you avoid it?**

**Answer:**
Prop drilling is the process of passing props through multiple levels of components. It can make the code harder to maintain. You can avoid prop drilling by using:

- **React Context**
- **State management libraries like Redux or Zustand**

---

### **20. What are some performance optimization techniques in React?**

**Answer:**

- Use `React.memo` to memoize functional components.
- Use `useMemo` and `useCallback` to memoize values and functions.
- Implement code splitting using `React.lazy` and `Suspense`.
- Avoid unnecessary re-renders by optimizing state and props.
- Use the `key` prop correctly in lists.

---
