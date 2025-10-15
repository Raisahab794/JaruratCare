import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchPatients } from '../services/patientService';

const PatientContext = createContext();

export const usePatients = () => {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error('usePatients must be used within a PatientProvider');
  }
  return context;
};

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPatients();
      setPatients(data);
    } catch (err) {
      setError('Failed to load patients. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const addPatient = (newPatient) => {
    const patient = {
      ...newPatient,
      id: patients.length + 1,
    };
    setPatients([patient, ...patients]);
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const value = {
    patients,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    filteredPatients,
    addPatient,
    refreshPatients: loadPatients,
  };

  return (
    <PatientContext.Provider value={value}>
      {children}
    </PatientContext.Provider>
  );
};
