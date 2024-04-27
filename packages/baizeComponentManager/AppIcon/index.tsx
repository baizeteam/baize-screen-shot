import { createElement } from "tsx-create-element";
import "./index.less";

interface AppIconProps {
  icon: string;
  className?: string;
  fontSize?: number | string;
  [key: string]: any;
}

export default function AppIcon(props: AppIconProps) {
  const { icon, className, fontSize, ...rest } = props;
  const style: React.CSSProperties = {};
  fontSize &&
    (style.fontSize =
      typeof fontSize === "number" ? `${fontSize}px` : fontSize);
  const isSvg = icon.indexOf("#") === 0;

  return isSvg ? (
    <svg
      className={`baize-screen-shot-icon ${className || ""}`}
      aria-hidden="true"
      style={style}
      {...rest}
    >
      <use href={icon} />
    </svg>
  ) : (
    <i
      className={`baize-screen-shot-icon iconfont ${icon} ${className || ""}`}
      style={style}
      {...rest}
    />
  );
}
