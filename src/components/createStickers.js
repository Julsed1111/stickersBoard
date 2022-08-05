import React from "react";
import deleteDiv from "../icons/delete_icons.svg";
import updateDiv from "../icons/check.svg";

export default function StickersItem({
  item,
  onItemUpdateClick,
  onDeleteBtnClick,
  onUpdateInputChange,
}) {
  const { description, id } = item;

  return (
    <div className="stickersItem">
      <div className="btnDiv">
        <button
          className="editBtn"
          onClick={() => onItemUpdateClick(item)}
          title="Save changes"
        >
          <img src={updateDiv} alt="" />
        </button>
        <button
          className="deleteBtn"
          onClick={(e) => {
            e.stopPropagation();
            onDeleteBtnClick(id);
          }}
          title="Delete sticker"
        >
          <img src={deleteDiv} alt="" />
        </button>
      </div>
      <textarea
        className="txta"
        onChange={(e) => onUpdateInputChange(e, item.id)}
      >
        {description}
      </textarea>
    </div>
  );
}

