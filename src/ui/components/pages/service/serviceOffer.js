import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import BlocFilter from './section/blocFilter';
import BlocFunction from './section/blocFunctions';
import { useTreeUrlStatus } from 'ui/utils/hooks/searchParams';
import { CoreApiContext } from 'ui/coreApi';
import { useFilteredAndOrderedFunctions } from 'ui/utils/hooks/functions';

const ServiceOffer = () => {
	const { classes } = useStyles();
	const [treeState, setTreeState] = useTreeUrlStatus();
	const [functions, setFunctions] = useState([]);
	const [hierarchy, setHierarchy] = useState([]);
	const [filteredFunctions] = useFilteredAndOrderedFunctions(
		treeState.selected,
		treeState.filtered,
		functions
	);

	const { getFunctions, getHierarchies } = useContext(CoreApiContext);

	useEffect(() => {
		getHierarchies().then((r) => setHierarchy(r));
		getFunctions().then((r) => {
			setFunctions(r);
		});
	}, [getFunctions, getHierarchies]);

	const hierarchyProducts = hierarchy.find(
		(hierarchy) => hierarchy.id === 'products'
	);

	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<Box className={classes.row} justifyContent='center'>
					<Grid container spacing={2}>
						<Grid item md={4} xs={12}>
							<Box className={classes.box}>
								<Card className={classes.card}>
									<BlocFilter
										treeState={treeState}
										setTreeState={setTreeState}
										hierarchy={hierarchy}
									/>
								</Card>
							</Box>
						</Grid>
						<Grid item md={8} xs={12}>
							<Box className={classes.box}>
								<Card className={classes.card}>
									<BlocFunction
										functions={filteredFunctions}
										products={hierarchyProducts}
									/>
								</Card>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</div>
		</div>
	);
};

export default ServiceOffer;

const useStyles = makeStyles()((theme) => {
	return {
		wrapper: {
			background: theme.palette.background.default,
			position: 'relative',
			paddingBottom: theme.spacing(2),
			paddingTop: `${theme.spacing(4)} !important`,
			[theme.breakpoints.down('md')]: {
				paddingTop: `${theme.spacing(4)} !important`,
			},
			[theme.breakpoints.down('sm')]: {
				paddingTop: `${theme.spacing(4)} !important`,
			},
			[theme.breakpoints.down('xs')]: {
				paddingTop: `${theme.spacing(4)} !important`,
			},
		},
		container: {
			width: '100%',
			paddingRight: theme.spacing(4),
			paddingLeft: theme.spacing(4),
			marginRight: 'auto',
			marginLeft: 'auto',
			minWidth: 500,
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			[theme.breakpoints.down('md')]: {
				marginBottom: theme.spacing(9),
			},
			[theme.breakpoints.down('sm')]: {
				marginBottom: theme.spacing(6),
			},
			[theme.breakpoints.down('sm')]: {
				marginBottom: theme.spacing(3),
			},
		},
		row: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
		},
		box: {
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
		},
		card: {
			boxShadow: theme.shadows[4],
			[theme.breakpoints.up('xs')]: {
				paddingTop: theme.spacing(1),
				paddingBottom: theme.spacing(1),
				paddingLeft: theme.spacing(1),
				paddingRight: theme.spacing(1),
			},
			[theme.breakpoints.up('sm')]: {
				paddingTop: theme.spacing(2),
				paddingBottom: theme.spacing(2),
				paddingLeft: theme.spacing(2),
				paddingRight: theme.spacing(2),
			},
			[theme.breakpoints.up('md')]: {
				paddingTop: theme.spacing(3),
				paddingBottom: theme.spacing(3),
				paddingLeft: theme.spacing(3),
				paddingRight: theme.spacing(3),
			},
			[theme.breakpoints.up('lg')]: {
				paddingTop: theme.spacing(4),
				paddingBottom: theme.spacing(4),
				paddingLeft: theme.spacing(4),
				paddingRight: theme.spacing(4),
			},
			maxWidth: 1280,
			width: '100%',
		},
		image: {
			maxWidth: '100%',
			verticalAlign: 'middle',
		},
	};
});
