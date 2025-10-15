import React from 'react';
import './PatientCard.css';

const PatientCard = ({ patient, onViewDetails }) => {
  return (
    <div className="patient-card">
      <div className="patient-avatar">
        {patient.name.charAt(0).toUpperCase()}
      </div>
      <div className="patient-info">
        <h3 className="patient-name">{patient.name}</h3>
        <div className="patient-details">
          <p className="patient-detail">
            <span className="detail-icon">🎂</span>
            {patient.age} years
          </p>
          <p className="patient-detail">
            <span className="detail-icon">📞</span>
            {patient.contact}
          </p>
          {patient.bloodGroup && (
            <p className="patient-detail">
              <span className="detail-icon">🩸</span>
              {patient.bloodGroup}
            </p>
          )}
        </div>
      </div>
      <button
        className="view-details-button"
        onClick={() => onViewDetails(patient)}
      >
        View Details
      </button>
    </div>
  );
};

export default PatientCard;
