1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes in React are used to check the types of data that you pass down on props from component-to-component. This is important because your type can drastically impact the functionality of your application. If a specific component is expecting a number of `4` but it instead receives a string of `"4"`, you might have no idea and be stuck debugging it for hours. By type-checking through PropTypes, you have the benefit of React throwing you and error in the dev console when this happens.

2. Describe a life-cycle event in React?

A lifecycle even such as `constructor()`, `render()`, `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()` is part of the "lifecycle" of a component in which is is "born," may periodically update, and then will have a death in which you have the opportunity to unmount anything lingering that you would want to remove. A good example of these is `componentDidMount()`, commonly used to call Ajax/Axios/HTTP calls immediately following the component mounting to the screen through the lifecycle `render()` function.

3. Explain the details of a Higher Order Component?

A higher order component is a component that takes one or more other components in as its arguments and returns an entirely new component changed based on some condition or logic inside the HOC. In our homework, for example, that took the form of a higher order authentication component that curried multiple components through it and conditionally rendered one of them based on a boolean `loggedIn` flag. HOCs allow you to reuse component logic and are a pattern that emerge due to React's JavaScript-oriented and functional-programming nature.

4. What are three different ways to style components in React? Explain some of the benefits of each.

The first way that you can style components in React is vanilla CSS. The benefit to this is that it's easy, it's pre-built into React as a standard when you use the `create-react-app` command, and everyone worth their salt as a developer will know how to use it. The second method involves installing either LESS or SASS compilers into your React application and using their preprocessor power to upgrade your styling methods. Some benefits to this includes nesting, mixins, and variables (although you can use some clunky versions of variables in vanilla CSS now). Finally, you can also install Styled Components and use it in your applciation. The benefits to Styled Components is that you can parse away your styling into the actual component JavaScript files that you're otherwise working on and edit any styling logic in the same place you're editing everything else; also, you can make reusable components out of styling, which is something that you can't overestimate the benefits of.
