import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel,Item,Caption } from 'react-bootstrap'
import './main_students.css'
import main_student1 from './Main_student1.jpg'
import main_student2 from './Main_student2.jpg'
import main_student3 from './Main_student3.jpg'
import main_student4 from './Main_student4update.png'
// let obj = {
//     photo : './Main_student1.jpg',
//     name: 'Зуйна Шарипова',
//     about :  'asdfadfafa asdfafsasf asfasfasf'
// }
import Main_student from './Main_student.js'
let Main_students = () => {
    return (
        <div className="anchor__source wrapper__main_students" id ="ms">
            <Carousel fade>
                <Carousel.Item>
                <Main_student photo={main_student1} name='Зуйна Акимова' about_main ='Проект «Интегрированное управление цифровыми потоками данных в мультимодальных автоматизированных системах». ' about_second='Шульженко Татьяна Геннадьевна) признан лучшим по направлению «Автоматизированные терминалы и роботизированные комплексы для ускорения погрузо-разгрузочных работ при грузовых мультимодальных перевозках».подготовленный студентами 4 курса программы бакалавриата «Логистика и управление цепями поставок» Светланой Григорьевой, Леонидом Бирюковым, Александрой Кузнецовой, Натальей Остапенко (научный руководитель – профессор кафедры логистики и управления цепями поставок, д.э.н.'/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Main_student photo={main_student2} name='Егор Бенхасов' about_main ='Проект «Интегрированное управление цифровыми потоками данных в мультимодальных автоматизированных системах»'about_second= 'подготовленный студентами 4 курса программы бакалавриата «Логистика и управление цепями признан лучшим по направлению «Автоматизированные терминалы и роботизированные комплексы для ускорения погрузо-разгрузочных работ при грузовых мультимодальных перевозках».'/>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <Main_student photo={main_student3} name='Айчар Патура' about_main='Победительница III Межгалактического программирования по Python проводимым в точке Кипения РГЭУ (РИНХ) корпуса Звездной системы Глушенко++ на планете Махню долина лучшего университета '/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <Main_student photo={main_student4} name='Айчар Патура' about_main='Победительница III Межгалактического программирования по Python проводимым в точке Кипения РГЭУ (РИНХ) корпуса Звездной системы Глушенко++ на планете Махню долина лучшего университета '/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Main_students;