import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<"sm" | "md" | "xs" | "2xs" | "lg" | "xl">;
        default: null;
        validator(value: string): boolean;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator(value: string): boolean;
    };
    class: {
        type: PropType<any>;
        default: undefined;
    };
    ui: {
        type: PropType<Partial<any>>;
        default: undefined;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<"sm" | "md" | "xs" | "2xs" | "lg" | "xl">;
        default: null;
        validator(value: string): boolean;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator(value: string): boolean;
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
    ui: Partial<any>;
    class: any;
    size: "sm" | "md" | "xs" | "2xs" | "lg" | "xl";
    orientation: "horizontal" | "vertical";
}, {}>;
export default _default;
