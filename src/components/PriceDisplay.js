import React from 'react';
import styles from '../styles/PriceDisplay.module.css';

function PriceDisplay({ price, isAnnual, onToggle }) {
	return (
		<div className={styles.priceDisplay}>
			<div className={styles.priceContainer}>
				<span className={styles.priceValue}>£{price}</span>
				<span className={styles.pricePeriod}>{isAnnual ? 'per year' : 'per month'}</span>
			</div>
			<div className={styles.priceContainer}>
				<p className={styles.priceInfo}>
					This price includes Insurance Premium Tax at the current rate. No charge for
					paying monthly.
				</p>
				<button onClick={onToggle} className={styles.switchButton}>
					Switch to {isAnnual ? 'monthly' : 'annual'}
				</button>
			</div>
		</div>
	);
}

export default PriceDisplay;
