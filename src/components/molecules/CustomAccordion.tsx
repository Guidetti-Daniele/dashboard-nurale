import { useId } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

type AccordionBaseProps<T extends "single" | "multiple"> = {
  type: T;
  value?: T extends "single" ? string : string[];
  defaultValue?: T extends "single" ? string : string[];
  onValueChange?(value: T extends "single" ? string : string[]): void;
  collapsible?: T extends "single" ? boolean : never;
};

type SimpleAccordionProps = AccordionBaseProps<"single">;
type MultipleAccordionProps = AccordionBaseProps<"multiple">;

type CustomAccordionProps = {
  items: Array<{
    triggerNode: React.ReactNode;
    contentNode: React.ReactNode;
  }>;
  className?: string;
} & (SimpleAccordionProps | MultipleAccordionProps);

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  items,
  ...accordionProps
}) => {
  const id = useId();

  return (
    <Accordion {...accordionProps}>
      {items.map(({ triggerNode, contentNode }, index) => (
        <AccordionItem
          key={index}
          value={id.concat("_item_").concat(index.toString())}
        >
          <AccordionTrigger>{triggerNode}</AccordionTrigger>
          <AccordionContent>{contentNode}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
