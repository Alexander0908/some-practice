

const Form = () => {
    return (
        <form className="form">
            <h2>Відправити пожертвування</h2>
            <label htmlFor="name">Ваше ім'я</label>
            <input
                id="name"
                name="name"
                type="text"
            />
            <label htmlFor="email">Ваша пошта</label>
            <input
                id="email"
                name="email"
                type="email"
            />
            <label htmlFor="amount">Кількість</label>
            <input
                id="amount"
                name="amount"
                type="number"
            />
            <label htmlFor="currency">Валюта</label>
            <select
                id="currency"
                name="currency">
                    <option value="">Оберіть валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </select>
            <label htmlFor="text">Ваше повідомлення</label>
            <textarea 
                id="text"
                name="text"
            />
            <label className="checkbox">
                <input name="terms" type="checkbox" />
                Згодні з політикою конфіденційоності?
            </label>
            <button type="submit">Відправити</button>
        </form>
    )
}

export default Form;