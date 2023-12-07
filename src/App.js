import React, { useState, useEffect } from 'react';
import QuoteSummary from './components/QuoteSummary';
import AddonItem from './components/AddonItem';
import PriceDisplay from './components/PriceDisplay';
import { fetchQuote, fetchAddons } from './services/apiService';
import styles from './styles/App.module.css';

function App() {
	const [quote, setQuote] = useState(null);
	const [addons, setAddons] = useState([]);
	const [selectedAddons, setSelectedAddons] = useState([]);
	const [isAnnual, setIsAnnual] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [quoteData, addonData] = await Promise.all([fetchQuote(), fetchAddons()]);
				setQuote(quoteData[0]);
				setAddons(addonData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	const selectAddon = (addon) => {
		if (!selectedAddons.some((selected) => selected.title === addon.title)) {
			setSelectedAddons([...selectedAddons, addon]);
		}
	};

	const deselectAddon = (addon) => {
		const updatedSelectedAddons = selectedAddons.filter(
			(selectedAddon) => selectedAddon.title !== addon.title
		);
		setSelectedAddons(updatedSelectedAddons);
	};

	const calculatePrice = () => {
		let totalPrice = quote
			? isAnnual
				? Math.round(quote.annualPrice * 100) / 100
				: Math.round(quote.monthlyPrice * 100) / 100
			: 0;

		selectedAddons.forEach((selectedAddon) => {
			const addonPrice = isAnnual
				? Math.round(selectedAddon.annualPrice * 100) / 100
				: Math.round(selectedAddon.monthlyPrice * 100) / 100;

			totalPrice += addonPrice;
		});

		return totalPrice.toFixed(2);
	};

	const togglePaymentFrequency = () => {
		setIsAnnual(!isAnnual);
	};

	return (
		<div className={styles.appContainer}>
			<div className={styles.topContainer}>
				{quote && <QuoteSummary quote={quote} />}
				{quote && (
					<PriceDisplay
						price={calculatePrice()}
						isAnnual={isAnnual}
						onToggle={togglePaymentFrequency}
					/>
				)}
			</div>
			<div className={styles.addonsGrid}>
				{addons.map((addon, index) => (
					<AddonItem
						key={index}
						addon={addon}
						onSelect={() => selectAddon(addon)}
						onDeselect={() => deselectAddon(addon)}
						isAnnual={isAnnual}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
