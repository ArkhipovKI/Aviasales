import React from 'react';
// import './TabsPanel.css'
import {useDispatch, useSelector} from 'react-redux';
import classes from './TabFilter.module.scss';
import {setActiveTabAction} from '../../actions/actions'

const TabsPanel = React.memo(() => {
	const dispatch = useDispatch()
	const {activeTab} = useSelector(state => state.filters)
	return (
		<div className={classes['main-sort']}>
			<button 
				className={`${classes.button} ${ activeTab === 'cheaper' && classes.active }`}
				onClick={() => dispatch(setActiveTabAction('cheaper'))}
			>
				<span className={`${activeTab === 'cheaper' && classes.whiteFont}`}>Самый дешевый</span>
			</button>
			<button 
				className={`${classes.button} ${ activeTab === 'faster' && classes.active }`}
				onClick={() => dispatch(setActiveTabAction('faster'))}
			>
				<span className={`${activeTab === 'faster' && classes.whiteFont}`}>Самый быстрый</span>
			</button>
		</div>
	)
})

export default TabsPanel;