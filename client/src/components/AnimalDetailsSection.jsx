import * as React from "react";
import AnimalDetailRow from "./AnimalDetailRow";

function AnimalDetailsSection({ items }) {
  return (
    <div className="details-section">
      {items.map((item, index) => (
        <div key={index} className="detail-column">
          <AnimalDetailRow label={item.label} value={item.value} />
        </div>
      ))}
      <style jsx>{`
        .details-section {
          display: flex;
          min-height: 79px;
          width: 100%;
          justify-content: start;
          flex-wrap: wrap;
        }
        .detail-column {
          border-top: 1px solid #e5e8eb;
          display: flex;
          min-width: 240px;
          flex-direction: column;
          justify-content: start;
          flex-grow: 1;
          width: 371px;
          padding: 16px 8px;
        }
        .detail-column:nth-child(2n) {
          padding-left: 8px;
          padding-right: 0;
        }
        .detail-column:nth-child(2n-1) {
          padding-right: 8px;
          padding-left: 0;
        }
        @media (max-width: 991px) {
          .details-section,
          .detail-column {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default AnimalDetailsSection;