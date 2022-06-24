import React from "react";
// import './App.css';
function Cards(props){
  // cards component
  return (
    <>
      <div className="card shadow card-hover ">
        <a href="/">
          <img
            className="card-img-top"
            src={props.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <div className="my-2">
              <span className="title d-inline-block bg-green px-3 py-2 text-white rounded-full font-light text-sm ">
                {props.title}
              </span>
            </div>
            <h4 className="my-2">{props.Cname}</h4>
          </div>
          <span className="mx-3 text-secondary">{props.lecturer}</span>
          <p className="mx-3 my-1  text-sm  text-gray">${props.price}</p>
        </a>
      </div>
    </>
  );
}
export default Cards;
