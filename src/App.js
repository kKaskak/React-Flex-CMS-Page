import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<div className='gradient__bg'>
				<RouterProvider router={router}/>
			</div>
		</div>
	);
};

export default App;
