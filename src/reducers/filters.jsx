import {
	SET_ACTIVE_TAB_ACTION,
	SET_ALL_FILTERS_ACTIVE_ACTION,
	SET_FILTER_ACTIVE_ACTION
} from '../actions/actions'

const initialState = {
	activeTab: 'cheaper',
	isAllActive: false,
	filters: [
		{ name: 'no-transfers', active: false },
		{ name: 'one-transfer', active: false },
		{ name: 'two-transfers', active: false },
		{ name: 'three-transfers', active: false }
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