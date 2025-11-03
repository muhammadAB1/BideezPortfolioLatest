// Load any matching resized image from src/images, tolerant to exact filename
const images = import.meta.glob("../images/*imresizer*.{jpg,jpeg,png,webp}", { eager: true, as: "url" }) as Record<string, string>;
const coverImage = Object.values(images)[0] ?? new URL("../images/ChatGPT Image Nov 3, 2025, 02_33_57 PM (1).png", import.meta.url).href;

const Training = () => {
	return (
		<>
		{/* Title band themed from cover image */}
		{/* Title will be placed below the image */}
		{/* Hero / Cover Section */}
		<section className="w-full">
			<div className="container mx-auto px-4">
				<div className="max-w-5xl mx-auto">
					<img 
						src={coverImage} 
						alt="Upwork Training Cover"
						className="w-full h-[40vh] md:h-[50vh] object-contain bg-black/5 rounded-lg shadow-elegant"
					/>
				</div>
			</div>
		</section>

		{/* Title below the image */}
		<section id="training" className="py-12">
			<div className="container mx-auto px-4">
				<h1 className="text-4xl md:text-5xl font-bold text-center text-primary">
					Upwork Training by Muhammad Ali - Bideez
				</h1>
			</div>
		</section>

		{/* Simple layout: image + page title only */}
		</>
	);
};

export default Training;


