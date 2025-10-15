// Mock patient data - ALL FICTIONAL for demonstration purposes
const mockPatients = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    age: 45,
    contact: '+91 98765 43210',
    email: 'rajesh.kumar@email.com',
    address: '123 MG Road, Mumbai, Maharashtra',
    bloodGroup: 'O+',
    medicalHistory: 'Diabetes, Hypertension',
    lastVisit: '2024-01-15',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    age: 32,
    contact: '+91 98765 43211',
    email: 'priya.sharma@email.com',
    address: '456 Sector 15, Delhi',
    bloodGroup: 'A+',
    medicalHistory: 'Asthma',
    lastVisit: '2024-01-20',
  },
  {
    id: 3,
    name: 'Amit Patel',
    age: 58,
    contact: '+91 98765 43212',
    email: 'amit.patel@email.com',
    address: '789 Park Street, Kolkata, West Bengal',
    bloodGroup: 'B+',
    medicalHistory: 'Heart Disease',
    lastVisit: '2024-01-18',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    age: 28,
    contact: '+91 98765 43213',
    email: 'sneha.reddy@email.com',
    address: '321 Banjara Hills, Hyderabad, Telangana',
    bloodGroup: 'AB+',
    medicalHistory: 'None',
    lastVisit: '2024-01-22',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    age: 51,
    contact: '+91 98765 43214',
    email: 'vikram.singh@email.com',
    address: '654 Civil Lines, Jaipur, Rajasthan',
    bloodGroup: 'O-',
    medicalHistory: 'Arthritis',
    lastVisit: '2024-01-10',
  },
  {
    id: 6,
    name: 'Anita Desai',
    age: 39,
    contact: '+91 98765 43215',
    email: 'anita.desai@email.com',
    address: '987 Koramangala, Bangalore, Karnataka',
    bloodGroup: 'A-',
    medicalHistory: 'Thyroid',
    lastVisit: '2024-01-25',
  },
];

// Simulate API call with delay
// This is MOCK data - completely fictional for demonstration
// Replace with real API calls when you have a backend
export const fetchPatients = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPatients);
    }, 1000);
  });
};
