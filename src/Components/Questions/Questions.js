import React from 'react';

const Questions = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">How does react work?</h1>
      <p className="py-6">React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. A component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method.

The render method returns a description of what you want to see on the screen. React takes the description and displays the result. In particular, render returns a React element, which is a lightweight description of what to render. Most React developers use a special syntax called “JSX” which makes these structures easier to write. The <div /> syntax is transformed at build time to React.createElement('div')JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program.

The ShoppingList component above only renders built-in DOM components like <div /> and <li />. But you can compose and render custom React components too. For example, we can now refer to the whole shopping list by writing ShoppingList . Each React component is encapsulated and can operate independently; this allows you to build complex UIs from simple components.

</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Difference between props and state?</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      <div className="overflow-x-auto">
</div>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Difference between props and state?</h1>
      <h1>
        Props:
      </h1>
      <p className="py-6 text-justify">Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.The Data is passed from one component to another using props.Props are read-only.Props can be used with state and functional components.It is Immutable (cannot be modified)</p>
      <h1>
       State:
      </h1>
      <p className="py-6 text-justify"> The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.The Data is passed within the component only using state.It is Mutable ( can be modified).State can be used only with the state components/class component.State is both read and write.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Questions;