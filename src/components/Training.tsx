const Training = () => {
	return (
		<section id="training" className="py-24 bg-muted/30">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Training</h2>
					<p className="text-lg md:text-xl text-muted-foreground">
						Sharpen your bidding, outreach, and client-conversion skills with practical, results-focused sessions.
					</p>
				</div>

				<div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
					<div className="p-6 bg-card rounded-lg shadow-elegant">
						<h3 className="text-xl font-semibold mb-2">Upwork Mastery</h3>
						<p className="text-muted-foreground">
							Learn profile positioning, proposal frameworks, and follow-up systems that win.
						</p>
					</div>
					<div className="p-6 bg-card rounded-lg shadow-elegant">
						<h3 className="text-xl font-semibold mb-2">LinkedIn Outreach</h3>
						<p className="text-muted-foreground">
							Build ICP lists, craft messages that convert, and manage responses efficiently.
						</p>
					</div>
					<div className="p-6 bg-card rounded-lg shadow-elegant">
						<h3 className="text-xl font-semibold mb-2">Sales Ops & Handover</h3>
						<p className="text-muted-foreground">
							Track pipeline health, qualify leads, and streamline passing deals to delivery.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Training;


