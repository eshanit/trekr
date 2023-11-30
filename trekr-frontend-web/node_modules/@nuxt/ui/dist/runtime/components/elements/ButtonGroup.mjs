import { h, cloneVNode, computed, toRef, defineComponent } from "vue";
import { twMerge, twJoin } from "tailwind-merge";
import { useUI } from "../../composables/useUI.mjs";
import { mergeConfig, getSlotsChildren } from "../../utils/index.mjs";
import appConfig from "#build/app.config";
import { button, buttonGroup } from "#ui/ui.config";
const buttonConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const buttonGroupConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.buttonGroup, buttonGroup);
export default defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(buttonConfig.size).includes(value);
      }
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: void 0
    }
  },
  setup(props, { slots }) {
    const { ui, attrs } = useUI("buttonGroup", toRef(props, "ui"), buttonGroupConfig);
    const children = computed(() => getSlotsChildren(slots));
    const rounded = computed(() => {
      const roundedMap = {
        "rounded-none": { horizontal: { left: "rounded-s-none", right: "rounded-e-none" }, vertical: { top: "rounded-t-none", bottom: "rounded-b-none" } },
        "rounded-sm": { horizontal: { left: "rounded-s-sm", right: "rounded-e-sm" }, vertical: { top: "rounded-t-sm", bottom: "rounded-b-sm" } },
        rounded: { horizontal: { left: "rounded-s", right: "rounded-e" }, vertical: { top: "rounded-t", bottom: "rounded-b" } },
        "rounded-md": { horizontal: { left: "rounded-s-md", right: "rounded-e-md" }, vertical: { top: "rounded-t-md", bottom: "rounded-b-md" } },
        "rounded-lg": { horizontal: { left: "rounded-s-lg", right: "rounded-e-lg" }, vertical: { top: "rounded-t-lg", bottom: "rounded-b-lg" } },
        "rounded-xl": { horizontal: { left: "rounded-s-xl", right: "rounded-e-xl" }, vertical: { top: "rounded-t-xl", bottom: "rounded-b-xl" } },
        "rounded-2xl": { horizontal: { left: "rounded-s-2xl", right: "rounded-e-2xl" }, vertical: { top: "rounded-t-2xl", bottom: "rounded-b-2xl" } },
        "rounded-3xl": { horizontal: { left: "rounded-s-3xl", right: "rounded-e-3xl" }, vertical: { top: "rounded-t-3xl", bottom: "rounded-b-3xl" } },
        "rounded-full": { horizontal: { left: "rounded-s-full", right: "rounded-e-full" }, vertical: { top: "rounded-t-full", bottom: "rounded-b-full" } }
      };
      return roundedMap[ui.value.rounded][props.orientation];
    });
    const clones = computed(() => children.value.map((node, index) => {
      const vProps = {};
      if (props.size) {
        vProps.size = props.size;
      }
      vProps.ui = node.props?.ui || {};
      vProps.ui.rounded = "rounded-none";
      vProps.ui.base = "!shadow-none";
      if (index === 0) {
        vProps.ui.rounded += ` ${rounded.value.left || rounded.value.top}`;
      }
      if (index === children.value.length - 1) {
        vProps.ui.rounded += ` ${rounded.value.right || rounded.value.bottom}`;
      }
      return cloneVNode(node, vProps);
    }));
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper[props.orientation],
        ui.value.rounded,
        ui.value.shadow
      ), props.class);
    });
    return () => h("div", { class: wrapperClass.value, ...attrs.value }, clones.value);
  }
});
