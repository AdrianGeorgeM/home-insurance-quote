import React, { useState } from 'react';
import styles from '../styles/AddonItem.module.css';

function AddonItem({ addon, onSelect, onDeselect, isAnnual }) {
	const [isSelected, setIsSelected] = useState(false);

	const toggleSelection = () => {
		setIsSelected(!isSelected);
		isSelected ? onDeselect(addon) : onSelect(addon);
	};

	return (
		<div
			className={`${styles.addonItem} ${isSelected ? styles.selected : ''}`}
			onClick={toggleSelection}
		>
			<div className={styles.titleAndPrice}>
				<h3 className={styles.addonTitle}>{addon.title}</h3>
				<p className={styles.addonPrice}>
					£{isAnnual ? addon.annualPrice.toFixed(2) : addon.monthlyPrice.toFixed(2)} per{' '}
					{isAnnual ? 'year' : 'month'}
				</p>
			</div>
			<p className={styles.addonText}>{addon.text}</p>
			<button
				className={`${styles.selectButton} ${isSelected ? styles.selectedButton : ''}`}
			>
				{isSelected ? 'Deselect' : 'Select this extra'}
			</button>
		</div>
	);
}

export default AddonItem;
