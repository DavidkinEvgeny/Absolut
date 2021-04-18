import React from 'react';
import './Contact.scss'

class Contact extends React.Component {
    render() {
        let one, two, three
        {if(window.innerWidth > 1440) {
            one = <svg xmlns="http://www.w3.org/2000/svg" width="920" height="105">
                <polygon points="0,0 910,0 840,95 0,95" fill="rgba(100, 87, 251, 0.8)" />
                <polygon points="10,95 840,95 903,10 920,10 845,105 10,105" fill="rgba(155, 186, 224, 0.8)" />
            </svg>
            two = <svg xmlns="http://www.w3.org/2000/svg" width="920" height="220">
                <polygon points="0,0 910,0 840,210 0,210" fill="rgba(100, 87, 251, 0.8)" />
                <polygon points="10,210 840,210 907,10 920,10 845,220 10,220" fill="rgba(155, 186, 224, 0.8)" />
            </svg>
            three = <svg xmlns="http://www.w3.org/2000/svg" width="920" height="140">
                <polygon points="0,0 910,0 840,130 0,130" fill="rgba(100, 87, 251, 0.8)" />
                <polygon points="10,130 840,130 903,10 920,10 845,140 10,140" fill="rgba(155, 186, 224, 0.8)" />
            </svg>
        } else if(1280 < window.innerWidth && window.innerWidth < 1441) {
            one = <svg xmlns="http://www.w3.org/2000/svg" width="920" height="105">
                <polygon points="0,0 910,0 840,95 0,95" fill="rgba(100, 87, 251, 0.8)" />
                <polygon points="10,95 840,95 903,10 920,10 845,105 10,105" fill="rgba(155, 186, 224, 0.8)" />
            </svg>
            two = <svg xmlns="http://www.w3.org/2000/svg" width="920" height="220">
                <polygon points="0,0 910,0 840,210 0,210" fill="rgba(100, 87, 251, 0.8)" />
                <polygon points="10,210 840,210 907,10 920,10 845,220 10,220" fill="rgba(155, 186, 224, 0.8)" />
            </svg>
            three = <svg xmlns="http://www.w3.org/2000/svg" width="920" height="140">
                <polygon points="0,0 910,0 840,130 0,130" fill="rgba(100, 87, 251, 0.8)" />
                <polygon points="10,130 840,130 903,10 920,10 845,140 10,140" fill="rgba(155, 186, 224, 0.8)" />
            </svg>
        } else if(1024 < window.innerWidth && window.innerWidth < 1281) {
            one = <svg xmlns="http://www.w3.org/2000/svg" width="600" height="95">
                <polygon points="0,0 590,0 540,85 0,85" fill="rgba(100, 87, 251, 0.8)"/>
                <polygon points="10,85 540,85 584,10 600,10 544,95 10,95"  fill="rgba(155, 186, 224, 0.8)"/>
            </svg>
            two = <svg xmlns="http://www.w3.org/2000/svg" width="920" height="140">
                <polygon points="0,0 590,0 540,130 0,130" fill="rgba(100, 87, 251, 0.8)" />
                <polygon points="10,130 540,130 587,10 600,10 545,140 10,140" fill="rgba(155, 186, 224, 0.8)" />
            </svg>
            three = <svg xmlns="http://www.w3.org/2000/svg" width="600" height="95">
                <polygon points="0,0 590,0 540,85 0,85" fill="rgba(100, 87, 251, 0.8)"/>
                <polygon points="10,85 540,85 584,10 600,10 544,95 10,95"  fill="rgba(155, 186, 224, 0.8)"/>
            </svg>
        } else if(720 < window.innerWidth && window.innerWidth < 1025) {
            one = <svg xmlns="http://www.w3.org/2000/svg" width="600" height="95">
                <polygon points="0,0 590,0 540,85 0,85" fill="rgba(100, 87, 251, 0.8)"/>
                <polygon points="10,85 540,85 584,10 600,10 544,95 10,95"  fill="rgba(155, 186, 224, 0.8)"/>
            </svg>
            two = <svg xmlns="http://www.w3.org/2000/svg" width="920" height="140">
                <polygon points="0,0 590,0 540,130 0,130" fill="rgba(100, 87, 251, 0.8)" />
                <polygon points="10,130 540,130 587,10 600,10 545,140 10,140" fill="rgba(155, 186, 224, 0.8)" />
            </svg>
            three = <svg xmlns="http://www.w3.org/2000/svg" width="600" height="95">
                <polygon points="0,0 590,0 540,85 0,85" fill="rgba(100, 87, 251, 0.8)"/>
                <polygon points="10,85 540,85 584,10 600,10 544,95 10,95"  fill="rgba(155, 186, 224, 0.8)"/>
            </svg>
        } else if(640 < window.innerWidth && window.innerWidth < 721) {
            one = <svg xmlns="http://www.w3.org/2000/svg" width="400" height="80">
                <polygon points="0,0 390,0 354,70 0,70" fill="rgba(100, 87, 251, 0.8)"/>
                <polygon points="10,70 354,70 385,10 400,10 364,80 10,80" fill="rgba(155, 186, 224, 0.8)"/>
            </svg>
            two = <svg xmlns="http://www.w3.org/2000/svg" width="920" height="95">
                <polygon points="0,0 390,0 354,85 0,85" fill="rgba(100, 87, 251, 0.8)" />
                <polygon points="10,85 354,85 384,10 400,10 364,95 10,95" fill="rgba(155, 186, 224, 0.8)" />
            </svg>
            three = <svg xmlns="http://www.w3.org/2000/svg" width="400" height="80">
                <polygon points="0,0 390,0 354,70 0,70" fill="rgba(100, 87, 251, 0.8)"/>
                <polygon points="10,70 354,70 385,10 400,10 364,80 10,80" fill="rgba(155, 186, 224, 0.8)"/>
            </svg>
        } else if(360 < window.innerWidth && window.innerWidth < 641) {
            one = <svg xmlns="http://www.w3.org/2000/svg" width="340" height="80">
                <polygon points="0,0 330,0 300,70 0,70" fill="rgba(100, 87, 251, 0.8)"/>
                <polygon points="10,70 300,70 326,10 336,10 306,80 10,80"  fill="rgba(155, 186, 224, 0.8)"/>
            </svg>
            two = <svg xmlns="http://www.w3.org/2000/svg" width="340" height="95">
                <polygon points="0,0 330,0 300,85 0,85" fill="rgba(100, 87, 251, 0.8)"/>
                <polygon points="10,85 300,85 326,10 336,10 306,95 10,95"  fill="rgba(155, 186, 224, 0.8)"/>
            </svg>
            three = <svg xmlns="http://www.w3.org/2000/svg" width="340" height="80">
                <polygon points="0,0 330,0 300,70 0,70" fill="rgba(100, 87, 251, 0.8)"/>
                <polygon points="10,70 300,70 326,10 336,10 306,80 10,80"  fill="rgba(155, 186, 224, 0.8)"/>
            </svg>
        } else if(window.innerWidth < 361) {
            one = <svg xmlns="http://www.w3.org/2000/svg" width="220" height="40">
                <polygon points="0,0 210,0 180,35 0,35" fill="rgba(100, 87, 251, 0.8)"/>
                <polygon points="5,35 180,35 205,5 215,5 185,40 5,40" fill="rgba(155, 186, 224, 0.8)"/>
            </svg>
            two = <svg xmlns="http://www.w3.org/2000/svg" width="220" height="80">
                <polygon points="0,0 210,0 180,70 0,70" fill="rgba(100, 87, 251, 0.8)"/>
                <polygon points="10,70 180,70 205,10 215,10 185,80 10,80"  fill="rgba(155, 186, 224, 0.8)"/>
            </svg>
            three = <svg xmlns="http://www.w3.org/2000/svg" width="220" height="40">
                <polygon points="0,0 210,0 180,35 0,35" fill="rgba(100, 87, 251, 0.8)"/>
                <polygon points="5,35 180,35 205,5 215,5 185,40 5,40" fill="rgba(155, 186, 224, 0.8)"/>
            </svg>
        }
        }
        return(
            <div className='contact' id='contact'>
                <div className='wrapper'>
                    <h2>Контакты</h2>
                    <ul className='contact__list'>
                        <li>
                            {one}
                            <span />
                            <p>absolut.yurist@gmail.com</p>
                        </li>
                        <li>
                            {two}
                            <span />
                            <p>Москва, ул.Артюхиной, д.6, корп.2 <br/><span>Текстильщики</span></p>
                        </li>
                        <li>
                            {three}
                            <p>Краснодар, ул.Гаврилова, 115</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Contact
