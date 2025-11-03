const imgProfile = new URL("../images/profile.jpeg", import.meta.url).href;
const imgJob = new URL("../images/job.jpeg", import.meta.url).href;
const imgProposal = new URL("../images/proposal.jpeg", import.meta.url).href;
const imgBoosting = new URL("../images/boosting.jpeg", import.meta.url).href;
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

		{/* Four training segments */}
		<section className="pb-16">
			<div className="container mx-auto px-4">
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{/* Profile Optimization */}
					<div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-secondary/40 to-success/40 transition-transform duration-300 hover:scale-[1.02]">
						<div className="rounded-2xl h-full bg-card p-6 shadow-elegant transition-shadow duration-300 group-hover:shadow-xl flex items-center justify-center">
							<img src={imgProfile} alt="Profile" className="w-full h-40 md:h-44 object-contain" />
						</div>
					</div>

					{/* Job Selection */}
					<div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-secondary/40 via-primary/40 to-success/40 transition-transform duration-300 hover:scale-[1.02]">
						<div className="rounded-2xl h-full bg-card p-6 shadow-elegant transition-shadow duration-300 group-hover:shadow-xl flex items-center justify-center">
							<img src={imgJob} alt="Job" className="w-full h-40 md:h-44 object-contain" />
						</div>
					</div>

					{/* Proposal Writing */}
					<div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-success/40 via-primary/40 to-secondary/40 transition-transform duration-300 hover:scale-[1.02]">
						<div className="rounded-2xl h-full bg-card p-6 shadow-elegant transition-shadow duration-300 group-hover:shadow-xl flex items-center justify-center">
							<img src={imgProposal} alt="Proposal" className="w-full h-40 md:h-44 object-contain" />
						</div>
					</div>

					{/* Boosting Proposals */}
					<div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-success/40 to-secondary/40 transition-transform duration-300 hover:scale-[1.02]">
						<div className="rounded-2xl h-full bg-card p-6 shadow-elegant transition-shadow duration-300 group-hover:shadow-xl flex items-center justify-center">
							<img src={imgBoosting} alt="Boosting" className="w-full h-40 md:h-44 object-contain" />
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* Simple layout: image + page title only */}
		</>
	);
};

export default Training;


