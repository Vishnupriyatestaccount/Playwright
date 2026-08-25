let a='Vishnupriya'
let length=a.length;

for(let i=length-1;i>=0;i--)
{
    console.log(a[i]);
}

// Example: Check if two strings are anagrams
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    const normalize = s => s.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

const word1 = 'listen';
const word2 = 'silent';
console.log(`\nAre "${word1}" and "${word2}" anagrams?`, areAnagrams(word1, word2));