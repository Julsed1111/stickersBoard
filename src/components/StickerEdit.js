import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStickerById, updateSticker } from "../services/stickersService";
import updateDiv from "../icons/check.svg";

export const StickerEdit = () => {
  const [description, setDescription] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getStickerById(id).then(({ data }) => {setDescription(data.description)});
  }, []);

  const saveSticker = () => {
    let newSticker = { id: id, description: description };
    updateSticker(id, newSticker).then(() => navigate("/home"));
  };

  return (
    <div className="stickersItem">
      <div className="btnDivEdit">
        <button className="editBtn" title="Save changes" onClick={saveSticker}>
          <img src={updateDiv} alt="" />
        </button>
      </div>
      <textarea className="txta" value={description} onChange={(e) => setDescription(e.target.value)}> {description} </textarea>
    </div>
  );
};
