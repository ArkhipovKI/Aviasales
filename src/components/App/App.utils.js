export const sortTickets = (tickets, filters, activeTab) => {
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