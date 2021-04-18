import React from 'react';
import axios from 'axios';
import './Header.scss';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tel: ''
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeTel = this.handleChangeTel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value,
        })
    }
    handleChangeTel(event) {
        this.setState({
            tel: event.target.value
        })
    }

    
    async handleSubmit(event) {
        event.preventDefault();
        const { name, tel,} = this.state
        const form = await axios.post('/api/form', {
            name,
            tel
        })
    }

    
    render() {
        let phone, nowait, debt
        {if(window.innerWidth > 1440) {
            phone = <svg xmlns="http://www.w3.org/2000/svg" width="915" height="115">
                <polygon points="70,0 910,0 910,110 0,110" fill="#ffc125"/>
                <polygon points="10,110 910,110 910,0 920,10 920,120 10,120" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            nowait = <svg xmlns="http://www.w3.org/2000/svg" width="1170" height="240">
                <polygon points="0,0 1160,0 1040,230 0,230" fill="#ffc125"/>
                <polygon points="10,230 1040,230 1153,10 1170,10 1047,240 10,240"  fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            debt = <svg xmlns="http://www.w3.org/2000/svg" width="640" height="100">
                <polygon points="0,0 630,0 570,90 0,90" fill="#02147d"/>
                <polygon points="10,90 570,90 623,10 640,10 580,100 10,100" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
        } else if(1280 < window.innerWidth && window.innerWidth < 1441) {
            phone = <svg xmlns="http://www.w3.org/2000/svg" width="915" height="115">
                <polygon points="70,0 910,0 910,110 0,110" fill="#ffc125"/>
                <polygon points="10,110 910,110 910,0 920,10 920,120 10,120" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            nowait = <svg xmlns="http://www.w3.org/2000/svg" width="910" height="240">
                <polygon points="0,0 900,0 803,230 0,230" fill="#ffc125"/>
                <polygon points="10,230 803,230 895,10 910,10 810,240 10,240"  fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            debt = <svg xmlns="http://www.w3.org/2000/svg" width="640" height="100">
                <polygon points="0,0 630,0 570,90 0,90" fill="#02147d"/>
                <polygon points="10,90 570,90 623,10 640,10 580,100 10,100" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
        } else if(1024 < window.innerWidth && window.innerWidth < 1281) {
            phone = <svg xmlns="http://www.w3.org/2000/svg" width="500" height="115">
                <polygon points="70,0 910,0 910,110 0,110" fill="#ffc125"/>
                <polygon points="10,110 910,110 910,0 920,10 920,120 10,120" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            nowait = <svg xmlns="http://www.w3.org/2000/svg" width="600" height="140">
                <polygon points="0,0 590,0 540,130 0,130" fill="#ffc125"/>
                <polygon points="10,130 540,130 587,10 600,10 544,140 10,140"  fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            debt = <svg xmlns="http://www.w3.org/2000/svg" width="640" height="50">
                <polygon points="0,0 630,0 570,40 0,40" fill="#02147d"/>
                <polygon points="10,40 570,40 616,10 640,10 580,50 10,50" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
        } else if(720 < window.innerWidth && window.innerWidth < 1025) {
            phone = <svg xmlns="http://www.w3.org/2000/svg" width="500" height="115">
                <polygon points="70,0 910,0 910,110 0,110" fill="#ffc125"/>
                <polygon points="10,110 910,110 910,0 920,10 920,120 10,120" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            nowait = <svg xmlns="http://www.w3.org/2000/svg" width="600" height="140">
                <polygon points="0,0 590,0 540,130 0,130" fill="#ffc125"/>
                <polygon points="10,130 540,130 587,10 600,10 544,140 10,140"  fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            debt = <svg xmlns="http://www.w3.org/2000/svg" width="640" height="50">
                <polygon points="0,0 630,0 570,40 0,40" fill="#02147d"/>
                <polygon points="10,40 570,40 616,10 640,10 580,50 10,50" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
        } else if(640 < window.innerWidth && window.innerWidth < 721) {
            phone = <svg xmlns="http://www.w3.org/2000/svg" width="500" height="115">
                <polygon points="70,0 910,0 910,110 0,110" fill="#ffc125"/>
                <polygon points="10,110 910,110 910,0 920,10 920,120 10,120" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            nowait = <svg xmlns="http://www.w3.org/2000/svg" width="600" height="140">
                <polygon points="0,0 590,0 540,130 0,130" fill="#ffc125"/>
                <polygon points="10,130 540,130 587,10 600,10 544,140 10,140"  fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            debt = <svg xmlns="http://www.w3.org/2000/svg" width="400" height="50">
                <polygon points="0,0 390,0 354,40 0,40" fill="#02147d"/>
                <polygon points="10,40 354,40 382,10 400,10 364,50 10,50" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
        } else if(540 < window.innerWidth && window.innerWidth < 641) {
            phone = <svg xmlns="http://www.w3.org/2000/svg" width="400" height="80">
                <polygon points="70,0 390,0 390,70 0,70" fill="#ffc125"/>
                <polygon points="10,70 390,70 390,0 400,10 400,80 10,80" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            nowait = <svg xmlns="http://www.w3.org/2000/svg" width="450" height="140">
                <polygon points="0,0 440,0 400,130 0,130" fill="#ffc125"/>
                <polygon points="10,130 400,130 437,10 450,10 404,140 10,140"  fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            debt = <svg xmlns="http://www.w3.org/2000/svg" width="400" height="50">
                <polygon points="0,0 390,0 354,40 0,40" fill="#02147d"/>
                <polygon points="10,40 354,40 382,10 400,10 364,50 10,50" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
        } else if(360 < window.innerWidth && window.innerWidth < 541) {
            phone = <svg xmlns="http://www.w3.org/2000/svg" width="340" height="80">
                <polygon points="70,0 330,0 330,70 0,70" fill="#ffc125"/>
                <polygon points="10,70 330,70 330,0 340,10 340,80 10,80" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            nowait = <svg xmlns="http://www.w3.org/2000/svg" width="340" height="80">
                <polygon points="0,0 330,0 300,70 0,70" fill="#ffc125"/>
                <polygon points="10,70 300,70 326,10 336,10 306,80 10,80"  fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            debt = <svg xmlns="http://www.w3.org/2000/svg" width="180" height="30">
                <polygon points="0,0 170,0 140,25 0,25" fill="#02147d"/>
                <polygon points="5,25 140,25 164,5 175,5 140,30 5,30" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
        } else if(window.innerWidth < 361) {
            phone = <svg xmlns="http://www.w3.org/2000/svg" width="220" height="80">
                <polygon points="70,0 210,0 210,70 0,70" fill="#ffc125"/>
                <polygon points="10,70 210,70 210,0 220,10 220,80 10,80" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            nowait = <svg xmlns="http://www.w3.org/2000/svg" width="220" height="80">
                <polygon points="0,0 210,0 180,70 0,70" fill="#ffc125"/>
                <polygon points="10,70 180,70 205,10 215,10 185,80 10,80"  fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
            debt = <svg xmlns="http://www.w3.org/2000/svg" width="180" height="30">
                <polygon points="0,0 170,0 140,25 0,25" fill="#02147d"/>
                <polygon points="5,25 140,25 164,5 175,5 140,30 5,30" fill="rgba(36, 65, 70, 0.8)"/>
            </svg>
        }
        }
        return(
            <div className='wrap'>
            <div className='head'>
                <div className='circle' />
                <div className='hummer' />
            </div>
            <div className='header'>
                <div className='wrapper'>
                    <div className='header__flex'>
                        <div className='header__logo'>
                            <a href='/'></a>
                        </div>
                        <div className='header__social'>
                            <ul>
                                <li><a href='https://api.whatsapp.com/send?phone=<79183294001>' className='whatsapp' target='blank'></a></li>
                                <li><a href='https://www.instagram.com/ooo_absolutyk/' className='instagram' target='blank'></a></li>
                                <li><a href='https://t.me/oooabsolut/' className='telegram' target='blank'></a></li>
                            </ul>
                            <div className='time'>
                                <h3>Часы работы</h3>
                                <p>с 9-19 часов</p>
                            </div>
                        </div>
                    </div>
                    <div className='header__phone'>
                        {phone}
                        <ul>
                            <li><a href='tel:+79685486979'>8(968)548-69-79 Москва</a></li>
                            <li><a href='tel:+79183294001'>8(918)329-40-01 Краснодар</a></li>
                        </ul>
                        <div></div>
                    </div>
                <menu>
                    <ul>
                        <li><a href='#about'>О нас</a></li>
                        <li><a href='#contact'>Контакты</a></li>
                        <li><a href='#branches'>Стоимость</a></li>
                    </ul>
                </menu>
                </div>
                <div className='nowait'>
                    {nowait}
                    <p>Не ждите когда приставы либо коллекторы придут к Вам звоните!!!</p>
                </div>
                <div className='header__footer'>
                    <div className='stop'>
                        <ul>
                            <li><span></span>Остановим рост долгов</li>
                            <li>
                                {debt}
                                <p>Спишем старые долги</p>
                            </li>
                            <li><span></span>Начнёте с чистого листа</li>
                        </ul>
                    </div>
                    <div className='feedback'>
                        <h2>Записаться на бесплатную консультацию прямо сейчас</h2>
                        <form onSubmit={this.handleSubmit}>
                            <input type='text' name='name' value={this.state.name} placeholder='Как Вас зовут?' onChange={this.handleChangeName} required />
                            <input type='text' name='tel' value={this.state.tel} placeholder='Введите контактный телефон' onChange={this.handleChangeTel} required />
                            <input type='submit' value='Перезвоните мне' />
                            <span />
                        </form>
                    </div>
                    <div className='A' />
                </div>
            </div>
        </div>
        )
    }
}

export default Header
