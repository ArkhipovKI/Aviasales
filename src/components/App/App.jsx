import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import Main from '../Main/Main'
import { getSearchIdThunk, getTicketsThunk } from '../../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import classnames from 'classnames/bind';
import {sortTickets} from './App.utils'

const cn = classnames.bind(styles);

const App = React.memo(() => {
	const dispatch = useDispatch();

	const { tickets, stop } = useSelector(state => state.tickets);
	const { filters, activeTab} = useSelector(state => state.filters)
	const { searchId } = useSelector(state => state.searchId);
	
	const isAllfiltersDisable = filters.every(item => !item.active)
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		showModal()
	}, [isAllfiltersDisable])

	const showModal = () => setIsModalVisible(true)
	const handleCancel = () => setIsModalVisible(false)
	const handleOk = () =>  setIsModalVisible(false)
 
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
				{isAllfiltersDisable && 
					<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}> 
						<p>Фильтр не должен быть пустым</p>
					</Modal>}
			</div>
		</div >
	)
})

export default App;

