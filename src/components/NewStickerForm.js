import React from "react";

export const NewStickerForm = ({addSticker, description, updateDescription, cleareDescription}) => {

     return (
        <form className="textBox">
          <textarea
            className="formTextArea"
            value={description}
            onChange={(e) => updateDescription(e.target.value)}
            placeholder="New sticker"
          />
         <div>
         <button type="button" className="add-btn" onClick={addSticker.bind(null, description)}>
            Add
          </button>
          <button type="button" className="cancel-btn" onClick={cleareDescription.bind(null, null)}>Cancel</button>
         </div>
        </form>
     );
}