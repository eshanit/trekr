import type { PropType } from 'vue';
import type { BadgeVariant } from '../../types';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<"sm" | "md" | "xs" | "lg">;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<BadgeVariant>;
        default: () => any;
        validator(value: string): boolean;
    };
    label: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    class: {
        type: PropType<any>;
        default: undefined;
    };
    ui: {
        type: PropType<Partial<any>>;
        default: undefined;
    };
}, {
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    badgeClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<"sm" | "md" | "xs" | "lg">;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<BadgeVariant>;
        default: () => any;
        validator(value: string): boolean;
    };
    label: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    class: {
        type: PropType<any>;
        default: undefined;
    };
    ui: {
        type: PropType<Partial<any>>;
        default: undefined;
    };
}>>, {
    color: any;
    ui: Partial<any>;
    class: any;
    label: string | number;
    variant: BadgeVariant;
    size: "sm" | "md" | "xs" | "lg";
}, {}>;
export default _default;
