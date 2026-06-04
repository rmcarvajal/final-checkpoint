import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { AppContextProvider } from './context/AppContext.tsx';
import './index.css';
import { storeRedux } from './store/store.ts';
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from './context/SearchContext.tsx';
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={storeRedux}>
			<AppContextProvider>
				<SearchProvider>
				    <BrowserRouter>
						<App />
				    </BrowserRouter>
				</SearchProvider>					
			</AppContextProvider>
		</Provider>
	</StrictMode>,
);
