import React from 'react';

const MyBlog = () => {
  return (
    <div className="my-4">
      <h6>Q-1:What is the difference between props and state?</h6>
      <p>
        <strong>Ans</strong>: Props are used to pass data down from a parent
        component to a child component but while state is used to manage
        internal data within a component.Props are immutable and it's value
        can't be changed but states are mutable and it's value can be changed
      </p>
      <h6>Q-2: How does useState() works?</h6>
      <p>
        <strong>Ans</strong>: useState() is a hook in react.It allows us with a
        functional components to manage a state. It works by returning an array
        with two elements. The first element is called current state and the
        second element is setState which is a function and use to update current
        state value.
      </p>
      <h6>
        Q-3:What are the purposes of useEffect() other than fetching data?
      </h6>
      <p>
        <strong>Ans</strong>:useState() is a powerful tool in react.It provides
        a flexible and powerful way to manage side effects within functional
        components. It can be used not only just fetching data but also in many
        various cases like Handling keyboard and mouse events,managing timers
        and intervals, updating document title etc.
      </p>
      <h6>Q-4: How does react work?</h6>
      <p>
        <strong>Ans</strong>: React is a JS Library and it helps for building
        UI. When a React component is rendered, it generates a Virtual DOM. This
        is a lightweight copy of the actual DOM that can be updated more
        efficiently than the real DOM. Whenever the state of a component
        changes, React updates the Virtual DOM and compares it to the previous
        version. It then calculates the minimal number of changes needed to
        update the actual DOM and applies those changes. As a result, it update
        the UI more efficiently and faster way.
      </p>
    </div>
  );
};

export default MyBlog;