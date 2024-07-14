import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Form from './Form';
import dataContext from './context';

const {Provider} = dataContext;

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail // в нашем контексте будет ссылка на нашу функцию
    });

    function forceChangeMail() {
        setData({...data, mail: 'test@gmail.com'})
    }

    return (
        <Provider value={data}>
            <Form text={data.text}/>
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'another text',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>
        </Provider>
    );
}

// class Form extends Component {

//     shouldComponentUpdate(nextProps) {
//         if (this.props.mail.name === nextProps.mail.name) {
//             return false
//         } return true;
//     }

//     render() {
//         console.log('render');

//         return (
//             <Container>
//                 <form className="w-50 border mt-5 p-3 m-auto">
//                     <div className="mb-3">
//                         <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                         <input value={this.props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
//                         </div>
//                         <div className="mb-3">
//                         <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                         <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                     </div>
//                 </form>
//             </Container>
//         )
//     }
// }

// function propsCompare (prevProps, nextProps) {
//     return prevProps.mail.name === nextProps.mail.name;
// }



// class InputComponent extends Component {

//     static contextType = dataContext;

//     render() {
//         return (
//             <Consumer>
//                 {
//                     value => {
//                         return (
//                             <input 
//                                 value={value.mail} 
//                                 type="email" 
//                                 className='form-control' 
//                                 placeholder="name@example.com"/>
//                         )
//                     }
//                 }
//             </Consumer>
//             <input 
//                 value={this.context.mail} 
//                 type="email" 
//                 className='form-control' 
//                 placeholder="name@example.com"/>
//         )
//     }
// }



///

// function useInputWithValidate(initialValue) {
//   const [value, setValue] = useState(initialValue);

//   const onChange = event => {
//     setValue(event.target.value);
//   }

//   const validateInput = () => {
//     return value.search(/\d/) >= 0;
//   }

//   return {value, onChange, validateInput}
// }

// const Form = () => {

//     const input = useInputWithValidate('');
//     const textArea = useInputWithValidate('');

//     const color = input.validateInput() ? 'text-danger' : null;

//     return (
//         <Container>
//             <form className="w-50 border mt-5 p-3 m-auto">
//                 <div className="mb-3">
//                     <input value={`${input.value} / ${textArea.value}`} type="text" className="form-control" readOnly/>
//                     <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                     <input 
//                         onChange={input.onChange} 
//                         type="email" 
//                         value={input.value}
//                         className={`form-control ${color}`}
//                         id="exampleFormControlInput1" 
//                         placeholder="name@example.com"/>
//                     </div>
//                     <div className="mb-3">
//                     <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                     <textarea
//                         onChange={textArea.onChange} 
//                         value={textArea.value}
//                         className="form-control" 
//                         id="exampleFormControlTextarea1" 
//                         rows="3">
//                     </textarea>
//                 </div>
//             </form>
//         </Container>
//     )
// }

// function App() {
//     return (
//         <Form/>
//     );
// }

export default App;