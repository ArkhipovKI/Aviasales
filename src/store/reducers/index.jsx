import { combineReducers } from 'redux'
import tickets from './tickets'
import searchId from './searchId'
import filters from './filters'

export default combineReducers({
	tickets,
	searchId,
	filters
})
