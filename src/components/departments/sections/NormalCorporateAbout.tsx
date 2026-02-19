import DepartmentSectionShell from '../DepartmentSectionShell';

export default function NormalCorporateAbout() {
    return (
        <DepartmentSectionShell 
            id="about" 
            title="About Our Research Institute"
            variant="bureaucracy"
        >
            <div className="space-y-8 max-w-4xl mx-auto">
                <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-amber-50 space-y-6">
                    <h3 className="text-2xl font-bold font-corporate text-temple-dark">
                        Our Mission
                    </h3>
                    <p className="font-professional text-lg text-temple-dark/80 leading-relaxed">
                        The Temple of Productivi-Tea is a leading research institution dedicated to the scientific study of task avoidance, deadline negotiation, and the optimization of procrastination methodologies. Since our founding, we have been at the forefront of understanding why tomorrow is always a better day to start than today.
                    </p>
                </div>

                <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-amber-50 space-y-6">
                    <h3 className="text-2xl font-bold font-corporate text-temple-dark">
                        Our Team
                    </h3>
                    <p className="font-professional text-lg text-temple-dark/80 leading-relaxed">
                        Our multidisciplinary team consists of world-renowned experts in the fields of distraction engineering, motivation suppression, and temporal displacement. Each member brings decades of experience in not completing tasks on time and has published extensively on the subject (though most papers remain in draft form).
                    </p>
                </div>

                <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-amber-50 space-y-6">
                    <h3 className="text-2xl font-bold font-corporate text-temple-dark">
                        Our Research
                    </h3>
                    <p className="font-professional text-lg text-temple-dark/80 leading-relaxed">
                        Through rigorous empirical studies and controlled experiments, we have developed groundbreaking theories on the relationship between snack consumption and work avoidance, the optimal number of browser tabs for maximum distraction, and the psychological benefits of perpetual postponement. Our findings have been presented at numerous conferences (that we registered for but never attended).
                    </p>
                </div>

                <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-amber-50 space-y-6">
                    <h3 className="text-2xl font-bold font-corporate text-temple-dark">
                        Accreditation
                    </h3>
                    <p className="font-professional text-lg text-temple-dark/80 leading-relaxed">
                        We are fully accredited by the International Board of Procrastination Studies (IBPS) and maintain partnerships with leading institutions worldwide. Our certification programs are recognized globally, though we recommend starting the application process tomorrow.
                    </p>
                </div>

                <div className="border-8 border-temple-gold rounded-lg p-8 bg-gradient-to-br from-yellow-100 to-amber-100 text-center">
                    <p className="font-motto text-2xl text-temple-dark italic">
                        "Advancing the science of delay, one postponed task at a time."
                    </p>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
