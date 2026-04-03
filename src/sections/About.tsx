import { useScrollPin } from "@/hooks";
import { FadeCard } from "@/components";
import styles from "@/sections/About.module.css";

import bikeImg from "@/assets/bike.jpg";
import campingImg from "@/assets/camping.jpeg";
import familyImg from "@/assets/family.jpg";
import swordImg from "@/assets/sword.jpg";

const interests = [
	{
		title: "Martial Arts",
		img: swordImg,
		label: "Martial Arts",
		sub: "4 black belts · 17 years teaching",
		body: "I ran a martial arts school (Dojang) for 17 years. Discipline, patience, and continuous self-improvement — values that resonate deeply with the ever-evolving tech landscape. Just as in martial arts, mastery comes from practice and staying agile in the face of challenges.",
	},
	{
		title: "Motorcycles",
		img: bikeImg,
		label: "Motorcycles",
		sub: "Short day trips to 6,400 mi epic journeys",
		body: "Long-distance touring and backcountry exploration is my passion. Epic trips require planning, coordination, and adaptability — plans change with weather and road conditions. These experiences directly inform how I work: I thrive on hard challenges, adapt to changing requirements, and delight when a completed project exceeds expectations.",
	},
	{
		title: "Camping",
		img: campingImg,
		label: "Camping",
		sub: "Nature as a design school",
		body: "Camping brings me closer to nature and reminds me of the beauty of simplicity — a constant source of inspiration for elegant, minimalist design. A well-designed UI can be like art, provoking emotion. A well-designed backend is like Amish furniture where beauty is found in simplicity and function.",
	},
	{
		title: "Family",
		img: familyImg,
		label: "Family",
		sub: "The human in human-centered design",
		body: "Of all my interests, time with my family is the most cherished.  We are outdoors or traveling when we can. When inside, we play games, cook, have pun-offs and watch shows/movies together. Spending time with my family reminds me that life is not just about lines of code but also about the meaningful connections we build. It\u2019s a constant reminder to keep the \u201chuman\u201d in human-centered design \u2014 ensuring that the technology I create enhances people\u2019s lives, not just satisfies technical requirements.",
	},
];

function AboutFrames() {
	const { wrapperRef, activeFrame } = useScrollPin(interests.length);
	const item = interests[activeFrame];

	return (
		<>
			{/* Desktop scroll-pin */}
			<div
				ref={wrapperRef}
				className={styles.pinWrapper}
				style={{ height: `calc(100vh * ${interests.length})` }}
			>
				<div className={styles.sticky}>
					<div className={styles.grid}>
						<div className={styles.textCol}>
							<div className={styles.textInner}>
								<p className={styles.eyebrow}>Beyond the code</p>
								<h2 className={styles.heading}>
									A well-rounded engineer
									<br />
									<span className={styles.dim}>is a better engineer.</span>
								</h2>
								<div key={activeFrame} className={styles.activeText}>
									<p className={styles.activeSub}>{item.sub}</p>
									<h3 className={styles.activeTitle}>{item.label}</h3>
									<p className={styles.activeBody}>{item.body}</p>
								</div>
								<div className={styles.dots}>
									{interests.map((_, i) => (
										<div key={i} className={`${styles.dot} ${i === activeFrame ? styles.dotActive : ""}`} />
									))}
								</div>
							</div>
						</div>

						<div className={styles.frameCol}>
							{interests.map((interest, i) => {
								const diff = i - activeFrame;
								let transform = "";
								let opacity = 0;
								let zIndex = interests.length - i;
								if (diff < 0) { transform = "translateY(-105%)"; opacity = 0; }
								else if (diff === 0) { transform = "scale(1) translateY(0)"; opacity = 1; zIndex = interests.length + 1; }
								else { transform = "scale(1) translateY(0)"; opacity = 0; }
								return (
									<div key={interest.title} className={styles.frame} style={{ transform, opacity, zIndex, backgroundImage: `url(${interest.img})` }} />
								);
							})}
						</div>
					</div>
				</div>
			</div>

			{/* Mobile cards */}
			<div className={styles.mobileCards}>
				<div className={styles.mobileHeader}>
					<p className={styles.eyebrow}>Beyond the code</p>
					<h2 className={styles.heading}>
						A well-rounded engineer<br />
						<span className={styles.dim}>is a better engineer.</span>
					</h2>
				</div>
				{interests.map(interest => (
					<FadeCard key={interest.title} className={styles.mobileCard}>
						<img src={interest.img} alt={interest.label} className={styles.mobileCardImg} />
						<div className={styles.mobileCardBody}>
							<p className={styles.activeSub}>{interest.sub}</p>
							<h3 className={styles.activeTitle}>{interest.label}</h3>
							<p className={styles.activeBody}>{interest.body}</p>
						</div>
					</FadeCard>
				))}
			</div>
		</>
	);
}

export default function About() {
	return (
		<section id='about'>
			<div className={styles.introRow}>
				<div className={styles.introLeft}>
					<p className={styles.eyebrow}>About me</p>
					<h2 className={styles.introHeading}>
						Product-focused.
						<br />
						Business-aware.
						<br />
						<span className={styles.dim}>Empathetic by design.</span>
					</h2>
				</div>
				<div className={styles.introRight}>
					<p>
						I build captivating front-end applications that function seamlessly
						because they&apos;re built on elegantly designed backends. What sets
						me apart is a unique blend of technical prowess and a profound
						understanding of business, communication, and empathetic team
						building.
					</p>
					<p>
						With years of hands-on experience — solo contractor, startup teams
						of 4, enterprise teams of 30+ — I&apos;ve honed a skill set
						that&apos;s as comfortable in a design review as it is in a code
						review.
					</p>
				</div>
			</div>

			<AboutFrames />
		</section>
	);
}
