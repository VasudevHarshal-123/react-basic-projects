import React from 'react';

function ResumeContent() {
  const getExperience = () => {
    return (
      <section>

      </section>
    )
  }

  const getCollegeEducation = () => {
    return (
      <section>
        <section>
          <h4>Integrated MSc.(Mathematics and Computing)</h4>
          <p>2015-2020</p>
        </section>
        <section>
          <h5><b>Birla Institute of Technology,Mesra</b></h5>
          <p>CGPA-7.6</p>
        </section>
      </section>
    )
  }

  const getHigherEducation = () => {
    return (
      <section>
        <section>
          <h4>Integrated MSc.(Mathematics and Computing)</h4>
          <p>2015-2020</p>
        </section>
        <section>
          <h5><b>Birla Institute of Technology,Mesra</b></h5>
          <p>CGPA-7.6</p>
        </section>
      </section>
    )
  }

  const getSecondaryEducation = () => {
    return (
      <section>
        <section>
          <h4>Integrated MSc.(Mathematics and Computing)</h4>
          <p>2015-2020</p>
        </section>
        <section>
          <h5><b>Birla Institute of Technology,Mesra</b></h5>
          <p>CGPA-7.6</p>
        </section>
      </section>
    )
  }

  const getEducation = () => {
    return (
      <section>
        {getCollegeEducation()}
        {getHigherEducation()}
        {getSecondaryEducation()}
      </section>
    )
  }

  const getInterests = () => {
    return (
      <section>

      </section>
    )
  }

  const getAchivAndCert = () => {
    return (
      <section>

      </section>
    )
  }

  const getProjects = () => {
    return (
      <section>

      </section>
    )
  }

  return (
    <div>
      {getExperience()}
      {getEducation()}
      {getProjects()}
      {getAchivAndCert()}
      {getInterests()}
    </div>
  )
}

export default ResumeContent;
