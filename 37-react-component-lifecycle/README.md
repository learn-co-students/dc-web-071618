# React Component Lifecycle

- Examples of the lifecycle hooks pattern
- Diagram of React Lifecycle
- Demo of React lifecycle methods


## Lifecycle (Hooks)

Code that runs at a particular time

before action
after action

before save
after save

after a promise returns



## Links
[Docs](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

[React Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### What should I know
- *constructor(props)*
- *render()*
- *componentDidMount()*
- *componentDidUpdate()*
- *componentWillUnmount()*

### Birth (Mounting)
- *constructor(props)*
  - called before it is mounted

Initialization
Setting the initial state


- *render()*

Tells react what this component should display
Called after the constructor
Every time the component updates
Changes to state - setState
Changes to props - anytime the parent rerenders
(forceUpdate)




- *componentDidMount()*
  - invoked immediately after a component is mounted (inserted into the tree).
  - Initialization that requires DOM nodes should go here.
  - If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

- setInterval
- initial fetches
- read the size of the component (height)
- handoff to another DOM library (google maps, chartjs)


- static getDerivedStateFromProps(props, state)
  - invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.


### Life (Updating)
- static getDerivedStateFromProps(props, state)
  - invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
- shouldComponentUpdate(nextProps, nextState)
  - invoked before rendering when new props or state are being received
  - returns boolean which determines if render should be called


- getSnapshotBeforeUpdate(prevProps, prevState)
    - invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate()



- *render()*





- *componentDidUpdate(prevProps, prevState)*
  - invoked immediately after updating occurs. This method is not called for the initial render
  - watch out for infinite loops if setting state!

  - how tall was our component?
  - restore scroll position






### Death (Unmounting)
- *componentWillUnmount()*
  -  invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
