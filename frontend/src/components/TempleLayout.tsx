import TopNavBar from './TopNavBar';
import HeadlineBlock from './HeadlineBlock';
import FramedMedia from './FramedMedia';
import OnboardingPrompt from './OnboardingPrompt';
import MicroHumor from './MicroHumor';
import CharacterBadge from './CharacterBadge';
import InstitutionOfAdvancedProcrastination from './departments/InstitutionOfAdvancedProcrastination';
import UnnecessaryVideoContentSection from './media/UnnecessaryVideoContentSection';
import UnnecessaryAudioExperiencesSection from './media/UnnecessaryAudioExperiencesSection';
import UnnecessaryAppendixDepartments from './departments/UnnecessaryAppendixDepartments';
import AIConfessionBooth from './microfeatures/AIConfessionBooth';
import MicroFeaturesProvider from './microfeatures/MicroFeaturesProvider';
import ScrollTriggeredRevelationOverlay from './microfeatures/ScrollTriggeredRevelationOverlay';
import JesusMicroCameoOverlay from './microfeatures/JesusMicroCameoOverlay';
import RandomGoldenFlashBurstOverlay from './microfeatures/RandomGoldenFlashBurstOverlay';
import RandomBackgroundPopupMemes from './microfeatures/RandomBackgroundPopupMemes';
import HolySpiritJustASecondTooltip from './micromodules/HolySpiritJustASecondTooltip';
import OrnateMorphingSectionFrame from './OrnateMorphingSectionFrame';
import StandaloneCameoMemeSections from './departments/sections/StandaloneCameoMemeSections';
import CurtainIntroOverlay from './intro/CurtainIntroOverlay';
import InfiniteRepeatBlocks from './InfiniteRepeatBlocks';
import { useScrollTriggeredRevelation } from '@/hooks/useScrollTriggeredRevelation';
import { useDualAutoplayFallbackBackgroundAudio } from '@/hooks/useDualAutoplayFallbackBackgroundAudio';
import { useCurtainIntroFlag } from '@/hooks/useCurtainIntroFlag';
import { Toaster } from '@/components/ui/sonner';

export default function TempleLayout() {
    const { isRevealing, currentFigure, isFadingOut } = useScrollTriggeredRevelation();
    const { isDismissed, dismiss } = useCurtainIntroFlag();
    
    // Dual background audio: primary track + underlying religious loop
    useDualAutoplayFallbackBackgroundAudio({
        primarySrc: '/assets/generated/Micah Tyler - Praise The Lord (Official Music Video) - MicahTylerVEVO.mp3',
        primaryVolume: 0.5,
        underlyingSrc: '/assets/generated/unnecessary-religious-song-loop.mp3',
        underlyingVolume: 0.15,
    });

    // Reusable content block (only first block has navigation IDs)
    const ContentBlock = ({ isFirstBlock = false }: { isFirstBlock?: boolean }) => (
        <>
            {/* Onboarding sections with morphing frames */}
            <OrnateMorphingSectionFrame id={isFirstBlock ? "home" : undefined}>
                <HeadlineBlock />
            </OrnateMorphingSectionFrame>
            
            <OrnateMorphingSectionFrame id={isFirstBlock ? "scroll" : undefined}>
                <FramedMedia />
            </OrnateMorphingSectionFrame>
            
            <OrnateMorphingSectionFrame id={isFirstBlock ? "confession" : undefined}>
                <OnboardingPrompt />
            </OrnateMorphingSectionFrame>
            
            <OrnateMorphingSectionFrame id={isFirstBlock ? "assessment" : undefined}>
                <MicroHumor />
            </OrnateMorphingSectionFrame>

            {/* Department sections (already have morphing borders via DepartmentSectionShell) */}
            <InstitutionOfAdvancedProcrastination />

            {/* New media sections */}
            <UnnecessaryVideoContentSection />
            <UnnecessaryAudioExperiencesSection />

            {/* New appendix departments */}
            <UnnecessaryAppendixDepartments />

            {/* AI Confession Booth */}
            <AIConfessionBooth />

            {/* Standalone Cameo Meme Sections */}
            <StandaloneCameoMemeSections />
        </>
    );

    return (
        <MicroFeaturesProvider>
            <div className="relative min-h-screen overflow-x-hidden bg-parchment">
                {/* Parchment overlay texture - MORE INTENSE */}
                <div 
                    className="fixed inset-0 pointer-events-none z-0 opacity-30"
                    style={{
                        backgroundImage: 'url(/assets/generated/parchment-overlay-tile.dim_1024x1024.png)',
                        backgroundRepeat: 'repeat',
                        backgroundSize: '512px 512px'
                    }}
                />

                {/* Additional religious doodle overlay */}
                <div 
                    className="fixed inset-0 pointer-events-none z-0 opacity-15"
                    style={{
                        backgroundImage: 'url(/assets/generated/religious-doodle-tile.dim_1024x1024.png)',
                        backgroundRepeat: 'repeat',
                        backgroundSize: '256px 256px'
                    }}
                />

                {/* Side borders with ancient patterns */}
                <div className="fixed left-0 top-0 bottom-0 w-[100px] md:w-[150px] pointer-events-none z-10">
                    <div 
                        className="h-full w-full bg-repeat-y opacity-90"
                        style={{ 
                            backgroundImage: 'url(/assets/generated/side-border.dim_200x1200.png)',
                            backgroundSize: '100% auto'
                        }}
                    />
                    <div 
                        className="absolute inset-0 opacity-40"
                        style={{
                            backgroundImage: 'url(/assets/generated/ancient-border-pattern-tile.dim_1024x1024.png)',
                            backgroundRepeat: 'repeat',
                            backgroundSize: '64px 64px'
                        }}
                    />
                </div>
                <div className="fixed right-0 top-0 bottom-0 w-[100px] md:w-[150px] pointer-events-none z-10">
                    <div 
                        className="h-full w-full bg-repeat-y opacity-90"
                        style={{ 
                            backgroundImage: 'url(/assets/generated/side-border.dim_200x1200.png)',
                            backgroundSize: '100% auto'
                        }}
                    />
                    <div 
                        className="absolute inset-0 opacity-40"
                        style={{
                            backgroundImage: 'url(/assets/generated/ancient-border-pattern-tile.dim_1024x1024.png)',
                            backgroundRepeat: 'repeat',
                            backgroundSize: '64px 64px'
                        }}
                    />
                </div>

                {/* Top Navigation */}
                <TopNavBar />

                {/* Main Content with Infinite Repeat */}
                <main className="relative z-20 px-4 md:px-[120px] lg:px-[180px] pt-8 pb-24">
                    <div className="max-w-6xl mx-auto">
                        <InfiniteRepeatBlocks>
                            <ContentBlock isFirstBlock />
                        </InfiniteRepeatBlocks>
                    </div>
                </main>

                {/* Bottom Character Badge */}
                <CharacterBadge />

                {/* Footer */}
                <footer className="relative z-20 py-8 text-center text-sm text-muted-foreground border-t border-temple-gold/20">
                    <p className="flex items-center justify-center gap-2 flex-wrap">
                        <span>© {new Date().getFullYear()}</span>
                        <span>•</span>
                        <span>Built with ❤️ using</span>
                        <a 
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'temple-productivi-tea')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-temple-gold hover:text-temple-gold-light transition-colors underline"
                        >
                            caffeine.ai
                        </a>
                    </p>
                </footer>

                {/* Scroll-triggered multi-figure revelation overlay (existing 4-figure system) */}
                <ScrollTriggeredRevelationOverlay 
                    isRevealing={isRevealing} 
                    currentFigure={currentFigure}
                    isFadingOut={isFadingOut}
                />

                {/* Jesus micro-cameo on every scroll */}
                <JesusMicroCameoOverlay />

                {/* Random ultra-bright golden flash bursts */}
                <RandomGoldenFlashBurstOverlay />

                {/* Random background popup memes */}
                <RandomBackgroundPopupMemes />

                {/* Holy Spirit floating tooltip */}
                <HolySpiritJustASecondTooltip />

                {/* Blood-red curtain intro overlay - highest z-index, shows on every new visit */}
                {!isDismissed && <CurtainIntroOverlay onDismiss={dismiss} />}

                <Toaster />
            </div>
        </MicroFeaturesProvider>
    );
}
