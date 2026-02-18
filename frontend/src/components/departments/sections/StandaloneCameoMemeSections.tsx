import DepartmentSectionShell from '../DepartmentSectionShell';

export default function StandaloneCameoMemeSections() {
  return (
    <>
      {/* Jesus Meme Section */}
      <DepartmentSectionShell
        id="divine-memes"
        title="The Divine Meme Archive"
        variant="sacred"
      >
        <div className="space-y-8">
          <div className="flex justify-center">
            <img 
              src="/assets/generated/meme-jesus.dim_1400x1400.png"
              alt="Divine Productivity Wisdom"
              className="max-w-full h-auto rounded-lg shadow-2xl border-4 border-temple-gold"
            />
          </div>
          <div className="text-center space-y-4">
            <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed">
              Behold, the sacred wisdom of procrastination, as revealed through the ancient art of memetic scripture. 
              For it is written: "Blessed are those who scroll, for they shall inherit the algorithm."
            </p>
            <p className="text-lg text-muted-foreground italic">
              This holy image has been viewed 0 times and shared never, for it is too powerful for mortal comprehension.
            </p>
          </div>
        </div>
      </DepartmentSectionShell>

      {/* Satan Meme Section */}
      <DepartmentSectionShell
        id="infernal-memes"
        title="The Infernal Meme Vault"
        variant="default"
      >
        <div className="space-y-8">
          <div className="flex justify-center">
            <img 
              src="/assets/generated/meme-satan.dim_1400x1400.png"
              alt="Demonic Productivity Temptation"
              className="max-w-full h-auto rounded-lg shadow-2xl border-4 border-temple-red"
            />
          </div>
          <div className="text-center space-y-4">
            <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed">
              From the depths of the procrastination abyss comes this unholy testament to the art of strategic delay. 
              The Dark Lord himself whispers: "Why do today what can be eternally postponed?"
            </p>
            <p className="text-lg text-muted-foreground italic">
              Warning: Viewing this meme may result in spontaneous task rescheduling and an overwhelming urge to open new tabs.
            </p>
          </div>
        </div>
      </DepartmentSectionShell>

      {/* Kanye Meme Section */}
      <DepartmentSectionShell
        id="genius-memes"
        title="The Genius Meme Gallery"
        variant="default"
      >
        <div className="space-y-8">
          <div className="flex justify-center">
            <img 
              src="/assets/generated/meme-kanye.dim_1400x1400.png"
              alt="Genius Productivity Philosophy"
              className="max-w-full h-auto rounded-lg shadow-2xl border-4 border-temple-gold-light"
            />
          </div>
          <div className="text-center space-y-4">
            <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed">
              Imma let you finish your work, but this is one of the greatest procrastination memes of all time. 
              OF ALL TIME. The creative genius speaks through postponement, for true art cannot be rushed—or started.
            </p>
            <p className="text-lg text-muted-foreground italic">
              This meme was created in 2 minutes but will be appreciated for exactly 3 seconds before you scroll past it.
            </p>
          </div>
        </div>
      </DepartmentSectionShell>

      {/* Donald Trump Meme Section */}
      <DepartmentSectionShell
        id="tremendous-memes"
        title="The Tremendous Meme Collection"
        variant="default"
      >
        <div className="space-y-8">
          <div className="flex justify-center">
            <img 
              src="/assets/generated/meme-donald-trump.dim_1400x1400.png"
              alt="Tremendous Productivity Strategy"
              className="max-w-full h-auto rounded-lg shadow-2xl border-4 border-accent"
            />
          </div>
          <div className="text-center space-y-4">
            <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed">
              Nobody makes better procrastination memes than this. Believe me. I know memes. I have the best memes. 
              People are saying—very smart people—that this is the most tremendous productivity strategy ever conceived.
            </p>
            <p className="text-lg text-muted-foreground italic">
              Rated "YUUUGE" by the International Council of Strategic Task Postponement. Fake news says otherwise.
            </p>
          </div>
        </div>
      </DepartmentSectionShell>
    </>
  );
}
