import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import deleteDiv from "../icons/delete_icons.svg";
import editDiv from "../icons/edit_icon.svg";
import themeChange from "../icons/palette.svg";

export const Sticker = ({ sticker, onDelete }) => {
  const [description, setDescription] = useState(sticker.description);
  const [ theme, setTheme ] = useState('Light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'Light' ? 'Dark' : 'Light'));
  };

  return (
    <div className={`stickersItem ${theme}` }>
      <div className="btnDiv">
        <button type="button" className="colorBtn" title="Change theme" onClick={toggleTheme}>
          <img src={themeChange} alt="" />
        </button>
        <Link to={`/sticker/${sticker.id}`}>
          <button className="editBtn" title="Save changes">
            <img src={editDiv} alt="" />
          </button>
        </Link>
        <button
          className="deleteBtn"
          onClick={onDelete.bind(null, sticker)}
          title="Delete sticker"
        >
          <img src={deleteDiv} alt="" />
        </button>
      </div>
      <div className="txta">{description}</div>
    </div>
  );
};
