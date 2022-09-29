import React from 'react'
import Swal from 'sweetalert2'
import './Questions.css'
const Questions = () => {
  const handleSuccess = () => {
    Swal.fire({
      title: 'Meaowwww!',
      text: 'Give me some food.',
      imageUrl:
        'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 ',
      imageWidth: 400,
      imageHeight: 450,
      imageAlt: 'Custom image',
    })
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://reactjs.org/logo-og.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">How does react work?</h1>
            <p className="py-6 text-justify">
              React is a declarative, efficient, and flexible JavaScript library
              for building user interfaces. It lets you compose complex UIs from
              small and isolated pieces of code called “components”. A component
              takes in parameters, called props (short for “properties”), and
              returns a hierarchy of views to display via the render method. The
              render method returns a description of what you want to see on the
              screen. React takes the description and displays the result. In
              particular, render returns a React element, which is a lightweight
              description of what to render. Most React developers use a special
              syntax called “JSX” which makes these structures easier to write.
              The <div /> syntax is transformed at build time to
              React.createElement('div')JSX comes with the full power of
              JavaScript. You can put any JavaScript expressions within braces
              inside JSX. Each React element is a JavaScript object that you can
              store in a variable or pass around in your program. The
              ShoppingList component above only renders built-in DOM components
              like <div /> and <li />. But you can compose and render custom
              React components too. For example, we can now refer to the whole
              shopping list by writing ShoppingList . Each React component is
              encapsulated and can operate independently; this allows you to
              build complex UIs from simple components.
            </p>
            <button className="btn btn-primary" onClick={handleSuccess}>
              Meow
            </button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://reactjs.org/logo-og.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Use of useEffect in React?</h1>
            <p className="py-6 text-justify">
              React useEffect is a function that gets executed for 3 different
              React component lifecycles. Those lifecycles are
              componentDidMount, componentDidUpdate, and componentWillUnmount
              lifecycles. The following steps are carried out for a functional
              React component if at least one effect is defined. Based on a
              state, prop, or context change, the component will be re-rendered.
              If one or more useEffect declarations exist for the component,
              React checks each useEffect to determine whether it fulfills the
              conditions to execute the implementation (the body of the callback
              function provided as first argument). In this case, “conditions”
              mean that one or more dependencies have changed since the last
              render cycle. Dependencies are array items provided as the
              optional second argument of the useEffect call. Array values must
              be from the component scope (i.e., props, state, context, or
              values derived from the aforementioned). After execution of every
              effect, scheduling of new effects occurs based on every effect’s
              dependencies. If an effect does not specify a dependency array at
              all, it means that this effect is executed after every render
              cycle. Cleanup is an optional step for every effect if the body of
              the useEffect callback function (first argument) returns a
              so-called “cleanup callback function.” In this case, the cleanup
              function gets invoked before the execution of the effect beginning
              with the second scheduling cycle. This also means that if there is
              no second execution of an effect scheduled, the cleanup function
              is invoked before the React component gets destroyed.
            </p>
            <div className="overflow-x-auto"></div>
            <button className="btn btn-primary" onClick={handleSuccess}>
              Meow
            </button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://reactjs.org/logo-og.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Difference between props and state?
            </h1>
            <h1 className="mt-12 text-purple-500 font-bold text-2xl">Props:</h1>
            <p className="py-6 text-justify">
              Props are known as properties it can be used to pass data from one
              component to another. Props cannot be modified, read-only, and
              Immutable.The Data is passed from one component to another using
              props.Props are read-only.Props can be used with state and
              functional components.It is Immutable (cannot be modified)
            </p>
            <h1 className="text-purple-500 font-bold text-2xl">State:</h1>
            <p className="py-6 text-justify">
              {' '}
              The state represents parts of an Application that can change. Each
              component can have its State. The state is Mutable and It is local
              to the component only.The Data is passed within the component only
              using state.It is Mutable ( can be modified).State can be used
              only with the state components/class component.State is both read
              and write.
            </p>
            <button className="btn btn-primary" onClick={handleSuccess}>
              Meow
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions
