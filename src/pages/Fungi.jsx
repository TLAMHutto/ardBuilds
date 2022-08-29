import React from 'react'
import '../assets/css/fungi.css'
function Fungi() {
  return (
    <>
    <div>
      <h3 className='fungi-about'>
      Here you can find information on using arduino and various electrical components and sensors and instruments to automate to process of growing fungi and mycelium indoors for personal uses and research purposes.
      </h3>

       <ul className='mat-list'>
        <label className='mat-label'>Parts && Materials</label>
        <li className='mat-list-item'><a href='https://www.arduino.cc/' target='_blank'>Arduino</a></li>
        <li className='mat-list-item'><a href='https://www.lowes.com/pd/Project-Source-Project-Source-13-QT-Clear-Snap-Lid-Tote/1003095820' target='_blank' >Medium 3.25-Gallon Plastic Tub</a></li>
       
       <li className="mat-list-item">Spores of your choice</li>
        <li className="mat-list-item" target='_blank'><a href='https://www.amazon.com/60mm-12V-Case-Fan-PANOMOUNTS/dp/B07K2Y9XSH?th=1' target='_blank'>2x Computer Fans for circulation</a></li>
        <li className="mat-list-item"><a href='https://www.amazon.com/Mornajina-Outdoor-Misting-Cooling-Nozzles/dp/B08XZC9XB9/ref=asc_df_B08XZC9XB9/?tag=hyprod-20&linkCode=df0&hvadid=533363890957&hvpos=&hvnetw=g&hvrand=9771620887128783430&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9027055&hvtargid=pla-1384919328145&th=1' target='_blank'>Misting System(Here's what I used)</a></li>
        <li className="mat-list-item"><a href='https://www.hackster.io/najad/12v-rgb-led-with-arduino-fb6c46' target='_blank'>Some LEDs</a></li>
        </ul>
    </div>
    </>
  )
}

export default Fungi
