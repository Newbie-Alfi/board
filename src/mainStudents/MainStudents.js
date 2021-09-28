import React, {useContext, useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import './main_students.css'
import mainStudent1 from './Main_student1.jpg'
import mainStudent2 from './Main_student2.jpg'
import mainStudent3 from './Main_student3.jpg'
import mainStudent4 from './Main_student4update.png'
import MainStudent from './MainStudent.js'
import { MyContext } from '../App';

let MainStudents = () => {
    const value = useContext(MyContext);
    const anchor = useRef();

    useEffect(() => {
        value.updateAnchors(anchor);
    },[])

    return (
        <div className="anchor__source wrapper__main_students" id ="ms" ref = {anchor}>
            <Carousel fade>
                <Carousel.Item>
                <MainStudent photo={mainStudent1} name='Зуйна Акимова' about_main ='Проект «Интегрированное управление цифровыми потоками данных в мультимодальных автоматизированных системах». ' about_second='Шульженко Татьяна Геннадьевна) признан лучшим по направлению «Автоматизированные терминалы и роботизированные комплексы для ускорения погрузо-разгрузочных работ при грузовых мультимодальных перевозках».подготовленный студентами 4 курса программы бакалавриата «Логистика и управление цепями поставок» Светланой Григорьевой, Леонидом Бирюковым, Александрой Кузнецовой, Натальей Остапенко (научный руководитель – профессор кафедры логистики и управления цепями поставок, д.э.н.'/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <MainStudent photo={mainStudent2} name='Егор Бенхасов' about_main ='Проект «Интегрированное управление цифровыми потоками данных в мультимодальных автоматизированных системах»'about_second= 'подготовленный студентами 4 курса программы бакалавриата «Логистика и управление цепями признан лучшим по направлению «Автоматизированные терминалы и роботизированные комплексы для ускорения погрузо-разгрузочных работ при грузовых мультимодальных перевозках».'/>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <MainStudent photo={mainStudent3} name='Айчар Патура' about_main='Победительница III Межгалактического программирования по Python проводимым в точке Кипения РГЭУ (РИНХ) корпуса Звездной системы Глушенко++ на планете Махню долина лучшего университета '/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <MainStudent photo={mainStudent4} name='Айчар Патура' about_main='Победительница III Межгалактического программирования по Python проводимым в точке Кипения РГЭУ (РИНХ) корпуса Звездной системы Глушенко++ на планете Махню долина лучшего университета '/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default MainStudents;