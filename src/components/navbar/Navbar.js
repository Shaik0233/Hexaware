import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../navbar/Navbar.css";

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeNavbar = () => setExpanded(false);
  const toggleNavbar = () => setExpanded(!expanded);

  // Handle dropdown visibility based on device type
  const handleDropdownToggle = (dropdownId) => {
    if (window.innerWidth < 992) {
      // On mobile, toggle dropdown on click
      setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
    }
  };

  const handleDropdownMouseEnter = (dropdownId) => {
    if (window.innerWidth >= 992) {
      // On desktop, show on hover
      setHoverDropdown(dropdownId);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (window.innerWidth >= 992) {
      // On desktop, hide on mouse leave
      setHoverDropdown(null);
    }
  };

  // Dropdown Data
  const dropdowns = [
    {
      id: "services1",
      title: "Services",
      cards1: [
        {
          title: "Business Process Services.js",
          desc: "Outsource, manage and automate business processes.",
        },
        {
          title: "Cloud",
          desc: "Accelerate your journey, 2x faster than industry standard JavaScript framework.",
        },
        {
          title: "Data & AI",
          desc: "Uncover business insights through the power of data & AI frontend framework by Google.",
        },
      ],
      cards2: [
        {
          title: "Digital IT Operations.js",
          desc: "Run, optimize and secure applications and infrastructure with JavaScript.",
        },
        {
          title: "Digital & Software",
          desc: "Deliver powerful software solutions to your usersython-based web framework.",
        },
        {
          title: "Enterprise Platform Services",
          desc: "Build your business on the world's leading platforms for web apps.",
        },
      ],
      offer: "Get 30% off on Web Development services!",
    },
    {
      id: "services2",
      title: "Platforms",
      cards1: [
        { title: "AWS", desc: "Scalable cloud solutions." },
        { title: "Azure", desc: "Microsoft's enterprise cloud." },
        { title: "Google Cloud", desc: "AI-driven cloud solutions." },
      ],
      cards2: [
        { title: "IBM Cloud", desc: "Business-driven cloud." },
        { title: "Oracle Cloud", desc: "Enterprise cloud computing." },
        { title: "Alibaba Cloud", desc: "Asia's leading cloud service." },
      ],
      offer: "Free consultation on Cloud Adoption!",
    },
    {
      id: "services3",
      title: "Industries",
      cards1: [
        { title: "Healthcare", desc: "Digital solutions for healthcare." },
        { title: "Finance", desc: "Fintech and banking solutions." },
        { title: "Retail", desc: "E-commerce and retail tech." },
      ],
      cards2: [
        { title: "Education", desc: "EdTech solutions." },
        { title: "Manufacturing", desc: "Industry 4.0 solutions." },
        { title: "Logistics", desc: "Supply chain technology." },
      ],
      offer: "Industry-specific consultation available!",
    },
    {
      id: "services4",
      title: "Insights",
      cards1: [
        { title: "Blog", desc: "Latest tech trends and insights." },
        { title: "Case Studies", desc: "Real-world implementation stories." },
        { title: "Whitepapers", desc: "In-depth technical research." },
      ],
      cards2: [
        { title: "Webinars", desc: "Educational online sessions." },
        { title: "Podcasts", desc: "Tech discussions and interviews." },
        { title: "Research", desc: "Data-driven industry insights." },
      ],
      offer: "Subscribe to our newsletter for weekly insights!",
    },
    {
      id: "services5",
      title: "About",
      cards1: [
        { title: "Our Story", desc: "Learn about our journey." },
        { title: "Leadership", desc: "Meet our executive team." },
        { title: "Vision & Mission", desc: "Our guiding principles." },
      ],
      cards2: [
        { title: "Partners", desc: "Strategic alliances." },
        { title: "Awards", desc: "Recognition and accolades." },
        { title: "CSR", desc: "Our social responsibility initiatives." },
      ],
      offer: "Join our team and shape the future of tech!",
    },
    {
      id: "services6",
      title: "Careers",
      cards1: [
        { title: "Open Positions", desc: "Current job opportunities." },
        { title: "Internships", desc: "Programs for students." },
        { title: "Benefits", desc: "Why work with us." },
      ],
      cards2: [
        { title: "Culture", desc: "Our workplace environment." },
        { title: "Growth", desc: "Professional development paths." },
        { title: "Testimonials", desc: "Hear from our employees." },
      ],
      offer: "Apply today and join our innovative team!",
    },
  ];

  return (
    <Navbar expanded={expanded} expand="lg" className="custom-navbar">
      <Container fluid className="px-lg-5">
        <Navbar.Brand href="#home" className="py-2">
          HEXAWARE
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}>
          {expanded ? (
            <AiOutlineClose size={24} color="white" />
          ) : (
            <AiOutlineMenu size={24} color="white" />
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex flex-column flex-lg-row gap-2 gap-lg-3">
            {dropdowns.map((dropdown) => (
              <NavDropdown
                key={dropdown.id}
                title={dropdown.title}
                id={dropdown.id}
                className="hover-dropdown"
                onClick={() => handleDropdownToggle(dropdown.id)}
                onMouseEnter={() => handleDropdownMouseEnter(dropdown.id)}
                onMouseLeave={handleDropdownMouseLeave}
                show={
                  hoverDropdown === dropdown.id ||
                  activeDropdown === dropdown.id
                }
              >
                <div
                  className={`dropdown-container ${
                    window.innerWidth >= 992
                      ? "dropdown-grid"
                      : "dropdown-mobile"
                  }`}
                >
                  <div className="row w-100 mx-0">
                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                      {dropdown.cards1.map((card) => (
                        <Card key={card.title} className="dropdown-card mb-3">
                          <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.desc}</Card.Text>
                          </Card.Body>
                        </Card>
                      ))}
                    </div>

                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                      {dropdown.cards2.map((card) => (
                        <Card key={card.title} className="dropdown-card mb-3">
                          <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.desc}</Card.Text>
                          </Card.Body>
                        </Card>
                      ))}
                    </div>

                    <div className="col-12 col-md-4">
                      <Card className="dropdown-card offer-card h-100">
                        <Card.Body className="d-flex flex-column justify-content-center">
                          <Card.Title className="text-white">
                            Exclusive Offer
                          </Card.Title>
                          <ul className="offer-list">
                            {dropdown.offer.split(". ").map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </NavDropdown>
            ))}
          </Nav>

          <Nav className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <Nav.Link href="#home" onClick={closeNavbar}>
              Investors
            </Nav.Link>
            <Nav.Link href="#link" onClick={closeNavbar}>
              Contact
            </Nav.Link>
            <div className="search-container">
              <BsSearch className="search-icon" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
