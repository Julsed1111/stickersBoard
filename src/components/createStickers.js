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

// let textareas = document.querySelectorAll('.txta'),
//     hiddenDiv = document.createElement('div'),
//     content = null;

// for (let j of textareas) {
//   j.classList.add('txtstuff');
// }

// hiddenDiv.classList.add('txta');

// hiddenDiv.style.display = 'none';
// hiddenDiv.style.whiteSpace = 'pre-wrap';
// hiddenDiv.style.wordWrap = 'break-word';

// for(let i of textareas) {
//   (function (i) {
//     i.addEventListener('input', function() {

//       i.parentNode.appendChild(hiddenDiv);

//       i.style.resize = 'none';
//       i.style.overflow = 'hidden';

//       content = i.value;

//       content = content.replace(/\n/g, '<br>');

//       hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';

//       hiddenDiv.style.visibility = 'hidden';
//       hiddenDiv.style.display = 'block';
//       i.style.height = hiddenDiv.offsetHeight + 'px';

//       hiddenDiv.style.visibility = 'visible';
//       hiddenDiv.style.display = 'none';
//     });
//   })
//   (i);
// }
