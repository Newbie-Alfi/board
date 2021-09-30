import React, { useState, useRef } from 'react'
import { useAnchorCreator } from '../../hooks/useAnchorCreator.js'
import Student from './Student.js'
import './Students.css'

export function Students(){
    let [students] = useState([
        {name: 'Александр Стопхам', photo: 'https://cs13.pikabu.ru/post_img/big/2019/06/04/6/1559636901167421001.jpg', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Ганс Рам', photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Till_Lindemann_-_2017287140953_2017-10-14_Buchmesse.jpg', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Лин Бескорыстный', photo: 'https://avatars.githubusercontent.com/u/1024025?v=4', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Иван Шумный', photo: 'https://tntmusic.ru/media/content/article/2020-07-10_11-49-26__67863c92-c2a3-11ea-aca3-c37ad0480575.jpg', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Александр Бодров', photo: 'https://cdn22.img.ria.ru/images/149888/36/1498883652_0:46:1237:748_600x0_80_0_0_c9bd42736aaab3c78f6a68af1ee05e61.jpg', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Чип Омывальный', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg',  group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Андрей Румянец', photo: 'https://cdnimg.rg.ru/i/gallery/b825262e/7f4799bf.jpg', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Виктор Белославян',photo: 'https://cs10.pikabu.ru/post_img/2018/02/22/6/1519290014156623048.jpg',  group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Александр Бодров', photo: 'https://i.obozrevatel.com/2019/8/3/screenshot7.png?size=1944x924', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Бндкт Кбрхолмс', photo: 'https://www.film.ru/sites/default/files/people/1546123-881008.jpg', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Андрей Румянец', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Georgy_Zhukov_1.jpg/248px-Georgy_Zhukov_1.jpg', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Виктор Белославян',photo: 'https://oldboybarbershop.com/sites/default/files/2020-09/blog-muzhskie-strizhki-iz-seriala-vikingi-2.jpg', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Александр Бодров', photo: 'https://sobesednik.ru/storage/posts/April2021/Me0Gb4JxyTsYWZe7Om1H.jpg', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Николай Нудный', photo: 'https://www.film.ru/sites/default/files/people/1546123-881008.jpg', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Виктор Продольный', photo: 'https://kto-zhena.ru/wp-content/uploads/r_gdryokuve-429x600.jpg', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54},
        {name: 'Виктор Белославян', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg', group: 'ИСТ-311', about: 'Просто лучший, просто красавчик, обожаю его', rating: 54}
        ]
    )
    
    const anchor = useRef();
    useAnchorCreator(anchor);
    return(
        <ul className="anchor__source students-list" id="anchor__source" ref={anchor}>
            {
                students.map( student => <Student photo={student.photo} name={student.name} about={student.about} rating={student.rating} group={student.group} key={Date.now() + Math.random()}/>)
            }
        </ul>
    )
}