import {
	SET_ACTIVE_TAB_ACTION,
	SET_ALL_FILTERS_ACTIVE_ACTION,
	SET_FILTER_ACTIVE_ACTION
} from '../actions/actions'

const initialState = {
	activeTab: 'cheaper',
	isAllActive: true,
	filters: [
		{ name: 'no-transfers', active: true },
		{ name: 'one-transfer', active: true },
		{ name: 'two-transfers', active: true },
		{ name: 'three-transfers', active: true }
	]
}

const filters = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_ACTIVE_TAB_ACTION:
			return { ...state, activeTab: payload }
		case SET_ALL_FILTERS_ACTIVE_ACTION:
			return { ...state, isAllActive: payload }
		case SET_FILTER_ACTIVE_ACTION:
			return { ...state, filters: payload }
		default: return state
	}
}

export default filters