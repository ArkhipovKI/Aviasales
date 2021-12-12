import React from 'react';
import styles from './Cart.module.scss'
import { DateTime, Duration } from "luxon";
import classnames from 'classnames/bind';

const cn = classnames.bind(styles);

const Cart = (ticket) => {
	const { price, carrier, segments: [forward, back] } = ticket
	const { hours: hoursBack, minutes: minutesBack } = Duration.fromObject({ minutes: +back.duration }).shiftTo('hours', 'minutes').values
	const { hours: hoursForward, minutes: minutesForward } = Duration.fromObject({ minutes: +forward.duration }).shiftTo('hours', 'minutes').values
	return (
		<div className={cn('cart-wrapper')}>
			<div className={cn("content-header")}>
				<span className={cn("ticket-price")}>{price}</span>
				<span className={cn("ticket-aircompany")}><img src={`//pics.avs.io/99/36/${carrier}.png`} alt='carrier' /></span>
			</div>
			<div className={cn("cart-from")}>
				<div className={cn("from-to")}>
					<span className={cn("names-arpts")}>{forward.origin} - {forward.destination}</span>
					<span className={cn("from-to-time--start-end")}>{DateTime.fromISO(forward.date).minus({ minutes: 180 }).toFormat('HH:mm')} - {DateTime.fromISO(forward.date, { zone: "UTC+0" }).plus({ minutes: +forward.duration }).toFormat('HH:mm')}</span>
				</div>
				<div className={cn("on-the-way")}>
					<span className={cn("on-the-way--words")}>В ПУТИ</span>
					<span className={cn("on-the-way--time")}>{`${hoursForward}ч ${minutesForward}мин`}</span>
				</div>
				<div className={cn("transfers")}>
					<span className={cn("transfers-value")}>{forward.stops.length} ПЕРЕСАДКА</span>
					<span className={cn("transfers-names")}>{forward.stops.join(', ').toString()}</span>
				</div>
			</div>
			<div className={cn('cart-to')}>
				<div className={cn("to-from")}>
					<span className={cn("names-arpts")}>{back.origin} - {back.destination}</span>
					<span className={cn("from-to-time--start-end")}>{DateTime.fromISO(back.date).minus({ minutes: 180 }).toFormat('HH:mm')} - {DateTime.fromISO(back.date, { zone: "UTC-4" }).plus({ minutes: +back.duration }).toFormat('HH:mm')}</span>
				</div>
				<div className={cn("on-the-way")}>
					<span className={cn("on-the-way--words")}>В ПУТИ</span>
					<span className={cn("on-the-way--time")}>{`${hoursBack}ч ${minutesBack}м`}</span>
				</div>
				<div className={cn("transfers")}>
					<span className={cn("transfers-value")}>{back.stops.length} ПЕРЕСАДКА</span>
					<span className={cn("transfers-names")}>{back.stops.join(', ').toString()}</span>
				</div>
			</div>
		</div>
	)
}
export default Cart;