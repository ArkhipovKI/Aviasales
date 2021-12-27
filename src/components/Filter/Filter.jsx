import React from 'react';
import styles from './Filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {setAllFiltersActiveAction, setFilterAcvtiveAction} from '../../store/actions/actions'
import classnames from 'classnames/bind';


const cn = classnames.bind(styles);

const Filter = React.memo(() => {

	const dispatch = useDispatch();
	const {filters, isAllActive} = useSelector(state => state.filters)
	
	const handleToggleAlltickets = () => {
		dispatch(setAllFiltersActiveAction(!isAllActive))
		dispatch(setFilterAcvtiveAction(filters.map(item => ({...item, active: !isAllActive}))))

	}
	const handleToggleCheckboxes = (e) => {
		const index = e.target.getAttribute('index')
		const newFilters = [...filters]
		newFilters[index].active = e.target.checked
		dispatch(setFilterAcvtiveAction(newFilters))
		dispatch(setAllFiltersActiveAction((filters.every(item => item.active))))
	}
	
	const renderCheckBox = (checkboxesIndex, name) => {
		return (
			<label className={cn("checkbox-other")}>
						<input type="checkbox" checked={filters[checkboxesIndex].active} index={checkboxesIndex} onChange={handleToggleCheckboxes} key={checkboxesIndex}/>
						<span className={cn('checkbox-name')}>{name}</span>
			</label > )
	}
	return (
		<div className={cn("filter-wrapper")}>
			<div className={cn("filter-list")}>
				<p className={cn("filter-name")}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
				<label className={cn("checkbox-other")}>
					<input type="checkbox" checked={isAllActive} onChange={() => handleToggleAlltickets()} />
					<span className={cn('checkbox-name')}>Все</span>
				</label>
				{renderCheckBox(0, 'Без пересадок')}
				{renderCheckBox(1, '1 пересадка')}
				{renderCheckBox(2, '2 пересадки')}
				{renderCheckBox(3, '3 пересадоки')}
			</div >
		</div>
	)
})
 export default Filter