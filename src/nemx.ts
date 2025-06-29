
/**
 * @module nemx
 */

// Re-export everything from discord.js except EmbedBuilder and EmbedType
export * from 'discord.js';
export type * from 'discord.js';

// Explicitly export our custom utilities (which includes EmbedBuilder as an alias for Embed)
export { EmbedBuilder } from './utils/embed';
export type { CustomEmbedType as EmbedType, CustomEmbedOptions, EmbedColors } from './types/embed';
