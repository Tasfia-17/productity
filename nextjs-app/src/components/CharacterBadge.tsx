import { publicAssetUrl } from '@/utils/publicAssetUrl';

export default function CharacterBadge() {
    return (
        <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-40 pointer-events-none">
            <div className="relative w-32 h-40 md:w-40 md:h-52 lg:w-48 lg:h-60">
                {/* Character image */}
                <img 
                    src={publicAssetUrl('assets/generated/temple-guide.dim_500x650.png')}
                    alt="Temple Guide"
                    className="absolute bottom-0 left-0 w-full h-full object-contain drop-shadow-2xl"
                />
                
                {/* Badge plaque */}
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4">
                    <div 
                        className="relative w-28 h-20 md:w-36 md:h-24 flex items-center justify-center"
                        style={{
                            backgroundImage: `url(${publicAssetUrl('assets/generated/badge-plaque.dim_320x220.png')})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}
                    >
                        <p className="text-[10px] md:text-xs font-serif font-bold text-temple-dark text-center px-2 leading-tight">
                            Word From The
                            <br />
                            Snack Savior
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
