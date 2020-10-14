import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';





function AddPost({ posts, setPosts }) {



    const initialValues = {
        heading: '',
        post: '',
        phone: '+7',
        city: ''
    }

    const validationSchema = yup.object().shape({
        heading: yup.string()
            .max(140, 'Заголовок не более 140 символов')
            .required('Это поле обязательно для заполнения'),
        post: yup.string()
            .max(300, 'Текст объявления не более 300 символов'),
        phone: yup.string()
            .matches(/^((\+7)+([0-9]){10})$/, 'Укажите корректный номер телефона')
            .required('Это поле обязательно для заполнения'),
        city: yup.string()
    })

    const handleSubmit = value => {
        setPosts([...posts, value])

    }

    return (
        <div className='form'>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                <Form>
                    <div className="form__textarea">
                        <label htmlFor="heading"><span className='form__red-star'>*</span> Введите заголовок объявления</label>
                        <Field as='textarea' id='heading' name='heading' placegolder='Заголовок' />
                        <ErrorMessage name='heading' />
                    </div>
                    <div className="form__textarea">
                        <label htmlFor="post">Текст объявления</label>
                        <Field as='textarea' id='post' name='post' placegolder='Объявление' />
                    </div>
                    <div className="form__phone-number">
                        <label htmlFor="post"><span className='form__red-star'>*</span> Номер телефона</label>
                        <Field type='text' id='phone' name='phone' />
                        <ErrorMessage name='phone' />

                    </div>
                    <div className="form__selector">
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
                    <button type="submit">
                        Создать объявление
                    </button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddPost
