import { JointedProps } from "@/logic/interfaces/props/jointed";
import { ButtonType } from "./buttonType";

export interface ButtonProps extends JointedProps {
  as?: Omit<ButtonType, "input">;
  noResponsive?: boolean;
}
