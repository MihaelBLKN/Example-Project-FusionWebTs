import { Scope } from "fusionwebts/dist/dom/scope";
import { EasingStyles } from "fusionwebts";

export interface Props {
    text: string;
    appearAfter: number;
}

export default (scope: Scope, props: Props): HTMLElement => {
    const opacityGoalValue = scope.value(0);
    const heading = scope.newEl("h1", {
        innerText: props.text,
        style: {
            opacity: scope.tween(opacityGoalValue, 3000, EasingStyles.easeInQuad),

            color: {
                hex: "#FFFFFF",
            },

            fontFamily: '"Sono", monospace'
        }
    });

    setTimeout(() => {
        opacityGoalValue.set(1);
    }, props.appearAfter);

    return heading;
}
