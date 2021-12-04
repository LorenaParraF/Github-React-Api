import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

const Notfound = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faHeartBroken}>
        Notfound: "Pagina no encontrada o sin seguidores "
      </FontAwesomeIcon>
    </div>
  );
};

export default Notfound;
