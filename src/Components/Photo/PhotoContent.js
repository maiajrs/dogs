import React from "react";
import { Link } from "react-router-dom";
import styles from "./PhotoContent.module.css";
import PhotoComments from "./PhotoComments";
import { UserContext } from "../../UserContext";
import PhotoDelete from "./PhotoDelete";
import Image from "../Helper/Image";

const PhotoContent = ({ data, single }) => {
  const { photo, comments } = data;
  const user = React.useContext(UserContext);
  return (
      <div className={`${styles.photo} ${single ? styles.singlePhoto : ''}`}>
      <div className={styles.img}>
        <Image
          src={photo.src}
          alt={`foto ampliada da(o) carrocha(o) ${photo.title}`}
        />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.accesses}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.idade} anos</li>
            <li>{photo.peso} kg</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
