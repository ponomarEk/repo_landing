import React from "react";
import Proposal from "../proposal/proposal";
import { data } from "../../dataBase/data";
import "./recommendation.css";

const Recommendation = () => {
  return (
    <section className="recommendation">
      <div className="rec_container">
        <h2 className="title">Рекомендации для вас</h2>
        <div className="proposals">
          {data.map((currProposal) => (
            <Proposal {...currProposal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
