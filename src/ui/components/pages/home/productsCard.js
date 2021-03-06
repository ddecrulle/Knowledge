import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme, { color }) => {
	return {
		wrapper: {
			backgroundColor: theme.palette.common.white,
			overflowX: 'hidden',
		},
		iconWrapper: {
			color: color,
			backgroundColor: shadeColor(color, 0.5),
			fill: color,
			borderRadius: theme.shape.borderRadius,
			textAlign: 'center',
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			marginBottom: theme.spacing(3),
			padding: theme.spacing(1.5),
		},
	};
});

function shadeColor(hex, percent) {
	const f = parseInt(hex.slice(1), 16);

	const t = percent < 0 ? 0 : 255;

	const p = percent < 0 ? percent * -1 : percent;

	const R = f >> 16;

	const G = (f >> 8) & 0x00ff;

	const B = f & 0x0000ff;
	return `#${(
		0x1000000 +
		(Math.round((t - R) * p) + R) * 0x10000 +
		(Math.round((t - G) * p) + G) * 0x100 +
		(Math.round((t - B) * p) + B)
	)
		.toString(16)
		.slice(1)}`;
}

const ApplicationCard = ({ Icon, color, headline, text }) => {
	const { classes } = useStyles({ color });
	return (
		<>
			<div
				// We will set color and fill here, due to some prios complications
				className={classes.iconWrapper}
			>
				{Icon}
			</div>
			<Typography variant='h5' paragraph>
				{headline}
			</Typography>
			<Typography variant='body1' color='textSecondary'>
				{text}
			</Typography>
		</>
	);
};

export default ApplicationCard;
