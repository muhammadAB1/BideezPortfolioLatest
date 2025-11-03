import { BookOpen, Send, Workflow } from "lucide-react";
import coverImage from "@/images/ChatGPT Image Nov 3, 2025, 02_33_57 PM (1).png";

const Training = () => {
	return (
		<>
		{/* Hero / Cover Section */}
		<section className="w-full">
			<img 
				src={coverImage} 
				alt="Upwork Training Cover"
				className="w-full h-[60vh] object-cover"
			/>
		</section>

		{/* Main Content themed from cover image */}
		<section id="training" className="relative py-24 overflow-hidden">
			{/* Ambient blurred background based on cover image */}
			<div 
				className="absolute inset-0 -z-10"
				style={{ 
					backgroundImage: `url(${coverImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					filter: 'blur(24px) saturate(120%)',
					transform: 'scale(1.1)'
				}}
			/>
			{/* Dark overlay for contrast */}
			<div className="absolute inset-0 -z-10 bg-black/60" />

			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Upwork Training by Muhammad Ali - Bideez</h1>
					<p className="text-lg md:text-xl text-white/80">
						Practical, results-focused training for Upwork success and client conversion.
					</p>
				</div>

				<div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
					<div className="p-6 rounded-lg shadow-elegant bg-white/10 border border-white/10 backdrop-blur-md">
						<div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-4 mx-auto">
							<BookOpen className="w-8 h-8 text-white" />
						</div>
						<h3 className="text-xl font-semibold mb-2 text-white">Upwork Mastery</h3>
						<p className="text-white/80">
							Learn profile positioning, proposal frameworks, and follow-up systems that win.
						</p>
					</div>
					<div className="p-6 rounded-lg shadow-elegant bg-white/10 border border-white/10 backdrop-blur-md">
						<div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-4 mx-auto">
							<Send className="w-8 h-8 text-white" />
						</div>
						<h3 className="text-xl font-semibold mb-2 text-white">LinkedIn Outreach</h3>
						<p className="text-white/80">
							Build ICP lists, craft messages that convert, and manage responses efficiently.
						</p>
					</div>
					<div className="p-6 rounded-lg shadow-elegant bg-white/10 border border-white/10 backdrop-blur-md">
						<div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-4 mx-auto">
							<Workflow className="w-8 h-8 text-white" />
						</div>
						<h3 className="text-xl font-semibold mb-2 text-white">Sales Ops & Handover</h3>
						<p className="text-white/80">
							Track pipeline health, qualify leads, and streamline passing deals to delivery.
						</p>
					</div>
				</div>
			</div>
		</section>
		</>
	);
};

export default Training;


