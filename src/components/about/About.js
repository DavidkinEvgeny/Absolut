import React from 'react';
import './About.scss'

class About extends React.Component {
    render() {
        return(
            <div className='about' id='about'>
                <div className='wrapper'>
                    <h2>О нас</h2>
                    <div className='about__content1'>
                        <p>Юридическая компания «Абсолют» один из лидеров в области банкротства физических лиц, компания имеет офисы в нескольких городах российской федерации и работает по всей россии. Огромный опыт наших юристов помогает нашим клиентам обритать спокойствие.</p>
                        <p>Компания «Абсолют»-это динамически развивающаяся компания в области права.</p>
                        <p>Наша компания всегда доводит начатое до конца.</p>
                    </div>
                    <div className='about__content2'>
                        <p>ООО «Абсолют»   ИНН:2308257370   ОГРН:1182375052980</p>
                    </div>
                    <p className='about__content3'>* одна из самых низких цен на рынке услуг</p>
                </div>
            </div>
        )
    }
}

export default About
