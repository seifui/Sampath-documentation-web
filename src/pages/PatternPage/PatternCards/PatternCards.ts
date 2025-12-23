import { ComponentsPreviewCardProps } from "@types";
import {
 
  NODATACARD_COMPONENT_IMAGE,
  ALERTS_COMPONENT_IMAGE,
  VALIDATION,
  NOTIFICATION,
  ERROR,
  PROGRESS,
  SUCCESS,
} from "@assets";

export const PatternCards: ComponentsPreviewCardProps[] = [
  {
    heading: "Validation messages",
    description: "Triggers an action when clicked.",
    imageUrl: VALIDATION,
    onClickNavigationPath: "/Patterns/Validation",
  },
  {
    heading: "Empty state pattern",
    description: "Triggers an action when clicked.",
    imageUrl: NODATACARD_COMPONENT_IMAGE,
    onClickNavigationPath: "/Patterns/Emptystatepattern",
  },
  
  {
    heading: "Error screen",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: ALERTS_COMPONENT_IMAGE,
    onClickNavigationPath: "/Foundation/Icon",
  },
  // {
  //   heading: "Help articles",
  //   description:
  //     "A component used to represent an avatar with an icon or letter.",
  //   imageUrl: COMING_SOON_IMAGE,
  //   onClickNavigationPath: "/Patterns/Validation",
  // },
  {
    heading: "Notifications",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: NOTIFICATION,
    onClickNavigationPath: "/Patterns/Validation",
  },
  {
    heading: "Error pattern",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: ERROR,
    onClickNavigationPath: "/Patterns/Validation",
  },
  {
    heading: "Progress screen",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: PROGRESS,
    onClickNavigationPath: "/Patterns/Validation",
  },

  {
    heading: "Success screen",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: SUCCESS,
    onClickNavigationPath: "/Patterns/Validation",
  },
  

];
