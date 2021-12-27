import React from 'react';
import styles from './Cart.module.scss'
import { DateTime, Duration } from "luxon";
import classnames from 'classnames/bind';

const cn = classnames.bind(styles);

const Cart = (ticket) => {
	const { price, carrier, segments: [forward, back] } = ticket
	const { hours: hoursBack, minutes: minutesBack } = Duration.fromObject({ minutes: +back.duration }).shiftTo('hours', 'minutes').values
	const { hours: hoursForward, minutes: minutesForward } = Duration.fromObject({ minutes: +forward.duration }).shiftTo('hours', 'minutes').values

	const renderCart = (forwardOrBack, hoursForwardOrBack, minutesForwardOrBack, utcZone) => {
		return (
			<div className={cn("cart-from")}>
				<div className={cn("from-to")}>
					<span className={cn("names-arpts")}>{forwardOrBack.origin} - {forwardOrBack.destination}</span>
					<span className={cn("from-to-time--start-end")}>{DateTime.fromISO(forwardOrBack.date).minus({ minutes: 180 }).toFormat('HH:mm')} - {DateTime.fromISO(forwardOrBack.date, { zone: `UTC${utcZone}` }).plus({ minutes: +forwardOrBack.duration }).toFormat('HH:mm')}</span>
				</div>
				<div className={cn("on-the-way")}>
					<span className={cn("on-the-way--words")}>В ПУТИ</span>
					<span className={cn("on-the-way--time")}>{`${hoursForwardOrBack}ч ${minutesForwardOrBack}мин`}</span>
				</div>
				<div className={cn("transfers")}>
					<span className={cn("transfers-value")}>{forwardOrBack.stops.length} ПЕРЕСАДКА</span>
					<span className={cn("transfers-names")}>{forwardOrBack.stops.join(', ').toString()}</span>
				</div>
			</div>
		)
	}

	return (
		<div className={cn('cart-wrapper')}>
			<div className={cn("content-header")}>
				<span className={cn("ticket-price")}>{price}</span>
				<span className={cn("ticket-aircompany")}><img src={`//pics.avs.io/99/36/${carrier}.png`} alt='carrier' /></span>
			</div>
			{renderCart(forward, hoursForward, minutesForward, '+0')}
			{renderCart(back, hoursBack, minutesBack, '-4')}
		</div>
	)
}
export default Cart;	