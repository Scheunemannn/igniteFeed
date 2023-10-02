/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0)
  function handleLikeComment () {
    setLikeCount(likeCount + 1)
  }

  function handleDeleteComment() {
    onDeleteComment(content)

  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/99615216?v=4"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Scheunemann</strong>
              <time title="18 de agosto de 2023" dateTime="2023-08-18 10:33:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
