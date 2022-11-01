import { Color } from "../types/colors";
import { BadgeLabel } from "../types/labelTypes";

interface IBadge {
  label: BadgeLabel;
  count: number;
  color: Color;
}

export const Badge = ({ label, count, color }: IBadge) => {
  return (
    <span className={`badge bg-${color} px-5 col-2  `}>
      {label} : {count}
    </span>
  );
};
