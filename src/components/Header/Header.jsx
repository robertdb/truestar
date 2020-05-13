import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { selectors } from "../../ducks/post";
import { Button } from "../common";
import "./header.css";

const HeaderBase = ({ favorites, selected }) => {
  const exportToJson = (name = "default", objectData) => {
    let filename = `${name}.json`;
    let contentType = "application/json;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob(
        [decodeURIComponent(encodeURI(JSON.stringify(objectData)))],
        { type: contentType }
      );
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      var a = document.createElement("a");
      a.download = filename;
      a.href =
        "data:" +
        contentType +
        "," +
        encodeURIComponent(JSON.stringify(objectData));
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const favoritesSize = favorites.length;
  const favoriteDisabled = favoritesSize === 0;
  const selectedSize = selected.length;
  const selectedDisabled = selectedSize === 0;

  return (
    <header>
      <nav>
        <p>Export to JSON: </p>
        <p>
          <Button
            onClick={() => exportToJson("favorites", favorites)}
            disabled={favoriteDisabled}
          >{`Favorites (${favoritesSize})`}</Button>
        </p>
        <p>
          <Button
            onClick={() => exportToJson("selected", selected)}
            disabled={selectedDisabled}
          >{`Selected (${selectedSize})`}</Button>
        </p>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: selectors.getPostFavorites(state),
    selected: selectors.getPostSelected(state),
  };
};

const enhance = compose(connect(mapStateToProps, null));

const Header = enhance(HeaderBase);

export { Header, HeaderBase };
