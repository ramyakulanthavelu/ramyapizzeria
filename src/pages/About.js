import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
       <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}>
    
        </div>
            <div className='aboutBottom'>
                <h1>ABOUT US</h1>
                <p> To be, or not to be: that is the question: 
                    whether 'tis nobler in the mind to suffer the slings and 
                    arrows of outrageous fortune, or to take arms against a 
                    sea of troubles, and by opposing end them? To die: to sleep; 
                    no more; and, by a sleep to say we end the heart-ache and the 
                    thousand natural shocks that flesh is heir to, 'tis a consummation 
                    devoutly to be wish'd. To die, to sleep; to sleep: perchance to dream: 
                    ay, there's the rub; for in that sleep of death what dreams may come 
                    when we have shuffled off this mortal coil, must give us pause. 
                    There's the respect that makes calamity of so long a life; for 
                    who would bear the whips and scorns of time, the oppressor's wrong, 
                    the proud man's contumely, the pangs of dispriz'd love, the law's delay,
                     the insolence of office, and the spurns that patient merit of the unworthy takes, 
                     when he himself might his quietus make with a bare bodkin? Who would fardels bear, 
                     to grunt and sweat under a weary life, but that the dread of something after death, 
                     the undiscover'd country from whose bourn no traveller returns, puzzles the will, and 
                     makes us rather bear those ills we have, 
                     than fly to others that we know not of? 
                     </p>
            </div>

    </div>
  )
}

export default About