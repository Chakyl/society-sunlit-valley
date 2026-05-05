const fs = require('fs');
const path = require('path');

const LOCK_FILE = path.join(process.cwd(), 'pakku-lock.json');

function pakkuAudit() {
    if (!fs.existsSync(LOCK_FILE)) {
        console.error('Error: pakku-lock.json not found in the root folder.');
        return;
    }

    const data = JSON.parse(fs.readFileSync(LOCK_FILE, 'utf8'));
    const projects = data.projects || [];

    const missingPlatform = [];
    const mismatchedFiles = [];

    projects.forEach(project => {
        const types = project.files.map(f => f.type);
        const hasCF = types.includes('curseforge');
        const hasMR = types.includes('modrinth');

        if (hasCF && !hasMR) {
            missingPlatform.push({ name: project.name.curseforge || project.slug.curseforge, missing: 'Modrinth' });
        } else if (hasMR && !hasCF) {
            missingPlatform.push({ name: project.name.modrinth || project.slug.modrinth, missing: 'CurseForge' });
        }

        if (hasCF && hasMR) {
            const cfFile = project.files.find(f => f.type === 'curseforge').file_name;
            const mrFile = project.files.find(f => f.type === 'modrinth').file_name;

            if (cfFile !== mrFile) {
                mismatchedFiles.push({
                    name: project.name.curseforge || project.name.modrinth,
                    cfFile,
                    mrFile
                });
            }
        }
    });

    console.log('## Projects with missing platforms');
    console.log('--------------------------------------');
    if (missingPlatform.length === 0) console.log('None found.');
    missingPlatform.forEach(p => console.log(`- ${p.name} (Missing: ${p.missing})`));

    console.log('\n## Projects with mismatched file names (versions)');
    console.log('------------------------------------------');
    if (mismatchedFiles.length === 0) console.log('None found.');
    mismatchedFiles.forEach(p => {
        console.log(`- Project: ${p.name}`);
        console.log(`  CF: ${p.cfFile}`);
        console.log(`  MR: ${p.mrFile}`);
    });
}

pakkuAudit();