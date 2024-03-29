import { createBrowserRouter } from 'react-router-dom';
import { Root, Home, Contact, Privacy, Pricing } from './pages';
import ErrorPage from './ErrorPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home/>,
				error: <ErrorPage />,
			},
			{
				path: 'contact',
				element: <Contact />,
				error: <ErrorPage />,
			},
			{
				path: 'privacy',
				element: <Privacy />,
				error: <ErrorPage />,
			},
			{
				path: 'pricing',
				element: <Pricing />,
				error: <ErrorPage />,
			}
		]
	},
]);
