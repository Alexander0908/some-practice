import { useContext } from 'react';
import dataContext from './context';

const InputComponent = () => {

    const context = useContext(dataContext);
    
    return (
        <input 
            value={context.mail} 
            type="email" 
            className='form-control' 
            placeholder="name@example.com"
            onFocus={context.forceChangeMail} // при клике на инпут, емейл будет меняться
            />
    )
}

export default InputComponent;