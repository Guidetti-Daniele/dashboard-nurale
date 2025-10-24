import { useId } from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

type CustomAccordionProps = {
  items: Array<{
    triggerNode: React.ReactNode;
    contentNode: React.ReactNode;
  }>;
  className?: string;
} & React.ComponentProps<typeof AccordionPrimitive.Root>;

export const CustomAccordion: React.FC<CustomAccordionProps> = ({
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
