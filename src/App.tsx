import './App.scss';
import Controls from './components/Controls/Controls';
import ScreensDrawer from './components/UI/ScreensDrawer/ScreensDrawer';
import { useAppSelector } from "./hooks/hooks";

function App() {

    const firstScreen = useAppSelector(state => state.screens.firstScreen)
    const secondScreen = useAppSelector(state => state.screens.secondScreen)

    return (
        <div className="App">
            <div className="container">
                <h1 className="title">Сравнение размеров экранов</h1>
                <Controls />
                <ScreensDrawer
                    firstScreen={firstScreen}
                    secondScreen={secondScreen}
                />
            </div>
        </div>
    );
}

export default App;
