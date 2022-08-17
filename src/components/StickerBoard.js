import React from "react";
import { NewStickerForm } from "./NewStickerForm";
import { StickerList } from "./StickerList";
import { useStickerOptions } from "../hooks/stickerOptions";
import { useTheme } from "../hooks/useTheme";

export const StickerBoard = () => {
  const { stickers, description, newSticker, deleteStickerById, updateDescription, cleareDescription } = useStickerOptions();
  const {toggleTheme} = useTheme();

  const createSticker = (description) => newSticker(description);
  const deleteSticker = (sticker) => deleteStickerById(sticker.id);

  return (
    <>
      <button type="button" className="themeBody" onClick={toggleTheme}>Change theme</button>
      <NewStickerForm addSticker={createSticker} description={description} updateDescription={updateDescription} cleareDescription={cleareDescription}/>
      <StickerList stickers={stickers} onDelete={deleteSticker} />
    </>
  );
};
