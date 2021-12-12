import React from 'react';
import styles from './Filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {setAllFiltersActiveAction, setFilterAcvtiveAction} from '../../actions/actions'
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
	}

	return (
		<div className={cn("filter-wrapper")}>
			<div className={cn("filter-list")}>
				<p className={cn("filter-name")}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
				<label className={cn("checkbox-other")}>
					<input type="checkbox" checked={isAllActive} onChange={() => handleToggleAlltickets()} />
					<span className={cn('checkbox-name')}>Все</span>
				</label>
				<label className={cn("checkbox-other")}>
					<input type="checkbox" checked={filters[0].active} index={0} onChange={handleToggleCheckboxes} key={0}/>
					<span className={cn('checkbox-name')}>Без пересадок</span>
				</label >
				<label className={cn("checkbox-other")}>
					<input type="checkbox" checked={filters[1].active} index={1} onChange={handleToggleCheckboxes} key={1}/>
					<span className={cn('checkbox-name')}>1 пересадка</span>
				</label>
				<label className={cn("checkbox-other")}>
					<input type="checkbox" checked={filters[2].active} index={2} onChange={handleToggleCheckboxes} key={2}/>
					<span className={cn('checkbox-name')}>2 пересадки</span>
				</label >
				<label className={cn("checkbox-other")}>
					<input type="checkbox" checked={filters[3].active} index={3} onChange={handleToggleCheckboxes} key={3}/>
					<span className={cn('checkbox-name')}>3 пересадки</span>
				</label >
			</div >
		</div>
	)
})
 export default Filter