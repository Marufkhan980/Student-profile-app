import React from 'react';
import Header from './components/Header';
import StudentProfile from './components/StudentProfile';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import profileImg from './generated-1792606051900.png';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <StudentProfile 
          name="Maruf Khan" 
          studentId="STU-2026-001" 
          department="Computer Science & Engineering" 
          email="maruf@example.com" 
          profileImg= {profileImg}
          isActive={true} 
        />
        
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;