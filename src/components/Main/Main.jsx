import React from 'react';
import styles from './Main.module.scss'
import TabsPanel from '../TabsPanel/TabsPanel'
import CartsList from '../CartsList/CartsList'
import classnames from 'classnames/bind';

const cn = classnames.bind(styles);

const Main = (props) => {

	return (
		<div className={cn("main")}>
			<TabsPanel />
			<CartsList {...props} />
		</div>
	)
}

export default Main