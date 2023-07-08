import './App.scss';
import Controls from './components/Controls/Controls';
import ScreensDrawer from './components/ScreensDrawer/ScreensDrawer';
import ScreensCalculations from "./components/ScreensCalculations/ScreensCalculations";
import { useAppSelector } from "./hooks/hooks";

function App() {

    const firstScreen = useAppSelector(state => state.screens.firstScreen)
    const secondScreen = useAppSelector(state => state.screens.secondScreen)

    return (
        <div className="app">
            <div className="container">
                <h1 className="title">Сравнение размеров экранов</h1>
                <Controls />
                <ScreensDrawer
                    firstScreen={firstScreen}
                    secondScreen={secondScreen}
                />
                <ScreensCalculations />
            </div>
        </div>
    );
}

export default App;
