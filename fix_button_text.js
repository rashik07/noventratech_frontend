const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src', 'components', 'sections'));
files.push(path.join(__dirname, 'src', 'app', 'page.tsx'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Change button text from #008080 back to white
    content = content.replace(/bg-\[#FF6600\] hover:bg-\[#e65c00\] text-\[#008080\]/g, 'bg-[#FF6600] hover:bg-[#e65c00] text-white');
    content = content.replace(/bg-\[#FF6600\] text-\[#008080\]/g, 'bg-[#FF6600] text-white');
    
    fs.writeFileSync(file, content);
});

console.log('Successfully fixed button text colors.');
