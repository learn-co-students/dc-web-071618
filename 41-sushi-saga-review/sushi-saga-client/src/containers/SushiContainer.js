import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = ({ sushis, fourMore, eat, eaten }) => {
  return (
    <Fragment>
      <div className="belt">
        {sushis.map(sushi => (
          <Sushi
            sushiProp={sushi}
            key={sushi.id}
            eat={eat}
            eaten={eaten.includes(sushi)}
          />
        ))}

        <MoreButton fourMore={fourMore} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
