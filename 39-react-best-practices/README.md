# React Best Practices

- Architecture
- Syntax and Convention
- Refactoring Exercise
- Gotchas
- Performance
- Advanced Features
- Developer Tools and Learning More

### Architecture - What makes a good component?
- Container vs. Presentational Components
- Many small components is better than a few big components

- logic in `render`
- If you have a method that returns JSX, consider making it a component

- Reduce State
- Reduce options
- Avoiding `style=` and `className=` with components

consider:

```
<div style={{float: ‘left’, width: ‘80%’}}>
  Main content
</div>
<div style={{float: ‘left’, width: ‘20%’}}>
  Sidebar content
</div>
```

vs:

```
<Main>
  Main content
</Main>
<Sidebar>
  Sidebar content
</Sidebar>
```

### Syntax and Convention
- Destructuring Props
- Spread and Rest operators
- name props well (clear, consistent, concise)
  - Use the same key/value name in your objects
- constructor vs. ES7 instance variables (`state = { count: 0 }`)
- defaultProps and function default values

```
const Button = (props = {color: "blue"}) => {
  return <button color={props.color}>{props.children}</button>
}

```


- Conditional rendering: ternaries vs. methods vs. short circuiting vs. IIFEs
```
render() {
  return <div>
   { !!condition && <Button /> }
   </div>
}
```

- classnames [helper](https://github.com/JedWatson/classnames)

```
<div className={classnames('item', { active: props.active })}
```

- separate your imports
- colocate your files
- avoid unneeded callbacks, e.g.:

```
const isActive = el => el.active;

flights.filter(flight => isActive(flight));
flights.filter(isActive);
```

### Gotchas
- capitalize ComponentNames
- `this.displayName`
- JSX Comments `{ /* comment  */ }`
- setting state from props
- setState is asynchronous
  - second arg to setState
  - passing a function to `setState`
- short circuiting leads to `"0"` rendering (coerce to booleans!)
- https://github.com/timhwang21/react-gotchas

### Performance
- Warning: Premature Optimization
- production build
- Initial load (time to interactive) vs. Update performance
- shouldComponentUpdate
- PureComponent
- indexes as array keys vs. unique, stable, predictable keys
- Inline arrow functions vs. methods on the class (`this.handleSomething`)
- [why did you update](https://github.com/maicki/why-did-you-update)
- [using the chrome dev tools](https://building.calibreapp.com/debugging-react-performance-with-react-16-and-chrome-devtools-c90698a522ad)
- [using the react dev tools profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
- See more at https://reactjs.org/docs/optimizing-performance.html

### Advanced React Features
- Fragment
- PropTypes
- Error Boundaries
- Components that add behavior, not DOM elements
- Composition vs. Inheritance
  - HOCs (higher-order components)
  - render props
  - callable function children
- Portal
- Context
- Refs
- Fibers

### Tools
- React Dev Tools
- Prettier
- Linter
- Snippets
- Highlighting
- React Storybook

### Learning and Improving
- React Docs
- awesome-react
- https://github.com/kylpo/react-playbook
