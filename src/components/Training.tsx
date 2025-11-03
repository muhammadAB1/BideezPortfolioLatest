import { BookOpen, Send, Workflow } from "lucide-react";

const Training = () => {
	return (
		<>
		{/* Hero / Cover Section */}
		<section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
			<img 
				src="https://drive.google.com/file/d/102yKcF5V5xCDlXwU5vGCEDaz67sNqt3x/view?usp=sharing" 
				alt="Upwork Training Cover"
				className="absolute inset-0 w-full h-full object-cover"
			/>
			<div className="absolute inset-0 bg-black/50"></div>
			<div className="container mx-auto px-4 relative z-10 text-center">
				<h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 text-balance">
					Upwork Training by Muhammad Ali - Bideez
				</h1>
				<p className="text-lg md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-balance">
					Practical, results-focused training for Upwork success and client conversion.
				</p>
			</div>
		</section>

		{/* Main Content */}
		<section id="training" className="py-24 bg-muted/30">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">What You'll Learn</h2>
					<p className="text-lg md:text-xl text-muted-foreground">
						Sharpen your bidding, outreach, and client-conversion skills with practical, results-focused sessions.
					</p>
				</div>

				<div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
					<div className="p-6 bg-card rounded-lg shadow-elegant">
						<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
							<BookOpen className="w-8 h-8 text-primary" />
						</div>
						<h3 className="text-xl font-semibold mb-2 text-foreground">Upwork Mastery</h3>
						<p className="text-muted-foreground">
							Learn profile positioning, proposal frameworks, and follow-up systems that win.
						</p>
					</div>
					<div className="p-6 bg-card rounded-lg shadow-elegant">
						<div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
							<Send className="w-8 h-8 text-secondary" />
						</div>
						<h3 className="text-xl font-semibold mb-2 text-foreground">LinkedIn Outreach</h3>
						<p className="text-muted-foreground">
							Build ICP lists, craft messages that convert, and manage responses efficiently.
						</p>
					</div>
					<div className="p-6 bg-card rounded-lg shadow-elegant">
						<div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4 mx-auto">
							<Workflow className="w-8 h-8 text-success" />
						</div>
						<h3 className="text-xl font-semibold mb-2 text-foreground">Sales Ops & Handover</h3>
						<p className="text-muted-foreground">
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


