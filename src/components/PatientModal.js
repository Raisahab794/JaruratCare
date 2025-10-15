import React from 'react';
import './PatientModal.css';

const PatientModal = ({ patient, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-header">
          <div className="modal-avatar">
            {patient.name.charAt(0).toUpperCase()}
          </div>
          <h2>{patient.name}</h2>
        </div>

        <div className="modal-body">
          <div className="detail-row">
            <span className="detail-label">Age:</span>
            <span className="detail-value">{patient.age} years</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">Contact:</span>
            <span className="detail-value">{patient.contact}</span>
          </div>

          {patient.email && (
            <div className="detail-row">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{patient.email}</span>
            </div>
          )}

          {patient.address && (
            <div className="detail-row">
              <span className="detail-label">Address:</span>
              <span className="detail-value">{patient.address}</span>
            </div>
          )}

          {patient.bloodGroup && (
            <div className="detail-row">
              <span className="detail-label">Blood Group:</span>
              <span className="detail-value">{patient.bloodGroup}</span>
            </div>
          )}

          {patient.medicalHistory && (
            <div className="detail-row">
              <span className="detail-label">Medical History:</span>
              <span className="detail-value">{patient.medicalHistory}</span>
            </div>
          )}

          {patient.lastVisit && (
            <div className="detail-row">
              <span className="detail-label">Last Visit:</span>
              <span className="detail-value">
                {new Date(patient.lastVisit).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
