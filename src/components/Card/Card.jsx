import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Grow } from "@material-ui/core";
import { IconAction, IconRotateAction } from "../common";
import { actions } from "../../ducks/post";
import { colors } from "../../styles/colors";
import "./card.css";

const CardBase = (props) => {
  const {
    onSelectedPost,
    onFavoritePost,
    onDeletePost,
    id,
    title,
    startDate,
    lastUpdated,
    description,
    favorite,
    selected,
    url,
  } = props;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const favoriteColor = favorite ? colors.secondary : "";
  const selectedColor = selected ? colors.secondary : "";

  let expandedContentClass = "card-wrapper-less";
  let expandedIconClass = "";
  let expandedDescriptionClass = "card-description-ellipses";
  let showLinksClass = "";
  if (expanded) {
    expandedContentClass = "card-wrapper-more";
    expandedIconClass = "card-expand-wrapper-less";
    expandedDescriptionClass = "card-description-expand";
    showLinksClass = "card-link-wrapper-show";
  }

  const handleFavorite = () => onFavoritePost({ id });
  const handleSelected = () => onSelectedPost({ id });
  const handleDelete = () => onDeletePost({ id });

  return (
    <Grow in>
      <div className="card-container">
        <div className={["card-wrapper", expandedContentClass].join(" ")}>
          <div className="card-header">
            <h3>{title}</h3>
            <div className="card-icon-wrapper">
              <IconAction
                onClick={handleFavorite}
                iconName="favorite"
                color={favoriteColor}
              />
              <IconAction
                onClick={handleSelected}
                iconName="selected"
                color={selectedColor}
              />
              <IconAction onClick={handleDelete} iconName="trash" />
            </div>
          </div>
          <p className="card-subtitle">{`Start date: ${startDate}`}</p>
          <p className="card-subtitle">{`Last Updated: ${lastUpdated}`}</p>
          <p
            className={["card-description", expandedDescriptionClass].join(" ")}
          >
            {description}
          </p>
          <div className={["card-link-wrapper", showLinksClass].join(" ")}>
            <a
              className="App-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          className={["card-expand-wrapper-more", expandedIconClass].join(" ")}
        >
          <IconRotateAction
            iconName="expand"
            rotated={expanded}
            onRotate={handleExpandClick}
            color={colors.typography}
          />
        </div>
      </div>
    </Grow>
  );
};

CardBase.defaultProps = {
  favorite: false,
  selected: false,
};

const mapDispatchToProps = (dispatch) => ({
  onSelectedPost: ({ id }) => dispatch(actions.setSelectedPost({ id })),
  onFavoritePost: ({ id }) => dispatch(actions.setFavoritePost({ id })),
  onDeletePost: ({ id }) => dispatch(actions.deletePost({ id })),
});

const enhance = compose(connect(null, mapDispatchToProps));

const Card = enhance(CardBase);

export { Card, CardBase };
