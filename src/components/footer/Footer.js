import React from "react";
import "./Footer.css";

const Footer = () => {
  const menuData = [
    {
      title: "Services",
      items: [
        "Business Process Services",
        "Cloud",
        "Data & AI",
        "Digital IT Operations",
        "Digital & Software",
        "Enterprise Platform Services",
      ],
    },
    {
      title: "Offerings",
      items: [
        "Application Services",
        "Cybersecurity",
        "Enterprise Automation",
        "Generative AI",
        "Global Capability Centers",
        "Sustainability",
        "Testing",
      ],
    },
    {
      title: "Industries",
      items: [
        "Banking",
        "Education & Institutions",
        "Financial Services",
        "High Tech, Products & Platforms",
        "Insurance",
        "Life Sciences & Healthcare",
        "Manufacturing",
        "Professional Services",
        "Retail & Consumer",
        "Telecom & Utilities",
        "Transportation & Logistics",
        "Travel & Hospitality",
      ],
    },
  ];

  const aboutUs = {
    title: "About Us",
    items: [
      "About",
      "Leadership",
      "Diversity, Equity & Inclusion",
      "Environmental, Social & Governance",
      "Corporate Social Responsibility",
      "Partners",
      "Newsroom",
      "Events",
      "Awards & Recognitions",
      "Locations",
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", icon: "🔗" },
    { name: "Facebook", icon: "📘" },
    { name: "Twitter/X", icon: "🐦" },
    { name: "Instagram", icon: "📸" },
    { name: "YouTube", icon: "🎥" },
  ];

  return (
    <footer className="footer">
      {menuData.map((section, index) => (
        <div key={index} className="footer-section">
          <h5>{section.title}</h5>
          <ul>
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      
      <div className="footer-section about-us">
        <h5>{aboutUs.title}</h5>
        <ul>
          {aboutUs.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

       
        <div className="social-links">
          <h5>Connect with Hexaware</h5>
          <ul>
            {socialLinks.map((link, index) => (
              <li key={index}>
                {link.icon} {link.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
