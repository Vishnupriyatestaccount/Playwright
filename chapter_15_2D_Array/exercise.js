// n=4;

// for (let i=0;i<=n;i++)
// {
//     let row=" ";
//     for(let j=0;j<=i;j++)
//     {   
//         row += "* ";
//     }
//     console.log(row);
// }

n=4;

for (let i=0;i<=n;i++)
{
    let row=" ";
    for(let j=0;j<=i;j++)
    {   
        row += "* ";
    }
    console.log(row);
}

console.log('\nReverse pattern:');
for (let i=n;i>=0;i--)
{
    let row=" ";
    for (let j=0;j<=i;j++)
    {
        row += "* ";
    }
    console.log(row);
}

console.log('\nNew centered pattern:');
const m = 3;
for (let i = 1; i <= m; i++) {
    let row = '';
    for (let j = 0; j < m - i; j++) {
        row += ' ';
    }
    for (let j = 0; j < i; j++) {
        row += '*';
        if (j < i - 1) row += ' ';
    }
    console.log(row);
}