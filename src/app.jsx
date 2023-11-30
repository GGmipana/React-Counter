import Counter from './components/Counter';
import './styles/app.css';

function App() {
    return (
        <>
            <div className='counter-title-container'>
                <h1 className='counter-title'>Contador</h1>
            </div>
            <Counter />
        </>
    );
}

export default App;