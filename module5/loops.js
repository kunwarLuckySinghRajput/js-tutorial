const map = new Map();
map.set('IN', "India");
map.set('USA', "United States if America");
map.set('FR', "France");

for (const [key,values] of map) {
    console.log(values);
}
