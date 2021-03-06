import React from 'react';
import { useTreeUrlStatus } from 'ui/utils/searchParams';
import Card from '@mui/material/Card';
import { makeStyles } from 'tss-react/mui';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { top100Films } from './top100films';
import {
	gsbpm,
	produits,
	services,
	statuts,
	utilisateurs,
} from 'core/mockData/treeData';

const useStyles = makeStyles()((theme) => ({
	box: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		minWidth: 50,
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
	autocomplete: {
		paddingBottom: theme.spacing(1),
		minWidth: theme.spacing(10),
	},
}));

const renderTree = (nodes, nodeKey) => (
	<TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.label}>
		{Array.isArray(nodes[nodeKey])
			? nodes[nodeKey].map((node) => renderTree(node, nodeKey))
			: null}
	</TreeItem>
);

const BlocFilter = () => {
	const { classes } = useStyles();

	const [treeState, setTreeState] = useTreeUrlStatus();

	// const [selected, setSelected] = useState([]);

	// const [value, setValue] = useState([]); // TODO Init value (when filter isnt empy at start)

	const handleAutocomplete = (_, newValue) => {
		console.log(newValue);
		setTreeState('filter', newValue);
	};

	const handleToggle = (_, nodeIds) => {
		setTreeState('expanded', nodeIds);
	};

	const handleSelect = (_, nodeIds) => {
		setTreeState('selected', nodeIds);
	};

	const handleCollapseClick = () => {
		setTreeState('expanded', []);
	};

	const handleUnselectClick = () => {
		setTreeState('selected', []);
		// setSelected([]);
	};

	return (
		<Box className={classes.box}>
			<Card className={classes.card}>
				<Autocomplete
					multiple
					className={classes.autocomplete}
					id='tags-standard'
					options={top100Films}
					getOptionLabel={(option) => option.title}
					renderInput={(params) => (
						<TextField
							{...params}
							variant='outlined'
							label='Produits, GSBPM, Jalons ...'
						/>
					)}
					value={treeState.filter}
					onChange={handleAutocomplete}
				/>
				<Button
					onClick={handleCollapseClick}
					disabled={treeState.expanded.length === 0}
				>
					Tout r??duire
				</Button>
				<Button
					onClick={handleUnselectClick}
					disabled={treeState.selected.length === 0}
				>
					Tout d??s??lectionner
				</Button>
				<TreeView
					aria-label='services navigator'
					defaultCollapseIcon={<ExpandMoreIcon />}
					defaultExpandIcon={<ChevronRightIcon />}
					expanded={treeState.expanded}
					selected={treeState.selected}
					onNodeToggle={handleToggle}
					onNodeSelect={handleSelect}
					multiSelect
				>
					{renderTree(gsbpm, gsbpm.nodeKey)}
					{renderTree(produits, produits.nodeKey)}
					{renderTree(services, services.nodeKey)}
					{renderTree(statuts, statuts.nodeKey)}
					{renderTree(utilisateurs, utilisateurs.nodeKey)}
				</TreeView>
			</Card>
		</Box>
	);
};

export default BlocFilter;
