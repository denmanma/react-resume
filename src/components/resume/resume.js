import React from "react";
import selfPhoto from "../../images/self-photo.png";
import secLogo from "../../images/security.png";
import caspLogo from "../../images/casp.png";
import JobSection from "../JobSection/JobSection";
/// import './assets/css/style.css';

function Resume() {
  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <body>
          <div id="blockhead" class="blockhead">
            <img
              id="self-photo"
              class="blockhead-image"
              src={selfPhoto}
              alt="Self-photo"
            />
            <div id="blockhead-content">
              <p id="blockhead-name">MICHAEL ALEXANDER DENMAN</p>
              <br />
              United States Citizen
              <br /> Languages: Spanish & English
              <br /> Job Availability Date: None
              <br />
              <address>
                <a id="phone-number" href="tel:+13252772340">
                  Call Me
                </a>
                --
                <a
                  id="email-link"
                  href="mailto:denmanmd@gmail.com?subject=Resume Response&body=In response to madenman.me/resume"
                >
                  Email Me
                </a>
                --
                <a
                  id="linkedin-link"
                  href="https://www.linkedin.com/in/michael-denman/"
                >
                  {" "}
                  Check out my LinkedIn
                </a>
              </address>
            </div>
            <div id="blockhead-certs">
              <a
                id="seclink"
                href="https://www.youracclaim.com/badges/1c4d9cb9-b9da-4602-b60a-48be5a33ad94"
              >
                <img
                  id="seclogo"
                  class="blockhead-image"
                  src={secLogo}
                  alt="Click here for Sec+ Certification"
                />
              </a>
              <a
                id="casplink"
                href="https://www.youracclaim.com/badges/b698b10a-25f6-4f20-9d5a-5455360fffba"
              >
                <img
                  id="casplogo"
                  class="blockhead-image"
                  src={caspLogo}
                  alt="Click here for Sec+ Certification"
                />
              </a>
            </div>
          </div>
          <div id="content">
            <h1 class="labels">EXPERIENCE SUMMARY</h1>
            <div id="experience" class="blocksection">
              <div id="careerprofile" class="block">
                <h1 class="labels">Career Profile</h1>
                <p>
                  <em>
                    Currently performing software support as a Field Service
                    Engineer for Parsons Secure Solutions. Served almost 14
                    years with the United States Air Force with a broad range of
                    experience. Most recently served as an Exploitation Analyst
                    with 5 years experience in high-stress and complex cyber
                    vulnerability analysis.
                  </em>
                </p>
              </div>
              <div id="summary" class="block">
                <h1 class="labels">Summary</h1>
                <ul id="summarybullets">
                  <li type="square">
                    Familiar with Penetration Testing techniques and systems:
                    Unix/Linux/Windows servers and workstations, network device
                    configurations/logs, large data systems, mobile devices
                    (Android, iOS), Kali Linux, Metasploit Framework, Python,
                    Java, and various script languages.
                  </li>
                  <li type="square">
                    Trained in exploitation, cyber incident response and
                    reporting, and analysis of information security
                    vulnerabilities through on-the-job training and technical
                    training via USAF and NSA/CSS.
                  </li>
                  <li type="square">
                    Highly familiar with techniques used for network
                    exploitation, monitoring, and malicious actor
                    identification; including malware detection/analysis,
                    network infrastructure security, application security,
                    industrial network security, business network, and common
                    network vulnerability analysis.
                  </li>
                  <li type="square">
                    Significant experience in supervision and project management
                    to include: Professional Writing, Public Speaking,
                    Motivational Techniques, Technical Writing, Quality Control,
                    and other supervisory techniques.
                  </li>
                </ul>
              </div>
            </div>

            <h1 class="labels">PREVIOUS EMPLOYMENT</h1>

            <div id="blockbullets" class="blocksection">
              <div class="JobSection">
                {/* <DateRange from="may 2014" to="oct 2019" />
                <JobSummary
                  title="Exploitation Analyst"
                  company="USAF"
                  location="San Antonio, TX & Augusta, GA"
                  description="Exploited global communications to support Computer Network
                Operations (CNO). Prepared security assessments, incident
                reports, and other technical and intelligence reports as
                required. Provided studies used to shape the global network
                environment enabling all aspects of U.S. network operations.
                Created and maintained technical and operational databases
                using diverse computer hardware and software applications."
                />
                <ShowHideButton/>
                <BulletStatement bullets={[
                  'Led six personnel across 7 projects to identify 100+ network security vulnerabilities; results highlighted up to and including the President of the United States.' ,
                  'Senior analyst responsible for research and development against Linux/Unix variants, Windows, Firewalls, Routers, Switches, VMWare, Linux Embedded Smart Devices, Antiviruses, and other systems involved in network management.' ,
                  'Completed over 200 live operations in pursuit of network vulnerabilities. Identified vulnerabilities that led to groundbreaking successes in pursuit of headquarters’ objectives.' ,
                  'Trained and certified as a Lead Trainer for 17 Exploitation Analysts; resulted in a 40% increase in qualified personnel.' ,
                  'Became subject matter expert. Provided 50+ intelligence briefings and interoffice training sessions to leadership and peers to improve policies and ensure compliance.'
                  ]} /> */}

                <JobSection
                  dateRange={{ to: "may 2014", from: "oct 2019" }}
                  jobSummary={{
                    title: "Exploitation Analyst",
                    company: "USAF",
                    location: "San Antonio, TX & Augusta, GA",
                    description:
                      "Exploited global communications to support Computer Network Operations (CNO). Prepared security assessments, incident reports, and other technical and intelligence reports as required. Provided studies used to shape the global network environment enabling all aspects of U.S. network operations. Created and maintained technical and operational databases using diverse computer hardware and software applications."
                  }}
                  bulletStatements={{
                    bullets: [
                      "Led six personnel across 7 projects to identify 100+ network security vulnerabilities; results highlighted up to and including the President of the United States.",
                      "Senior analyst responsible for research and development against Linux/Unix variants, Windows, Firewalls, Routers, Switches, VMWare, Linux Embedded Smart Devices, Antiviruses, and other systems involved in network management.",
                      "Completed over 200 live operations in pursuit of network vulnerabilities. Identified vulnerabilities that led to groundbreaking successes in pursuit of headquarters’ objectives.",
                      "Trained and certified as a Lead Trainer for 17 Exploitation Analysts; resulted in a 40% increase in qualified personnel.",
                      "Became subject matter expert. Provided 50+ intelligence briefings and interoffice training sessions to leadership and peers to improve policies and ensure compliance."
                    ]
                  }}
                />
              </div>

              <div class="block">
                <span class="dateformat">FEB 2012 - MAY 2014</span>
                <span class="jobtitle-location">
                  Aircraft Maintenance Quality Assurance Inspector <br /> --
                  USAF, Okinawa, Japan
                  <br />
                </span>
                <p>
                  Performed periodic and spot inspections and was responsible
                  for maintaining the Quality Control, Environmental and Safety
                  Programs at the field level in support of assigned aircraft,
                  personnel, and support equipment.
                </p>
                <button class="showhidebutton" onClick="ShowHide('bullets2')">
                  Show/Hide Bullets
                </button>
                <div id="bullets2" class="bullets">
                  <ul>
                    <li>
                      Performed daily upkeep and upgrades of Microsoft Access
                      database responsible for five inspection programs tracking
                      over 47K inspections. Drafted maintenance guide
                      distributed to Air Force database admins and users across
                      the globe.
                    </li>
                    <li>
                      Sole QA inspector for more than 40 personnel and 2000
                      avionics components. Ensured safety and legal compliance
                      with local, national, and international law, earning the
                      Air Force Commendation Medal.
                    </li>
                    <li>
                      Maintained high attention to detail. Identified and
                      documented over 200 safety and compliance discrepancies
                      and provided corrective courses of action to responsible
                      supervisors to streamline processes and prevent future
                      occurrences.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="block">
                <span class="dateformat">OCT 2005 - FEB 2012</span>
                <span class="jobtitle-location">
                  Avionics Test Station & Components Technician <br /> -- USAF,
                  Abilene, TX & Okinawa, Japan
                  <br />
                </span>
                <p>
                  Performed and managed avionics test station functions and
                  activities. Operated, inspected, maintained, programmed, and
                  calibrated computer and manually operated avionics test
                  equipment, support equipment, and aircraft avionics systems
                  components.
                </p>
                <button class="showhidebutton" onClick="ShowHide('bullets3')">
                  Show/Hide Bullets
                </button>
                <div id="bullets3" class="bullets">
                  <ul>
                    <li>
                      Skilled troubleshooter responsible for repair and return
                      to service of over 1000 aircraft parts. Saved over $500M
                      in replacement costs through a 7-year period, earning an
                      Air Force Achievement Medal.
                    </li>
                    <li>
                      Lead technician responsible for software updates and
                      system upgrades for 13 Windows-based test stations leading
                      to over 99% up-time of required machines.
                    </li>
                    <li>
                      Became lead trainer for radar test equipment. Trained and
                      tracked training for seven personnel.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />

            <h1 class="labels">CURRICULARS</h1>
            <div id="curriculars" class="blocksection">
              <div id="education" class="block">
                <h2 class="labels">Education</h2>

                <p>
                  <b>University of Maryland University College</b>
                </p>
                <ul>
                  <li>
                    BAAS, Software Development and Cyber Security (In progress -
                    3.5 GPA - 41 Credits Remaining)
                  </li>
                </ul>
                <p>
                  <b>Community College of the Air Force</b>
                </p>
                <ul>
                  <li>AAS, Intelligence Studies and Technology</li>
                  <li>AAS, Avionics Systems and Technology</li>
                </ul>
              </div>
              <div id="certificates" class="block">
                <h2 class="labels">Certificates</h2>
                <ul>
                  <li>(2019) CompTIA Security+ ce (Sec+) </li>
                  <li>(2018) CompTIA Advanced Security Practitioner (CASP+)</li>
                  <li>
                    (2017) Computer Network Operations (CNO) Exploitation
                    Analyst
                    <br /> San Antonio, TX
                  </li>
                  <li>
                    (2016) Joint Cyber Analysis Course (Intro to IT)
                    <br /> Pensacola, FL (Honor Graduate)
                  </li>
                  <li>
                    (2014) Digital Network Intelligence Analysis Course
                    <br /> San Angelo, TX (Honor Graduate)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          Case number (RES-2019-01941)
        </body>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Resume;
