import React, { useEffect } from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import Main from '../Main/Main'
import { getSearchIdThunk, getTicketsThunk } from '../../actions/actions'
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames/bind';

const cn = classnames.bind(styles);


function sortTickets(tickets, filters, activeTab) {
	const sortedTickets = tickets.filter((ticket) => {
		return filters.reduce((acc, item, i) => {
			if (item.active) {
			  acc.push(i);
			}
			return acc;
		 }, []).includes(ticket.segments[0].stops.length)
		}
	)

	if (activeTab === 'faster') {
		return  sortedTickets
		.sort(
			(a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
		 )
	}

	return sortedTickets.sort((prev, next) => prev.price - next.price)
}

const App = React.memo(() => {
	const dispatch = useDispatch();

	const { tickets, stop } = useSelector(state => state.tickets);
	const { filters, activeTab} = useSelector(state => state.filters)
	const { searchId } = useSelector(state => state.searchId);
	
	const ticketss = sortTickets(tickets, filters, activeTab)
	useEffect(() => dispatch(getSearchIdThunk()), [dispatch])

	useEffect(() => {
		if (searchId && !stop) {
			dispatch(getTicketsThunk(searchId))
		}
	}, [ dispatch, stop, searchId, tickets])


	return (
		<div className={cn('app-wrapper')}>
			<Header />
			<div className={cn('main-wrapper')}>
				<Filter />
				<Main {...ticketss} />
			</div>
		</div >
	)
})

export default App;

