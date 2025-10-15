import React, { useState } from 'react';
import { usePatients } from '../context/PatientContext';
import PatientCard from '../components/PatientCard';
import PatientModal from '../components/PatientModal';
import AddPatientForm from '../components/AddPatientForm';
import SearchBar from '../components/SearchBar';
import './Patients.css';

const Patients = () => {
  const { filteredPatients, loading, error, refreshPatients } = usePatients();
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
  };

  const handleCloseModal = () => {
    setSelectedPatient(null);
  };

  const handleAddPatient = () => {
    setShowAddForm(false);
  };

  if (loading) {
    return (
      <div className="patients-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading patients...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="patients-page">
        <div className="error-container">
          <span className="error-icon">⚠️</span>
          <p className="error-message">{error}</p>
          <button onClick={refreshPatients} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="patients-page">
      <div className="patients-header">
        <h1>Patient Records</h1>
        <button 
          className="add-patient-button"
          onClick={() => setShowAddForm(true)}
        >
          + Add New Patient
        </button>
      </div>

      <SearchBar />

      {filteredPatients.length === 0 ? (
        <div className="no-results">
          <span className="no-results-icon">🔍</span>
          <p>No patients found</p>
        </div>
      ) : (
        <div className="patients-grid">
          {filteredPatients.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      )}

      {selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onClose={handleCloseModal}
        />
      )}

      {showAddForm && (
        <AddPatientForm
          onClose={() => setShowAddForm(false)}
          onSubmit={handleAddPatient}
        />
      )}
    </div>
  );
};

export default Patients;
