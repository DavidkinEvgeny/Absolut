import React from 'react';
import './Branches.scss'

class Branches extends React.Component {
    render() {
        let branch
        {if(window.innerWidth > 1440) {
                branch = <svg svg xmlns="http://www.w3.org/2000/svg" width="920" height="105">
                    <polygon points="0,0 910,0 840,95 0,95" fill="rgba(218, 166, 36,0.8)" />
                    <polygon points="10,95 840,95 903,10 920,10 845,105 10,105" fill="rgba(10, 14, 14, 0.8)" />
                </svg>
            } else if(1280 < window.innerWidth && window.innerWidth < 1441) {
                branch = <svg svg xmlns="http://www.w3.org/2000/svg" width="920" height="105">
                    <polygon points="0,0 910,0 840,95 0,95" fill="rgba(218, 166, 36,0.8)" />
                    <polygon points="10,95 840,95 903,10 920,10 845,105 10,105" fill="rgba(10, 14, 14, 0.8)" />
                </svg>
            } else if(1024 < window.innerWidth && window.innerWidth < 1281) {
                branch = <svg xmlns="http://www.w3.org/2000/svg" width="600" height="95">
                    <polygon points="0,0 590,0 540,85 0,85" fill="rgba(218, 166, 36,0.8)"/>
                    <polygon points="10,85 540,85 587,10 600,10 544,95 10,95"  fill="rgba(10, 14, 14, 0.8)"/>
                </svg>
            } else if(720 < window.innerWidth && window.innerWidth < 1025) {
                branch = <svg xmlns="http://www.w3.org/2000/svg" width="600" height="95">
                    <polygon points="0,0 590,0 540,85 0,85" fill="rgba(218, 166, 36,0.8)"/>
                    <polygon points="10,85 540,85 587,10 600,10 544,95 10,95"  fill="rgba(10, 14, 14, 0.8)"/>
                </svg>
            } else if(640 < window.innerWidth && window.innerWidth < 721) {
                branch = <svg xmlns="http://www.w3.org/2000/svg" width="600" height="95">
                    <polygon points="0,0 590,0 540,85 0,85" fill="rgba(218, 166, 36,0.8)"/>
                    <polygon points="10,85 540,85 587,10 600,10 544,95 10,95"  fill="rgba(10, 14, 14, 0.8)"/>
                </svg>
            } else if(540 < window.innerWidth && window.innerWidth < 641) {
                branch = <svg xmlns="http://www.w3.org/2000/svg" width="400" height="80">
                    <polygon points="0,0 390,0 354,70 0,70" fill="rgba(218, 166, 36,0.8)"/>
                    <polygon points="10,70 354,70 383,10 400,10 364,80 10,80" fill="rgba(10, 14, 14, 0.8)"/>
                </svg>
            } else if(360 < window.innerWidth && window.innerWidth < 541) {
                branch = <svg xmlns="http://www.w3.org/2000/svg" width="340" height="80">
                    <polygon points="0,0 330,0 300,70 0,70" fill="rgba(218, 166, 36,0.8)"/>
                    <polygon points="10,70 300,70 326,10 336,10 306,80 10,80"  fill="rgba(10, 14, 14, 0.8)"/>
                </svg>
            } else if(window.innerWidth < 361) {
                branch = <svg xmlns="http://www.w3.org/2000/svg" width="180" height="40">
                    <polygon points="0,0 170,0 140,35 0,35" fill="rgba(218, 166, 36,0.8)"/>
                    <polygon points="5,35 140,35 166,5 175,5 140,40 5,40" fill="rgba(10, 14, 14, 0.8)"/>
                </svg>
            }
        } 
        return(
            
            <div className='branches' id='branches'>
                <div className='wrapper'>
                    <h2>Филиалы</h2>
                    <ul className='branches__list'>
                        <li>
                            {branch}
                            <p>Свои финансовые управляющие</p>
                        </li>
                        <li>
                            {branch}
                            <p>Филиалы в городах России</p>
                        </li>
                        <li>
                            {branch}    
                            <p>Бесплатные консультации</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Branches
