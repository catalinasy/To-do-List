import React from "react";

export const List = props => {
  const {items} = props
  return (
    <div className="container"> 
    <ul>
      {
        items.map((item, i) => {
          return (
            <article key={i}>
              <p>{item}</p>
            </article>
          );
        })}
    </ul>
    </div>
  );
};