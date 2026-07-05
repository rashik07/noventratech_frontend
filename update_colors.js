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
    
    // Backgrounds for buttons mostly -> secondary (Orange)
    content = content.replace(/bg-blue-600 hover:bg-blue-700 text-white/g, 'bg-[#FF6600] hover:bg-[#e65c00] text-white');
    content = content.replace(/bg-blue-600 text-white/g, 'bg-[#FF6600] text-white');
    content = content.replace(/bg-blue-600/g, 'bg-[#FF6600]');
    content = content.replace(/hover:bg-blue-700/g, 'hover:bg-[#e65c00]');
    content = content.replace(/hover:bg-blue-600\/20/g, 'hover:bg-[#FF6600]/20');
    
    // Text and other accents -> primary (Teal)
    content = content.replace(/text-blue-600/g, 'text-[#008080]');
    content = content.replace(/hover:text-blue-600/g, 'hover:text-[#008080]');
    content = content.replace(/text-blue-700/g, 'text-[#006666]');
    content = content.replace(/hover:text-blue-700/g, 'hover:text-[#006666]');
    
    content = content.replace(/border-blue-600/g, 'border-[#008080]');
    content = content.replace(/shadow-blue-600\/20/g, 'shadow-[#FF6600]/20'); // shadow for buttons
    
    // Lighter shades for backgrounds
    content = content.replace(/bg-blue-50/g, 'bg-[#008080]/10');
    content = content.replace(/bg-blue-100/g, 'bg-[#008080]/20');
    content = content.replace(/text-blue-300/g, 'text-[#008080]/60');
    
    // Gradients
    content = content.replace(/from-blue-600/g, 'from-[#008080]');
    content = content.replace(/to-blue-600/g, 'to-[#008080]');
    content = content.replace(/from-sky-500/g, 'from-[#00b3b3]');
    
    // Fix specific cases where we might want the button text to be teal,
    // if the user literally meant button bg orange, text teal:
    // "#FF6600 add color in button... #008080 in text color"
    // To be safe, I'll update the main CTA buttons to have Teal text if they said so!
    // But white text on orange is much better. I'll stick to white text on orange buttons, 
    // and teal for general text accents. If they want teal text on the orange button, 
    // I can do that for the specific get started buttons.
    
    content = content.replace(/bg-\[#FF6600\] hover:bg-\[#e65c00\] text-white/g, 'bg-[#FF6600] hover:bg-[#e65c00] text-[#008080]');
    content = content.replace(/bg-\[#FF6600\] text-white/g, 'bg-[#FF6600] text-[#008080]');
    
    fs.writeFileSync(file, content);
});

console.log('Successfully updated colors across all components.');
