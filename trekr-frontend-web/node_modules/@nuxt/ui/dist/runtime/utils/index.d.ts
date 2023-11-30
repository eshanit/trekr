import type { Strategy } from '../types';
export declare function mergeConfig<T>(strategy: Strategy, ...configs: any[]): T;
export declare function hexToRgb(hex: string): string | null;
export declare function getSlotsChildren(slots: any): any;
export * from './lodash';
