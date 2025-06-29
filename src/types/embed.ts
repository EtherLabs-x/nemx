
import { ColorResolvable } from 'discord.js';

export type CustomEmbedType = 'success' | 'error' | 'info' | 'warn' | 'loading';

export interface CustomEmbedOptions {
  title: string;
  description: string;
  color: ColorResolvable;
  footer?: string;
  timestamp?: boolean;
}

export interface EmbedColors {
  success: '#57F287';
  error: '#ED4245';
  info: '#5865F2';
  warn: '#FEE75C';
  loading: '#FEE75C';
}
