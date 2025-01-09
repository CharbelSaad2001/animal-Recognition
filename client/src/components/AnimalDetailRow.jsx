import * as React from "react";

function AnimalDetailRow({ label, value }) {
  return (
    <div className="detail-row">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
      <style jsx>{`
        .detail-row {
          width: 100%;
        }
        .label {
          width: 100%;
          color: #63877a;
        }
        .value {
          margin-top: 4px;
          width: 100%;
          color: #121714;
        }
      `}</style>
    </div>
  );
}

export default AnimalDetailRow;