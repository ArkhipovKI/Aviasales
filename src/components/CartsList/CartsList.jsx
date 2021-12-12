import React from 'react';
import styles from './CartsList.module.scss'
import Cart from '../Cart/Cart'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {useSelector} from 'react-redux'
import Spinner from '../Spinner/Spinner'
import { Alert } from 'antd';
import classnames from 'classnames/bind';

const cn = classnames.bind(styles);

const CartsList = React.memo((props) => {
	const tickets = { ...props }
	const [ticketsShow, setTicketsShown] = useState(5);
	const {isLoading} = useSelector(state => state.tickets)
	return (
		<>
		{isLoading && <Spinner/>}
		{tickets.length === 0 ? 
		(<Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" showIcon />) : 
		(<div className="main-carts">
			{Object.values(tickets).filter((v, i) => i >= 0 && i < ticketsShow).map((ticket) =>
				<Cart
					key={uuidv4()}
					{...ticket}
				/>
			)
			}
		<button className={cn('button-more')}  onClick={() => setTicketsShown((count) => count+5)}>
			<span className={cn('button-text')}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</span>
		</button>
		</div>
		)}
		</>
	)
})
export default CartsList;