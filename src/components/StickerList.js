import React from "react";
import { Sticker } from "./Sticker";

export const StickerList = ({stickers, onDelete}) => {
     return (
          <div className="mainConteinerStickers">
          {stickers.map((item) => (
            <Sticker
              key={item.id}
              sticker={item}
              onDelete={onDelete}
            />
          ))}
        </div>
     )
}