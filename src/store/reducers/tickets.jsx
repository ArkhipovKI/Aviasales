import {
	START_LOADING_TICKETS_ACTION,
	STOP_LOADING_TICKETS_ACTION,
	SET_TICKETS_ACTION
} from '../actions/actions'

const initialState = {
	isLoading: false,
	tickets: [],
	stop: false
}

const tickets = (state = initialState, { type, payload }) => {
	switch (type) {
		case START_LOADING_TICKETS_ACTION:
			return { ...state, isLoading: true }
		case SET_TICKETS_ACTION:
			return { ...state, tickets: [...state.tickets, ...payload] }
		case STOP_LOADING_TICKETS_ACTION:
			return { ...state, isLoading: false, stop: payload }

		default:
			return state
	}
}

export default tickets