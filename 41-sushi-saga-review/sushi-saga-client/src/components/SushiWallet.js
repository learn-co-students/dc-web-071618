import React from "react";

const SushiWallet = ({ balance, addBucks }) => {
  return (
    <form onSubmit={e => addBucks(e)}>
      SushiWallet
      <input type="number" placeholder={`current bal: ${balance}`} />
      <button type="submit" value="submit">
        Get Sushi
      </button>
    </form>
  );
};

export default SushiWallet;
