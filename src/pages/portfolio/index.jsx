import { Estudios,Presentacion,Proyectos} from './components'
import './styles.css'
export default () => {
    return (
        <main id="main" >
            <Presentacion />
            <Proyectos />
            <Estudios />
        </main>
    );
};