1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes in React are used to check the types of data that you pass down on props from component-to-component. This is important because your type can drastically impact the functionality of your application. If a specific component is expecting a number of `4` but it instead receives a string of `"4"`, you might have no idea and be stuck debugging it for hours. By type-checking through PropTypes, you have the benefit of React throwing you and error in the dev console when this happens.

2. Describe a life-cycle event in React?

A lifecycle even such as `constructor()`, `render()`, `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()` is part of the "lifecycle" of a component in which is is "born," may periodically update, and then will have a death in which you have the opportunity to unmount anything lingering that you would want to remove. A good example of these is `componentDidMount()`, commonly used to call Ajax/Axios/HTTP calls immediately following the component mounting to the screen through the lifecycle `render()` function.

3. Explain the details of a Higher Order Component?

A higher order component is a component that takes one or more other components in as its arguments and returns an entirely new component changed based on some condition or logic inside the HOC. In our homework, for example, that took the form of a higher order authentication component that curried multiple components through it and conditionally rendered one of them based on a boolean `loggedIn` flag. HOCs allow you to reuse component logic and are a pattern that emerge due to React's JavaScript-oriented and functional-programming nature.

4. What are three different ways to style components in React? Explain some of the benefits of each.
