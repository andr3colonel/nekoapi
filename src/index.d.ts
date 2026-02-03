/**
 * nekoapi - ASCII-generated cat images
 * TypeScript type definitions
 */

/** Available moods for cats */
export type Mood = 'standard' | 'happy' | 'sad' | 'sleepy' | 'excited' | 'angry' | 'curious' | 'love' | 'wink' | 'surprised';

/** Available actions for cats */
export type Action = 'running' | 'sleeping' | 'pouncing' | 'hunting';

/** Available cat types */
export type CatType = 'standard' | 'face' | 'kitten' | 'big' | 'action';

/** Available cat face types */
export type FaceType = 'standard' | 'happy' | 'wink' | 'love' | 'sleepy' | 'excited' | 'sad' | 'surprised';

/** Available kitten types */
export type KittenType = 'standard' | 'playful' | 'sleepy';

/** Available big cat poses */
export type BigCatPose = 'sitting' | 'standing' | 'stretching' | 'playing' | 'loaf';

/**
 * Get a random cat ASCII art
 * @returns Random ASCII cat
 */
export function getRandomCat(): string;

/**
 * Get a cat based on mood
 * @param mood - The mood of the cat
 * @returns ASCII cat matching the mood
 */
export function getCatByMood(mood?: Mood): string;

/**
 * Get a cat with a speech bubble containing a message
 * @param message - The message the cat should say
 * @param mood - The mood of the cat
 * @returns ASCII cat with speech bubble
 */
export function getCatWithMessage(message: string, mood?: Mood): string;

/**
 * Get a cat face emoji-style ASCII
 * @param type - Type of face
 * @returns Cat face ASCII
 */
export function getCatFace(type?: FaceType): string;

/**
 * Get a kitten ASCII art
 * @param type - Type of kitten
 * @returns Kitten ASCII art
 */
export function getKitten(type?: KittenType): string;

/**
 * Get a big/detailed cat ASCII art
 * @param pose - Pose of the cat
 * @returns Big cat ASCII art
 */
export function getBigCat(pose?: BigCatPose): string;

/**
 * Get a cat performing an action
 * @param action - Action the cat is doing
 * @returns Action cat ASCII art
 */
export function getActionCat(action?: Action): string;

/**
 * Get a sleeping cat
 * @returns Sleeping cat ASCII art
 */
export function getSleepingCat(): string;

/**
 * Create a custom cat parade (multiple cats in a row)
 * @param count - Number of cats in the parade
 * @returns Multiple cat faces in a row
 */
export function getCatParade(count?: number): string;

/**
 * List all available moods
 * @returns Array of available moods
 */
export function listMoods(): Mood[];

/**
 * List all available actions
 * @returns Array of available actions
 */
export function listActions(): Action[];

/**
 * List all available cat types
 * @returns Array of available cat types
 */
export function listCatTypes(): CatType[];

/**
 * Get all cats of a specific type
 * @param type - Type of cats to get
 * @returns Object containing all cats of that type
 */
export function getAllCatsByType(type: CatType): Record<string, string>;

/** Array of available moods */
export const MOODS: Mood[];

/** Array of available actions */
export const ACTIONS: Action[];

/** Array of available cat types */
export const CAT_TYPES: CatType[];
