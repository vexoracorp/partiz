import React, {type CSSProperties, type ReactElement, type SVGProps} from "react";

interface Props {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    color: string;
    width?: number;
    height?: number;
}

export default function SvgIcon({
                                    icon,
                                    color,
                                    width,
                                    height,
                                }: Props): ReactElement {
    const style = {
        fill: color,
        color: color,
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : "auto",
    } as CSSProperties;

    const props: SVGProps<SVGSVGElement> = { style };
    return <>{React.isValidElement(icon) ? React.cloneElement(icon, props) : React.createElement(icon, props)}</>;
}

