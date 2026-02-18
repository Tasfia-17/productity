import DepartmentSectionShell from '../departments/DepartmentSectionShell';

export default function UnnecessaryVideoContentSection() {
    return (
        <DepartmentSectionShell 
            id="unnecessary-videos" 
            title="Unnecessary Video Content"
            variant="sacred"
        >
            <div className="space-y-16">
                {/* Jesus Teaches Productivity (In Einstein's Voice) */}
                <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-cursive text-temple-dark text-center tracking-wide">
                        Jesus Teaches Productivity (In Einstein's Voice)
                    </h3>
                    <div 
                        className="relative border-8 border-temple-gold rounded-lg overflow-hidden shadow-2xl"
                        style={{
                            backgroundImage: 'url(/assets/generated/film-grain-overlay-tile.dim_1024x1024.png)',
                            backgroundSize: '256px 256px',
                            backgroundRepeat: 'repeat'
                        }}
                    >
                        <video 
                            controls 
                            className="w-full aspect-video bg-black/90"
                            poster="/assets/generated/candle-altar-still.dim_1600x900.png"
                        >
                            <source src="/assets/generated/einstein-jesus-productivity.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 font-mono text-sm md:text-base">
                            <p className="italic">"Time… is relative. Therefore, your deadline… is negotiable."</p>
                        </div>
                    </div>
                    <div className="bg-amber-50 border-4 border-temple-gold/40 rounded-lg p-6 space-y-3">
                        <p className="font-script text-xl text-temple-dark italic">
                            Other sacred teachings:
                        </p>
                        <ul className="space-y-2 font-mono text-temple-dark/80">
                            <li>• "Energy cannot be destroyed, only transferred… from work to snacks."</li>
                            <li>• "Productivity exists only when observed."</li>
                        </ul>
                    </div>
                </div>

                {/* The 3-Hour Live Stream of Nothing */}
                <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-display text-temple-dark text-center uppercase tracking-widest">
                        Live: Deep Focus Mode
                    </h3>
                    <div className="border-8 border-temple-red rounded-lg overflow-hidden shadow-2xl">
                        <video 
                            controls 
                            loop
                            className="w-full aspect-video bg-black"
                            poster="/assets/generated/candle-altar-still.dim_1600x900.png"
                        >
                            <source src="/assets/generated/candle-livestream-3hr.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="text-center space-y-2">
                        <p className="font-handwriting text-2xl text-temple-dark/70">
                            A candle flickering...
                        </p>
                        <p className="font-sans text-sm text-temple-dark/50 italic">
                            (Occasional whisper: "Stay with the task…")
                        </p>
                        <p className="font-mono text-xs text-temple-red">
                            ⚠️ Random notification sound every 11 minutes
                        </p>
                    </div>
                </div>

                {/* The Sacred Unboxing */}
                <div className="space-y-6">
                    <h3 className="text-4xl md:text-5xl font-fancy text-temple-gold text-center drop-shadow-lg">
                        The Sacred Unboxing
                    </h3>
                    <div className="border-8 border-temple-gold rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-amber-100 to-yellow-50">
                        <video 
                            controls 
                            className="w-full aspect-video"
                        >
                            <source src="/assets/generated/sacred-unboxing.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="border-4 border-temple-gold/60 rounded-lg p-4 bg-amber-50">
                            <p className="font-elegant text-lg text-temple-dark">📓 A Notebook</p>
                            <p className="text-xs font-mono text-temple-dark/60 mt-2">Artifact #001</p>
                        </div>
                        <div className="border-4 border-temple-gold/60 rounded-lg p-4 bg-amber-50">
                            <p className="font-elegant text-lg text-temple-dark">🖊️ A Pen</p>
                            <p className="text-xs font-mono text-temple-dark/60 mt-2">Artifact #002</p>
                        </div>
                        <div className="border-4 border-temple-gold/60 rounded-lg p-4 bg-amber-50">
                            <p className="font-elegant text-lg text-temple-dark">📋 A To-Do List</p>
                            <p className="text-xs font-mono text-temple-dark/60 mt-2">Artifact #003</p>
                        </div>
                    </div>
                </div>

                {/* Documentary Series */}
                <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-documentary text-temple-dark text-center tracking-tight">
                        The Rise and Fall of My Motivation
                    </h3>
                    <p className="text-center font-sans text-sm text-temple-dark/60 uppercase tracking-widest">
                        A Documentary Series
                    </p>
                    <div className="space-y-8">
                        <div className="border-4 border-temple-gold/40 rounded-lg overflow-hidden">
                            <div className="bg-temple-gold/20 p-4 border-b-2 border-temple-gold/40">
                                <h4 className="font-bold text-xl font-mono">Episode 1: "Monday Morning Optimism"</h4>
                            </div>
                            <video controls className="w-full aspect-video bg-black">
                                <source src="/assets/generated/motivation-ep1.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="border-4 border-temple-gold/40 rounded-lg overflow-hidden">
                            <div className="bg-temple-gold/20 p-4 border-b-2 border-temple-gold/40">
                                <h4 className="font-bold text-xl font-mono">Episode 2: "The Scroll Begins"</h4>
                            </div>
                            <video controls className="w-full aspect-video bg-black">
                                <source src="/assets/generated/motivation-ep2.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="border-4 border-temple-gold/40 rounded-lg overflow-hidden">
                            <div className="bg-temple-gold/20 p-4 border-b-2 border-temple-gold/40">
                                <h4 className="font-bold text-xl font-mono">Episode 3: "It Is Now Thursday"</h4>
                            </div>
                            <video controls className="w-full aspect-video bg-black">
                                <source src="/assets/generated/motivation-ep3.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
