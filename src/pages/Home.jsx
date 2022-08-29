import React from 'react'

// import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/home.css';


function Home() {
  return (
    <>
    <div className='container-home'>
      <h1 className="about-title">Welcome to my Arduino build page</h1>
      <p className="about-text">I made this page to track and document and share various projects that I have created and finished using arduino's single board computer. Hopfully these projects will help anyone searching for similar ideas or interests</p>
      <p className='github-link'><a href='https://github.com/TLAMHutto' target='_blank'>My GitHub</a></p>
    </div>
    </>
  )
}

export default Home
