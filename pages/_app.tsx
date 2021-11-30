import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";
import { ContextProvider } from '../context'

const App = ({Component, pageProps}: any) => {
    return (
        <ContextProvider>
        <Component {...pageProps} />
        </ContextProvider>
    );
}

export default App;
