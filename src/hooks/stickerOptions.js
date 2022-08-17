import { useState, useCallback, useEffect } from "react";
import {
  getStickersList,
  createNewSticker,
  deleteSticker,
} from "../services/stickersService";

export const useStickerOptions = () => {
  const [stickers, setStickers] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    getStickersList().then((data) => {
      setStickers(data);
    });
  }, []);

  const updateDescription = (text) => {
    setDescription(text);
  };

  const newSticker = useCallback((description) => {
    const newItem = { description };

    createNewSticker(newItem).then((data) => {
      setStickers((currentStickers) => [...currentStickers, data]);
    });
    cleareDescription();
  }, [stickers]);

  const deleteStickerById = useCallback((id) => {
    deleteSticker(id).then(() => {
      const newStickers = stickers.filter((sticker) => sticker.id !== id);
      setStickers(newStickers);
    }, [stickers]);
  });

  const cleareDescription = () => {
    setDescription('');
  }

  return {
    stickers,
    description,
    newSticker,
    deleteStickerById,
    updateDescription,
    cleareDescription
  };
};
