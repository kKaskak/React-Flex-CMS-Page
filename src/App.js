import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { StateContext } from './context/StateContext';
import { Toaster } from 'react-hot-toast';
import './App.css';

const App = () => {
	return (
		<StateContext>
			<Toaster />
			<div className='App'>
				<div className='gradient__bg'>
					<RouterProvider router={router}/>
				</div>
			</div>
		</StateContext>
	);
};

export default App;
