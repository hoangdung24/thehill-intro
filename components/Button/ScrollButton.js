import { useState, useEffect } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Button } from "@mui/material";

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleV = () => {
		const scrolled = document.documentElement.scrollTop;

		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled < 300) {
			setVisible(false);
		}
	};

	useEffect(function mount() {
		function onscroll() {}
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	if (typeof window !== "undefined") {
		window.addEventListener("scroll", toggleV);
	}

	return (
		<Button onClick={scrollToTop}>
			<ArrowCircleUpIcon />
		</Button>
	);
};

export default ScrollButton;
