import { Box, Divider, Typography } from "@mui/material";
import styles from "../Home.module.scss";

export const HomeInfoTitles = () => {
	return (
		<>
			<Box className={styles.homeTitlesContainer}>
				<Typography variant='h4' display='block'>
					FULL-STACK ENGINEER,
					<br />
					JAVASCRIPT SPECIALIST & UI NERD
				</Typography>
				<Divider variant='middle' className={styles.homeInfoDivider} />
				<Typography variant='h5' display='block'>
					I'm a product-focused software engineer with a passion for crafting
					exceptional user experiences through full-stack development.
				</Typography>
			</Box>
		</>
	);
};
