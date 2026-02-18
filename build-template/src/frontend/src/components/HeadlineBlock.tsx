export default function HeadlineBlock() {
    return (
        <div className="text-center space-y-4 py-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-temple-dark tracking-wide">
                Welcome to the Temple of Productivi-Tea
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-temple-gold">
                Welcome, Seeker of Focus.
            </h2>
            <p className="text-lg md:text-xl text-temple-dark/80 max-w-3xl mx-auto leading-relaxed">
                You have been chosen.
                <br />
                Mostly because you opened this instead of doing your work.
            </p>
        </div>
    );
}
