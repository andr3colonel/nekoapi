/**
 * nekoapi - ASCII-generated cat images
 * 
 * A fun npm package that provides various ASCII cat art for your
 * terminal applications, chat bots, or anywhere you need a cute cat!
 */

const { cats, catFaces, kittens, bigCats, actionCats } = require('./cats');

/**
 * Available moods for cats
 */
const MOODS = ['standard', 'happy', 'sad', 'sleepy', 'excited', 'angry', 'curious', 'love', 'wink', 'surprised'];

/**
 * Available actions for cats
 */
const ACTIONS = ['running', 'sleeping', 'pouncing', 'hunting'];

/**
 * Available cat sizes/types
 */
const CAT_TYPES = ['standard', 'face', 'kitten', 'big', 'action'];

/**
 * Get a random item from an array
 * @param {Array} arr - Array to pick from
 * @returns {*} Random item from the array
 */
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Get a random cat ASCII art
 * @returns {string} Random ASCII cat
 */
function getRandomCat() {
  const allCats = [
    ...Object.values(cats),
    ...Object.values(kittens),
    ...Object.values(bigCats),
    ...Object.values(actionCats),
  ];
  return getRandomItem(allCats);
}

/**
 * Get a cat based on mood
 * @param {string} mood - The mood of the cat (happy, sad, sleepy, excited, angry, curious, love, wink, surprised)
 * @returns {string} ASCII cat matching the mood
 * @throws {Error} If mood is not recognized
 */
function getCatByMood(mood = 'standard') {
  const normalizedMood = mood.toLowerCase();
  if (!cats[normalizedMood]) {
    throw new Error(`Unknown mood: ${mood}. Available moods: ${MOODS.join(', ')}`);
  }
  return cats[normalizedMood];
}

/**
 * Get a cat with a speech bubble containing a message
 * @param {string} message - The message the cat should say
 * @param {string} [mood='standard'] - The mood of the cat
 * @returns {string} ASCII cat with speech bubble
 */
function getCatWithMessage(message, mood = 'standard') {
  const cat = getCatByMood(mood);
  const bubbleWidth = Math.max(message.length + 2, 10);
  const topBorder = '.' + '-'.repeat(bubbleWidth) + '.';
  const bottomBorder = "'" + '-'.repeat(bubbleWidth) + "'";
  const paddedMessage = ` ${message} `.padEnd(bubbleWidth, ' ');
  
  const speechBubble = `
  ${topBorder}
  | ${paddedMessage}|
  ${bottomBorder}
        \\`;
  
  return speechBubble + cat;
}

/**
 * Get a cat face emoji-style ASCII
 * @param {string} [type='standard'] - Type of face (standard, happy, wink, love, sleepy, excited, sad, surprised)
 * @returns {string} Cat face ASCII
 */
function getCatFace(type = 'standard') {
  const normalizedType = type.toLowerCase();
  if (!catFaces[normalizedType]) {
    throw new Error(`Unknown face type: ${type}. Available types: ${Object.keys(catFaces).join(', ')}`);
  }
  return catFaces[normalizedType];
}

/**
 * Get a kitten ASCII art
 * @param {string} [type='standard'] - Type of kitten (standard, playful, sleepy)
 * @returns {string} Kitten ASCII art
 */
function getKitten(type = 'standard') {
  const normalizedType = type.toLowerCase();
  if (!kittens[normalizedType]) {
    throw new Error(`Unknown kitten type: ${type}. Available types: ${Object.keys(kittens).join(', ')}`);
  }
  return kittens[normalizedType];
}

/**
 * Get a big/detailed cat ASCII art
 * @param {string} [pose='sitting'] - Pose of the cat (sitting, standing, stretching, playing, loaf)
 * @returns {string} Big cat ASCII art
 */
function getBigCat(pose = 'sitting') {
  const normalizedPose = pose.toLowerCase();
  if (!bigCats[normalizedPose]) {
    throw new Error(`Unknown pose: ${pose}. Available poses: ${Object.keys(bigCats).join(', ')}`);
  }
  return bigCats[normalizedPose];
}

/**
 * Get a cat performing an action
 * @param {string} [action='sleeping'] - Action the cat is doing (running, sleeping, pouncing, hunting)
 * @returns {string} Action cat ASCII art
 */
function getActionCat(action = 'sleeping') {
  const normalizedAction = action.toLowerCase();
  if (!actionCats[normalizedAction]) {
    throw new Error(`Unknown action: ${action}. Available actions: ${ACTIONS.join(', ')}`);
  }
  return actionCats[normalizedAction];
}

/**
 * List all available moods
 * @returns {string[]} Array of available moods
 */
function listMoods() {
  return [...MOODS];
}

/**
 * List all available actions
 * @returns {string[]} Array of available actions
 */
function listActions() {
  return [...ACTIONS];
}

/**
 * List all available cat types
 * @returns {string[]} Array of available cat types
 */
function listCatTypes() {
  return [...CAT_TYPES];
}

/**
 * Get all cats of a specific type
 * @param {string} type - Type of cats to get (standard, face, kitten, big, action)
 * @returns {Object} Object containing all cats of that type
 */
function getAllCatsByType(type) {
  const normalizedType = type.toLowerCase();
  switch (normalizedType) {
    case 'standard':
      return { ...cats };
    case 'face':
      return { ...catFaces };
    case 'kitten':
      return { ...kittens };
    case 'big':
      return { ...bigCats };
    case 'action':
      return { ...actionCats };
    default:
      throw new Error(`Unknown cat type: ${type}. Available types: ${CAT_TYPES.join(', ')}`);
  }
}

/**
 * Create a custom cat parade (multiple cats in a row)
 * @param {number} [count=3] - Number of cats in the parade
 * @returns {string} Multiple cat faces in a row
 */
function getCatParade(count = 3) {
  const faces = Object.values(catFaces);
  const parade = [];
  for (let i = 0; i < count; i++) {
    parade.push(getRandomItem(faces));
  }
  return parade.join('  ');
}

/**
 * Get a sleeping cat
 * @returns {string} Sleeping cat ASCII art
 */
function getSleepingCat() {
  return actionCats.sleeping;
}

// Export all functions
module.exports = {
  // Core functions
  getRandomCat,
  getCatByMood,
  getCatWithMessage,
  getCatFace,
  getKitten,
  getBigCat,
  getActionCat,
  getSleepingCat,
  getCatParade,
  
  // Utility functions
  listMoods,
  listActions,
  listCatTypes,
  getAllCatsByType,
  
  // Constants
  MOODS,
  ACTIONS,
  CAT_TYPES,
};
