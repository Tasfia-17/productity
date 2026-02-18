import DepartmentSectionShell from '../departments/DepartmentSectionShell';

export default function UnnecessaryAudioExperiencesSection() {
    return (
        <DepartmentSectionShell 
            id="unnecessary-audio" 
            title="🔊 Unnecessary Audio Experiences"
            variant="sacred"
        >
            <div className="space-y-16">
                {/* The Productivity ASMR Collection */}
                <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-whisper text-temple-dark text-center italic">
                        🎧 The Productivity ASMR Collection
                    </h3>
                    <div className="border-8 border-temple-gold/60 rounded-lg p-8 bg-gradient-to-br from-amber-50 to-yellow-50 space-y-6">
                        <div className="space-y-3">
                            <p className="font-handwriting text-lg text-temple-dark/80">
                                Keyboard typing that stops randomly...
                            </p>
                            <audio controls className="w-full">
                                <source src="/assets/generated/asmr-keyboard-stops.mp3" type="audio/mpeg" />
                            </audio>
                        </div>
                        <div className="space-y-3">
                            <p className="font-handwriting text-lg text-temple-dark/80">
                                Timer ticking that speeds up...
                            </p>
                            <audio controls className="w-full">
                                <source src="/assets/generated/asmr-timer-speeds-up.mp3" type="audio/mpeg" />
                            </audio>
                        </div>
                        <div className="space-y-3">
                            <p className="font-handwriting text-lg text-temple-dark/80 italic">
                                Soft whisper: "You could be doing more."
                            </p>
                            <audio controls className="w-full">
                                <source src="/assets/generated/asmr-whisper-more.mp3" type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>
                </div>

                {/* Gregorian Chant Remix */}
                <div className="space-y-6">
                    <h3 className="text-4xl md:text-5xl font-gothic text-temple-red text-center uppercase tracking-wider">
                        🎶 Gregorian Chant Remix
                    </h3>
                    <div className="border-8 border-temple-red rounded-lg p-8 bg-gradient-to-br from-red-50 to-amber-50">
                        <div className="text-center space-y-4 mb-6">
                            <p className="font-chant text-2xl text-temple-dark">
                                Monks chanting:
                            </p>
                            <p className="font-bold text-3xl text-temple-red tracking-widest">
                                "Pro-cras-ti-na-tioooon…"
                            </p>
                            <p className="font-mono text-sm text-temple-dark/60">
                                (With trap beat under it)
                            </p>
                        </div>
                        <audio controls className="w-full">
                            <source src="/assets/generated/gregorian-trap-remix.mp3" type="audio/mpeg" />
                        </audio>
                    </div>
                </div>

                {/* 24/7 Radio Station */}
                <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-radio text-temple-dark text-center tracking-wide">
                        📻 Radio Delay FM — 24/7
                    </h3>
                    <div className="border-8 border-temple-gold rounded-lg p-8 bg-gradient-to-br from-yellow-100 to-amber-100 space-y-6">
                        <audio controls loop className="w-full">
                            <source src="/assets/generated/radio-delay-fm-stream.mp3" type="audio/mpeg" />
                        </audio>
                        <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-amber-50">
                            <p className="font-bold text-xl font-sans text-temple-dark mb-4 text-center">
                                Featured Segments:
                            </p>
                            <ul className="space-y-3 font-broadcast text-temple-dark/80">
                                <li className="flex items-start gap-3">
                                    <span className="text-temple-gold text-2xl">📌</span>
                                    <span className="text-lg">"Motivational Quotes We'll Never Apply"</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-temple-gold text-2xl">🎵</span>
                                    <span className="text-lg">"Top 10 Songs to Avoid Working To"</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-temple-gold text-2xl">🌤️</span>
                                    <span className="text-lg">"Weather Report: Heavy Distraction"</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
