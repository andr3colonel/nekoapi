# nekoapi 🐱

ASCII-generated cat images for your terminal and applications.

## Installation

```bash
npm install nekoapi
```

## Features

- **Random Cats** - Get a random ASCII cat from the collection
- **Mood-based Cats** - Cats with different expressions (happy, sad, sleepy, etc.)
- **Talking Cats** - Cats with speech bubbles
- **Cat Faces** - Compact emoji-style cat faces
- **Kittens** - Smaller, cuter ASCII kittens
- **Big Cats** - Detailed ASCII cat art in various poses
- **Action Cats** - Cats performing actions (running, sleeping, hunting)
- **Cat Parade** - Multiple cats in a row

## Usage

```javascript
const neko = require('nekoapi');

// Get a random cat
console.log(neko.getRandomCat());

// Get a cat by mood
console.log(neko.getCatByMood('happy'));
/*
    /\_/\  
   ( ^.^ ) 
    > ~ <
   /|   |\
  (_|   |_)
*/

// Get a cat with a message
console.log(neko.getCatWithMessage('Hello!', 'happy'));
/*
  .----------.
  |  Hello!  |
  '----------'
        \
    /\_/\  
   ( ^.^ ) 
    > ~ <
*/

// Get a cat face
console.log(neko.getCatFace('love'));
// (=♥ω♥=)

// Get a kitten
console.log(neko.getKitten('playful'));
/*
   /\ /\
  ( ^.^ )
   =w=~
*/

// Get a big cat
console.log(neko.getBigCat('loaf'));
/*
    /\_____/\
   |  o   o |
   |   >Y<  |
   |________|
   /_|___|_|_\
*/

// Get an action cat
console.log(neko.getActionCat('hunting'));

// Get a sleeping cat
console.log(neko.getSleepingCat());

// Create a cat parade
console.log(neko.getCatParade(3));
// (=^･ω･^=)  (=♥ω♥=)  (=^-ω-^=)
```

## API Reference

### Core Functions

#### `getRandomCat()`
Returns a random ASCII cat from the entire collection.

#### `getCatByMood(mood)`
Returns a cat matching the specified mood.

**Available moods:** `standard`, `happy`, `sad`, `sleepy`, `excited`, `angry`, `curious`, `love`, `wink`, `surprised`

#### `getCatWithMessage(message, mood?)`
Returns a cat with a speech bubble containing the specified message.

#### `getCatFace(type?)`
Returns a compact cat face.

**Available types:** `standard`, `happy`, `wink`, `love`, `sleepy`, `excited`, `sad`, `surprised`

#### `getKitten(type?)`
Returns a small kitten ASCII art.

**Available types:** `standard`, `playful`, `sleepy`

#### `getBigCat(pose?)`
Returns a larger, more detailed cat ASCII art.

**Available poses:** `sitting`, `standing`, `stretching`, `playing`, `loaf`

#### `getActionCat(action?)`
Returns a cat performing an action.

**Available actions:** `running`, `sleeping`, `pouncing`, `hunting`

#### `getSleepingCat()`
Returns a sleeping cat ASCII art.

#### `getCatParade(count?)`
Returns multiple cat faces in a row. Default count is 3.

### Utility Functions

#### `listMoods()`
Returns an array of all available moods.

#### `listActions()`
Returns an array of all available actions.

#### `listCatTypes()`
Returns an array of all available cat types.

#### `getAllCatsByType(type)`
Returns an object containing all cats of a specific type.

**Available types:** `standard`, `face`, `kitten`, `big`, `action`

### Constants

- `MOODS` - Array of available moods
- `ACTIONS` - Array of available actions
- `CAT_TYPES` - Array of available cat types

## TypeScript Support

This package includes TypeScript type definitions. Types are available for all functions and constants.

```typescript
import { getCatByMood, Mood } from 'nekoapi';

const mood: Mood = 'happy';
const cat: string = getCatByMood(mood);
```

## CI/CD

This package uses GitHub Actions for continuous integration and publishing:

- **CI** (`ci.yml`) - Runs tests on Node.js 18, 20, and 22 for all pushes and PRs to main
- **Publish on Release** (`publish.yml`) - Publishes to npm when a GitHub Release is created
- **Publish on Tag** (`publish-tag.yml`) - Publishes to npm when a version tag (e.g., `v1.0.0`) is pushed

### Publishing a New Version

1. Update the version in `package.json`
2. Commit the change: `git commit -am "Bump version to X.Y.Z"`
3. Create and push a tag: `git tag vX.Y.Z && git push origin vX.Y.Z`
4. Or create a GitHub Release from the tag

### Setup Required

Add `NPM_TOKEN` to your repository secrets:
1. Generate an npm access token at https://www.npmjs.com/settings/~/tokens
2. Go to your GitHub repo → Settings → Secrets and variables → Actions
3. Add a new secret named `NPM_TOKEN` with your npm token

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Repository

[https://github.com/andr3colonel/nekoapi](https://github.com/andr3colonel/nekoapi)
