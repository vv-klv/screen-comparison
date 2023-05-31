import './App.scss';
import Controls from './components/Controls/Controls';
import Button from './components/UI/Button/Button';
import RectanglesDrawer from './components/UI/RectanglesDrawer/RectanglesDrawer';

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1 className="title">Сравнение размеров экранов</h1>
                <Controls />
                <Button>Сравнить</Button>
                <RectanglesDrawer />
            </div>
        </div>
    );
}

export default App;
