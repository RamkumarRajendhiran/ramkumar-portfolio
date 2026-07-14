import { scrollToElement } from './utils/scroll';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import VendorNavbar from './components/VendorNavbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [highlightedSkill, setHighlightedSkill] = useState(null);

  const topics = [
    "Data Structures & Algorithms",
    "Python",
    "MERN Stack",
    "SQL",
    "Django",
    "Java",
    "Power BI",
    "Data Analysis"
  ];

  const colleges = [
    "Dhanalakshmi Srinivasan College",
    "Government HSS Salem",
    "Sai Rajeswari Institute",
    "Anand Institute",
    "Kalasalingam Academy",
    "SVCE Tirupati",
    "Saveetha University",
    "MGR University",
    "Danish Ahmed College",
    "A.M. Jain College",
    "Kovai Arts & Science",
    "Mohamed Sathak College",
    "Mother Theresa"
  ];

  // Updated with exact vendor mappings from the user request
  const vendors = [
    { name: "TrueNook", colleges: ["MGR University"] },
    { name: "Campus Connect", colleges: ["Anand Institute", "SRIT", "Saveetha University", "Danish Ahmed"] },
    { name: "ByteXL", colleges: ["SVCE Tirupati"] },
    { name: "Infoziant", colleges: ["Acharya College"] },
    { name: "New Leaf", colleges: ["Mother Theresa"] }
  ];

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setSelectedCollege(null);
    setSelectedVendor(null);
    setHighlightedSkill(null);

    setTimeout(() => scrollToElement('experience'), 50);
  };

  const handleSelectCollege = (college) => {
    setSelectedCollege(college);
    setSelectedTopic(null);
    setSelectedVendor(null);
    setHighlightedSkill(null);

    setTimeout(() => scrollToElement('education'), 50);
  };

  const handleSelectVendor = (vendor) => {
    setSelectedVendor(vendor);
    setSelectedTopic(null);
    setSelectedCollege(null);
    setHighlightedSkill(null);

    setTimeout(() => scrollToElement('experience'), 50);
  };

  const handleHighlightSkill = (skill) => {
    setHighlightedSkill(skill);
    setSelectedTopic(null);
    setSelectedCollege(null);
    setSelectedVendor(null);
  };

  return (
    <>
      <div className="background-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <Navbar 
        onSelectTopic={handleSelectTopic} 
        onSelectCollege={handleSelectCollege} 
        topics={topics}
        colleges={colleges}
      />

      <VendorNavbar 
        vendors={vendors}
        selectedVendor={selectedVendor}
        onSelectVendor={handleSelectVendor}
      />

      <main>
        <Hero onSelectCollege={handleSelectCollege} />
        
        <Experience 
          selectedVendor={selectedVendor}
          selectedCollege={selectedCollege}
          selectedTopic={selectedTopic}
        />
        
        <Projects />
        
        <Skills 
          selectedTopic={selectedTopic} 
          highlightedSkill={highlightedSkill}
        />
        
        <Education 
          selectedCollege={selectedCollege} 
          selectedVendor={selectedVendor}
          onHighlightSkill={handleHighlightSkill}
        />
        
        <Certifications />
        
        <Contact />
      </main>

      <Footer />
    </>
  );
}
