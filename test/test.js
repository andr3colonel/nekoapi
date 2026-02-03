/**
 * Basic tests for nekoapi
 */

const neko = require('../src/index');

console.log('=== nekoapi Tests ===\n');

// Test 1: getRandomCat
console.log('1. getRandomCat():');
console.log(neko.getRandomCat());

// Test 2: getCatByMood
console.log('\n2. getCatByMood("happy"):');
console.log(neko.getCatByMood('happy'));

// Test 3: getCatWithMessage
console.log('\n3. getCatWithMessage("Hello, World!"):');
console.log(neko.getCatWithMessage('Hello, World!'));

// Test 4: getCatFace
console.log('\n4. getCatFace("love"):');
console.log(neko.getCatFace('love'));

// Test 5: getKitten
console.log('\n5. getKitten("playful"):');
console.log(neko.getKitten('playful'));

// Test 6: getBigCat
console.log('\n6. getBigCat("loaf"):');
console.log(neko.getBigCat('loaf'));

// Test 7: getActionCat
console.log('\n7. getActionCat("hunting"):');
console.log(neko.getActionCat('hunting'));

// Test 8: getSleepingCat
console.log('\n8. getSleepingCat():');
console.log(neko.getSleepingCat());

// Test 9: getCatParade
console.log('\n9. getCatParade(5):');
console.log(neko.getCatParade(5));

// Test 10: listMoods
console.log('\n10. listMoods():');
console.log(neko.listMoods());

// Test 11: listActions
console.log('\n11. listActions():');
console.log(neko.listActions());

// Test 12: listCatTypes
console.log('\n12. listCatTypes():');
console.log(neko.listCatTypes());

// Test 13: getAllCatsByType
console.log('\n13. getAllCatsByType("face"):');
console.log(neko.getAllCatsByType('face'));

console.log('\n=== All tests completed! ===');
