import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import ProductCard from './ProductCard';
import Shimmer from './Shimmer';
import { useLanguage } from '../hooks/useLanguage.js';

const topSellingProducts = [
	{
		id: 1,
		image: '/assets/images/inputs/wheatseeds.png',
		title: 'Wheat Seeds',
		price: 450,
		unit: 'per kg',
		discount: '10% off',
	},
	{
		id: 2,
		image: '/assets/images/inputs/organic.png',
		title: 'Organic Fertilizer',
		price: 350,
		unit: 'per kg',
		discount: '5% off',
	},
	{
		id: 3,
		image: '/assets/images/inputs/drip.png',
		title: 'Drip Irrigation Kit',
		price: 1200,
		unit: 'per set',
		discount: '8% off',
	},
];

const TopSellingProducts = ({ loading }) => {
	const { strings } = useLanguage();
	return (
		<Box p={2}>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				mb={2}
			>
				<Typography variant="subtitle1" fontWeight="bold">
					{strings.topSellingProductsTitle || 'Top selling products'}
				</Typography>
				<Button size="small">
					{strings.topSellingProductsViewAll || 'View All'}
				</Button>
			</Box>
			<Grid container spacing={1}>
				{loading ? (
					<Shimmer type="card" count={4} />
				) : (
					topSellingProducts.map((product, idx) => (
						<Grid
							item
							xs={12}
							sm={4}
							md={4}
							key={idx}
							display="flex"
							justifyContent="center"
						>
							<ProductCard
								{...product}
								onAddToCart={() =>
									alert(`Added ${product.title} to cart!`)
								}
							/>
						</Grid>
					))
				)}
			</Grid>
		</Box>
	);
};

export default TopSellingProducts;