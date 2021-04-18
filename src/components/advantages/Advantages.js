import React from 'react';
import './Advantages.scss'

class Advanteges extends React.Component {
    render() {
        return(
            <div className='advanteges'>
                <div className='wrapper'>
                    <h2>Стоимость</h2>
                    <ul>
                        <h3>Наши Приемущества:</h3>
                        <li><span></span>Качество работы</li>
                        <li><span></span>Стоимость услуг*</li>
                        <li><span></span>Индивидуальный подход</li>
                    </ul>
                    <p>(Стоимость услуг обговаривается индивидуально после консультации и оценки документов)</p>
                </div>
            </div>
        )
    }
}

export default Advanteges
