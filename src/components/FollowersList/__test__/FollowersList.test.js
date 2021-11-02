import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
	return (
		<BrowserRouter>
			<FollowersList />
		</BrowserRouter>
	);
};

describe('FollowersList', () => {
  //Async test
	it('should render at least one contact in the contact list', async () => {
		render(<MockFollowersList />);
		const followerDivElement = await screen.findByTestId("follower-item-0")
		expect(followerDivElement).toBeInTheDocument();
	});

  it('should render 5 contacts in the contact list', async () => {
		render(<MockFollowersList />);
		const followerDivElements = await screen.findAllByTestId(/follower-item/i)
		expect(followerDivElements.length).toBe(5);
	});
});
