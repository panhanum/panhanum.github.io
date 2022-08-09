/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'animate.css';
import Image from './assets/img';
import BorderBoxAnimation from './components/border-box-animation';
import Button from './components/button';
import colorHelper from './utils/color-helper';

function App() {
  const [page, setPage] = useState(0);

  const downloadCV = () => {
    const newWindow = window.open('/assets/pdf/PanjiCV.pdf', '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const homePage = () => {
    return (
      <div className='row'>
        <div className="col-auto col-md-auto d-flex ms-5 ms-md-0 animate__animated animate__zoomInLeft" style={{ minHeight: 300, minWidth: 350 }}>
          <BorderBoxAnimation height={"100%"} width={"100%"}>
            <img src={Image.myPhoto} className="my-photo" alt="myPhoto" />
          </BorderBoxAnimation>
        </div>
        <div className="ms-5 my-3 col-md d-flex flex-column animate__animated animate__zoomInRight animate__delay-1s">
          <h1>
            <span style={{ color: colorHelper.secondary }}>Panji</span>  <span style={{ color: colorHelper.primary }}>Hanum</span>
          </h1>
          <h5 className='fw-normal fst-italic'>Programmer</h5>
          <span className="my-3" style={{ maxWidth: "400px" }}>
            Hello, My name is Panji Hanum, I'm from Indonesia,
            I'm very interesting about IT World, and I love challange
            that can improve my skill, and if u interest about me
            please contact me in <a href="#" onClick={() => setPage(3)}>here</a>
          </span>
          <div className='my-2'>
            <Button onClick={downloadCV} primary>Download CV</Button>
          </div>
          <div className='my-3'>
            <Button onClick={() => setPage(1)} secondary>Next</Button>
          </div>
        </div>
      </div>
    )
  }

  const mySkillPage = () => {
    return (
      <div className='row justify-content-between' style={{ width: "80vw", minHeight: "80vh" }}>
        <div className="col col-md-4 px-1">
          <BorderBoxAnimation height={"100%"} width={"100%"}>
            <img src={Image.myPhoto} className="my-photo" alt="myPhoto" />
          </BorderBoxAnimation>
        </div>
        <div className="col col-md-4 px-1">
          <BorderBoxAnimation height={"100%"} width={"100%"}>
            <img src={Image.myPhoto} className="my-photo" alt="myPhoto" />
          </BorderBoxAnimation>
        </div>
        <div className="col col-md-4 px-1">
          <BorderBoxAnimation height={"100%"} width={"100%"}>
            <img src={Image.myPhoto} className="my-photo" alt="myPhoto" />
          </BorderBoxAnimation>
        </div>
      </div>
    )
  }

  return (
    <div className='mx-100'>
      <div className="position-fixed overflow-hidden bubbles">

        <span style={{ animationDuration: "calc(125s/10)" }}></span>
        <span style={{ animationDuration: "calc(125s/5)" }}></span>
        <span style={{ animationDuration: "calc(125s/15)" }}></span>
        <span style={{ animationDuration: "calc(125s/20)" }}></span>
        <span style={{ animationDuration: "calc(125s/40)" }}></span>
        <span style={{ animationDuration: "calc(125s/10)" }}></span>
        <span style={{ animationDuration: "calc(125s/5)" }}></span>
        <span style={{ animationDuration: "calc(125s/12)" }}></span>
        <span style={{ animationDuration: "calc(125s/11)" }}></span>
        <span style={{ animationDuration: "calc(125s/15)" }}></span>
        <span style={{ animationDuration: "calc(125s/5)" }}></span>
        <span style={{ animationDuration: "calc(125s/12)" }}></span>
        <span style={{ animationDuration: "calc(125s/11)" }}></span>
        <span style={{ animationDuration: "calc(125s/15)" }}></span>
        <span style={{ animationDuration: "calc(125s/10)" }}></span>
        <span style={{ animationDuration: "calc(125s/5)" }}></span>
        <span style={{ animationDuration: "calc(125s/15)" }}></span>
        <span style={{ animationDuration: "calc(125s/20)" }}></span>
        <span style={{ animationDuration: "calc(125s/40)" }}></span>
        <span style={{ animationDuration: "calc(125s/50)" }}></span>
        <span style={{ animationDuration: "calc(125s/51)" }}></span>
        <span style={{ animationDuration: "calc(125s/15)" }}></span>
        <span style={{ animationDuration: "calc(125s/22)" }}></span>
        <span style={{ animationDuration: "calc(125s/15)" }}></span>
        <span style={{ animationDuration: "calc(125s/5)" }}></span>
        <span style={{ animationDuration: "calc(125s/12)" }}></span>
        <span style={{ animationDuration: "calc(125s/11)" }}></span>
        <span style={{ animationDuration: "calc(125s/15)" }}></span>
      </div>
      <div className="content position-relative">
        {page === 0 && homePage()}
        {(page === 1) && mySkillPage()}
      </div>
    </div >
  )

}

export default App;
