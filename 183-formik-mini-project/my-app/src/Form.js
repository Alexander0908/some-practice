import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props); // кортеж. field - это пропсы, meta - метаданные с ошибками и был ли уже использован этот инпут
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
}

const MyCheckbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'}); 
    return (
        <>
            <label className='checkbox'>
                <input type="checkbox" {...props} {...field} />
                {children}
            </label>

            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
}

const CustomForm = () => {

    return (
        <Formik
            initialValues= {{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                        .min(2, 'Мінімум 2 символи!')
                        .required("Обов'язкове поле!"),
                email: Yup.string()
                        .email('Невірний емейл')
                        .required("Обов'язкове поле!"),
                amount: Yup.number()
                        .min(5, 'Не меньше 5!')
                        .required("Обов'язкове поле!"),
                currency: Yup.string().required('Оберіть валюту'),
                text: Yup.string()
                        .min(10, 'Не маньше 10 символів'),
                terms: Yup.boolean()
                        .required("Необхідна згода")
                        .oneOf([true], 'Необхідна згода')
            })}
            onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <h2>Відправити Донат</h2>
                <MyTextInput
                    label="Ваше ім'я"
                    id="name"
                    name="name"
                    type="text"
                />
                <MyTextInput 
                    label="Ваша пошта" 
                    id="email"
                    name="email"
                    type="email"
                />
                <label htmlFor="amount">Кількість</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                />
                <ErrorMessage className='error' name="amount" component="div"/>
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select">
                        <option value="">Оберіть валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className='error' name="currency" component="div"/>
                <label htmlFor="text">Ваше повідомлення</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className='error' name="text" component="div"/>
                <MyCheckbox 
                    name="terms">Згодні з політикою конфіденційоності?
                </MyCheckbox>
                <button type="submit">Відправити</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;