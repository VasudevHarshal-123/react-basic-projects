import React from 'react';
import "./styles/ResumeContent.css";

function ResumeContent() {

  const getUserExperience = (company, year, work) => {
    return (
      <section className="resume-content-user-experience-wrapper">
        <section className="resume-content-company-year-wrapper">
          <h4>{company}</h4>
          <p>{year}</p>
        </section>
        <section className="resume-content-user-experience-bullet">
          <ul>
            {
              work.map((list, index) => <li key={index}>{list}</li>)
            }
          </ul>
        </section>
      </section>
    )
  }

  //Assignment- Digital clock, Todo app, Random quote generator, scarne's dice => 

  const getExperience = () => {
    return (
      <section className="resume-content-experience-wrapper">
        <section>
          <h3>Experience</h3>
        </section>
        {getUserExperience("Software endginner, PPA", "oct-2019-present", ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"])}
        {getUserExperience("Software endginner, PPA", "oct-2019-present", ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"])}
      </section>
    )
  }

  const getUserEducation = (degree, year, institution, marks) => {
    return (
      <section className="resume-content-user-education-wrapper">
        <section className="resume-content-degree-year-wrapper">
          <h4>{degree}</h4>
          <p>{year}</p>
        </section>
        <section className="resume-content-intitution-marks-wrapper">
          <h5><b>{institution}</b></h5>
          <p>{marks}</p>
        </section>
      </section>
    )
  }

  const getEducation = () => {
    return (
      <section className="resume-content-education-wrapper">
        <section><h3>Eduation</h3></section>
        {getUserEducation("Integrated MSc.(Mathematics and Computing)", "2015-2020", "Birla Institute of Technology, Mesra", "CGPA-7.6")}
        {getUserEducation("Integrated MSc.(Mathematics and Computing)", "2015-2020", "Birla Institute of Technology, Mesra", "CGPA-7.6")}
        {getUserEducation("Integrated MSc.(Mathematics and Computing)", "2015-2020", "Birla Institute of Technology, Mesra", "CGPA-7.6")}
      </section>
    )
  }

  const getInterests = () => {
    return (
      <section className="resume-content-interest-wrapper">
        <section><h3>Interests</h3></section>
        <h4>Table Tennis, Chess, Reading books, Reading Technology blog</h4>
      </section>
    )
  }

  const getAchivAndCert = () => {
    return (
      <section className="resume-content-achive-cert-wrapper">
        <section><h3>Achivements & Certifications</h3></section>
        <ul>
          <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
          <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
          <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
        </ul>
      </section>
    )
  }

  const getUserProjects = (name, timePeriod, work) => {
    return (
      <section className="resume-content-user-projects-wrapper">
        <section className="resume-content-user-project-name-wrapper">
          <h4>{name}</h4>
          <p>{timePeriod}</p>
        </section>
        <section className="resume-content-user-project-work-wrapper">
          <ul>
            {
              work.map((list, index) => <li key={index}>{list}</li>)
            }
          </ul>
        </section>
      </section>
    )
  }

  const getProjects = () => {
    return (
      <section className="resume-content-projects-wrapper">
        <section><h3>Projects </h3></section>
          {getUserProjects("Todo App","jan-2022",["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"])}
          
          {getUserProjects("Scarne's Dice","jan-2022",["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"])}
      </section>
    )
  }

  return (
    <div className="resume-content-wrapper">
      {getEducation()}
      {getExperience()}
      {getProjects()}
      {getAchivAndCert()}
      {getInterests()}
    </div>
  )
}

export default ResumeContent;
