import { tv } from "tailwind-variants"

const styles = tv({
  slots: {
    box: "flex flex-wrap justify-around gap-4",
    item: [
      "grid size-8 cursor-default place-content-center rounded-md text-fg/80 sm:size-14",
      "focus:bg-primary focus:text-primary-fg focus:outline-hidden",
      "selected:bg-primary selected:text-primary-fg",
      "data-[open=true]:bg-primary data-[open=true]:text-primary-fg",
      "hover:bg-secondary hover:text-secondary-fg",
      "focus-visible:ring-4 focus-visible:ring-primary-fg/15",
    ],
  },
})

const { item, box } = styles()

export { item, box }
