import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Формик для удобства управления вводом
import * as yup from 'yup'; // Для валидации
import NumberFormat from 'react-number-format'; // Формат номера телефона 
import { v4 as uuidv4 } from 'uuid'; // индивидуальный id для объявлений




function AddPost({ posts, setPosts }) {
    // Начальные значения formik
    const initialValues = {
        id: uuidv4(),
        heading: '',
        post: '',
        phone: '',
        city: ''
    }


    // Валидация полей 
    const validationSchema = yup.object().shape({
        heading: yup.string()
            .max(140, 'Заголовок не более 140 символов')
            .required('Это поле обязательно для заполнения'),
        post: yup.string()
            .max(300, 'Текст объявления не более 300 символов'),
        phone: yup.string()
            .min(18, 'Укажите действительный номер телефона')
            .required('Это поле обязательно для заполнения'),
        city: yup.string()
    })
    // Отправка формы
    const handleSubmit = (values, { resetForm }) => {
        setPosts([values, ...posts])
        resetForm(values = '')

    }

    return (
        <div className='form flex-center'>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                {
                    props =>
                        <Form>
                            <div className="form__textarea flex-center">
                                <label htmlFor="heading"><span className='form__red-star'>*</span> Введите заголовок объявления</label>
                                <Field as='textarea' id='heading' name='heading' placegolder='Заголовок' />
                                {/* В ErrorMessage выводим ошибки для каждого поля, если имеются */}
                                <ErrorMessage name='heading' />
                            </div>
                            <div className="form__textarea flex-center">
                                <label htmlFor="post">Текст объявления</label>
                                <Field as='textarea' id='post' name='post' placegolder='Объявление' />
                            </div>

                            <div className="form__phone-number flex-center">
                                <label htmlFor="phone"><span className='form__red-star'>*</span> Номер телефона</label>
                                <NumberFormat format="+7 (###) ###-##-##" mask="_" allowEmptyFormatting onChange={props.handleChange} value={props.values.name} name='phone' id='phone' />
                                <ErrorMessage name='phone' />

                            </div>
                            <div className="form__selector flex-center">
                                <label htmlFor="city">Выберите город из списка</label>
                                <Field as='select' id='city' name='city'>
                                    <option value="">Выберите город</option>
                                    <option value="Москва">Москва</option>
                                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                                    <option value="Казань">Казань</option>
                                    <option value="Нижний Новгород">Нижний Новгород</option>
                                </Field>
                            </div>
                            <p className='form__required'>Поля отмеченные <span className='form__red-star'>*</span> обязательны для заполнения</p>
                            <button type="submit" className='form__btn'>
                                Создать объявление
                    </button>
                        </Form>
                }

            </Formik>
        </div>
    )
}

export default AddPost
