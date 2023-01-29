import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Smiley } from "phosphor-react";

interface EmojiPickerProps {
  onEmojiSelect: (emoji: any) => void;
}

export function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
  function handleEmojiSelect(emoji: any) {
    if (onEmojiSelect) {
      onEmojiSelect(emoji);
    }
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Smiley size={28} className="text-white" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="shadow-lg" sideOffset={5}>
          <Picker data={data} onEmojiSelect={handleEmojiSelect} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
