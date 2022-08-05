import StickersItem from "./createStickers";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CreateBoard() {
  const [stickers, setStickers] = useState([]);
  const [description, setDescription] = useState("");
  const [tempItem, setTempItem] = useState({});
  const API_URL = "https://612687da3ab4100017a68fd8.mockapi.io/stickers";

  useEffect(() => {
    axios
      .get(API_URL)
      .then(({ data }) => setStickers(data));
  }, []);

  const onUpdateInputChange = (e, id) => {
    let updateValue = { id: id, description: e.target.value };
    setTempItem(updateValue);
  };

  const onInputChange = (e) => {
    setDescription(e.target.value);
  };

  const onSubmitButtonClick = (e) => {
    e.preventDefault();
    const newItem = {
      description,
    };

    axios
      .post(API_URL, newItem)
      .then(({ data }) => setStickers([...stickers, data]));
  };

  const onItemUpdateClick = (item) => {
    const newItem = {
      ...item,
      description:
        tempItem.id === item.id ? tempItem.description : item.description,
    };
    axios.put(API_URL + "/" + item.id, newItem);
    setStickers(
      stickers.map(({ item }) => (item.id === newItem.id ? newItem : item))
    );
  };

  const onDeleteBtnClick = (id) => {
    axios.delete(API_URL + "/" + id);
    const newStickers = stickers.filter((sticker) => sticker.id !== id);
    setStickers(newStickers);
  };

  return (
    <>
      <form className="textBox">
        <textarea
          className="formTextArea"
          value={description}
          onChange={onInputChange}
          placeholder="New sticker"
        />
        <button className="add-btn" onClick={onSubmitButtonClick}>
          Add
        </button>
        <button className="cancel-btn">Cancel</button>
      </form>

      <div className="mainConteinerStickers">
        {stickers.map((sticker) => (
          <StickersItem
            key={sticker.id}
            item={sticker}
            onDeleteBtnClick={onDeleteBtnClick}
            onItemUpdateClick={onItemUpdateClick}
            onUpdateInputChange={onUpdateInputChange}
          />
        ))}
      </div>
    </>
  );
}
