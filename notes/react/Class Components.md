Hooks is react specific (with Functional Components)
Class is part of JavaScript

When React is rendering and re-rendering is a must know for good developers.

JSX is just a syntax extention for JavaScript.

Class Component

```
import { Component } from "react";

class App extends Component {
	render() {
		return (
			
		);
	}
}
```

Event Handler: Something that handles event like mouse click, hover etc.

setState() -> shallow merge, updating state to a different object in memory (then React rerenders), runs in a async manner, pass in two functions (first one returns value for shallow merge, second one is a function that runs after changes have been made to state)

# componentDidMount()

order -> constructor() first, render() runs next, then comes componentDidMount()

==Best Practice: Generate new array/object don't modify state directly==

Anonymous Functions inside render() may cause problems, because the anonymous function would reinitialize every single time the component renders.


