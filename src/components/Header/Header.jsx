import React from 'react';
import styles from './Header.module.scss';
import logo from './../../assets/Logo.png'
import classnames from 'classnames/bind';

const cn = classnames.bind(styles);

const Header = () => {
	return (
		<div className={cn("header")}>
			<img className={cn('header-logo')} src={logo} alt='' />
		</div>
	)
}

export default Header