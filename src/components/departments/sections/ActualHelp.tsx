import DepartmentSectionShell from '../DepartmentSectionShell';

export default function ActualHelp() {
    return (
        <DepartmentSectionShell id="help" title="Actual Help" variant="default">
            <div className="text-center py-16">
                <p className="text-5xl md:text-6xl font-serif font-bold text-temple-dark">
                    Close this site.
                </p>
            </div>
        </DepartmentSectionShell>
    );
}
