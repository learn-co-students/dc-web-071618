import React, { Fragment } from "react";

const Sushi = ({ sushiProp, eat, eaten }) => {
  return (
    <Fragment>
      <div className="sushi">
        {eaten ? (
          <div>That was good</div>
        ) : (
          <div className="plate" onClick={() => eat(sushiProp)}>
            <img src={sushiProp.img_url} alt={sushiProp.name} width="100%" />
          </div>
        )}

        <h4 className="sushi-details">
          {sushiProp.id}: {sushiProp.name} - ${sushiProp.price}
        </h4>
      </div>
    </Fragment>
  );
};

export default Sushi;
