# Redux BindActionCreators

## Overview

Our goal today is to practice adding features to an app with redux. We'll cover:

- Revisiting Thinking in Redux
- `mapDispatchToProps`
- Action Creators
- bindActionCreators
- `connect` syntactic sugar 

## Thinking in Redux


1. Figure out the "shape" of your state
2. Add 'static' version of state using Redux
  - Create 'default' reducers with initial values (or maybe mock data)
  - Connect state to components with `mapStateToProps`
3. Figure out how state changes over time
  - List the actions that will be triggered in your app
  - Decide how your state should change in response to each action

Actions                      ->    response in the reducer

X changing the search text (value) ->  change the search text

update the painting details      ->  change the painting details
vote on a particular painting    ->  painting.votes increases by 1

4. Implement actions and reducers
  - Write action creators
  - Write cases in reducers that correspond to each action
  - Connect actions to components with `mapDispatchToProps`

## `mapDispatchToProps`

Like `mapStateToProps` but for the actions that our component can take.

Should pass functions as the props!

## Action Creators

- Function that creates an action

## bindActionCreators

[In the Redux docs](https://redux.js.org/api/bindactioncreators)

There's a common pattern when we're defining mapDispatchToProps with action creators - we want functions that are basically the same, but they dispatch the results. `bindActionCreators` takes in an object of action creators and the dispatch function, and 'binds' them. It returns new functions that do the same thing, but the results are immediately dispatched.

That gives us a nice shortcut when we're defining mapDispatch to props:

```js
import { updateSearchText } from '../redux/actions'
const actionCreators = {
  updateSearchText: updateSearchText
}
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);
connect(null, mapDispatchToProps)(Searchbar)
```

## Sugar

`connect` will do it for us.

```js
import { updateSearchText } from '../redux/actions';

connect(null, { updateSearchText })(Searchbar)
```
