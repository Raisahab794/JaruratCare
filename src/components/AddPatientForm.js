import React, { useState } from 'react';
import { usePatients } from '../context/PatientContext';
import './AddPatientForm.css';

const AddPatientForm = ({ onClose, onSubmit }) => {
  const { addPatient } = usePatients();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    email: '',
    address: '',
    bloodGroup: '',
    medicalHistory: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.age || formData.age < 1 || formData.age > 150) {
      newErrors.age = 'Please enter a valid age';
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact is required';
    } else if (!/^\+?\d{10,15}$/.test(formData.contact.replace(/\s/g, ''))) {
      newErrors.contact = 'Please enter a valid contact number';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newPatient = {
      ...formData,
      age: parseInt(formData.age),
      lastVisit: new Date().toISOString().split('T')[0],
    };

    addPatient(newPatient);
    onSubmit();
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="form-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <h2 className="form-title">Add New Patient</h2>
        
        <form onSubmit={handleSubmit} className="patient-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Enter patient's full name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={errors.age ? 'error' : ''}
                placeholder="Age"
                min="1"
                max="150"
              />
              {errors.age && <span className="error-message">{errors.age}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Number *</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className={errors.contact ? 'error' : ''}
              placeholder="+91 98765 43210"
            />
            {errors.contact && <span className="error-message">{errors.contact}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="patient@email.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter patient's address"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="medicalHistory">Medical History</label>
            <textarea
              id="medicalHistory"
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              placeholder="Any existing medical conditions or allergies"
              rows="3"
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Add Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatientForm;
