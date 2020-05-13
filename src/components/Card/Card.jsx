import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { IconAction, IconRotateAction } from "../common";
import { colors } from "../../styles/colors";
import "./card.css";

const title =
  "Development of Advanced Anti-Reflection Coatings for High Performance Solar Energy Applications, Phase II Development of Advanced Anti-Reflection Coatings for High Performance Solar Energy Applications, Phase II";
const startDate = "Apr 2014";
const lastUpdated = "2018-10-10";
const description =
  "MicroLink Devices will increase the efficiency of multi-junction solar cells by designing and demonstrating advanced anti-reflection coatings (ARCs) that will provide a better broadband spectral response than that of conventional anti-reflection coatings.  Advanced coatings of this nature are needed to realize the full performance of the forthcoming generation of multi-junction solar cells, which will contain four or more junctions.  Two approaches to improving the performance of the antireflection coatings will be investigated:   *  develop multilayer dielectric antireflection coatings incorporating LaTiO3 to achieve significantly improved optical coupling between the coverglass and cell at the ultraviolet and infrared ends of the spectral range of interest; and  *  develop a structure and corresponding fabrication process to oxidize the Al-containing window layer in order to reduce the absorption of light at the short-end of the spectral range of interest, thus providing extra useable photons to the cell.     These two technologies will be integrated into a hybrid design which will provide the best possible coupling of light from cover glass to cell in order to achieve the highest possible efficiency in next-generation devices containing four or more junctions.  It is expected that the new coatings will enable a relative efficiency increase of at least 7%, corresponding to a 2.5% absolute efficiency increase.  The reliability and radiation tolerance of these materials and the solar cells incorporating the new designs will be tested.";

const CardBase = (props) => {
  const { favorite, selected } = props;
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

  return (
    <div className="card-container">
      <div className={["card-wrapper", expandedContentClass].join(" ")}>
        <div className="card-header">
          <h3>{title}</h3>
          <div className="card-icon-wrapper">
            <IconAction iconName="favorite" color={favoriteColor} />
            <IconAction iconName="selected" color={selectedColor} />
          </div>
        </div>
        <p className="card-subtitle">{`Start date: ${startDate}`}</p>
        <p className="card-subtitle">{`Last Updated: ${lastUpdated}`}</p>
        <p className={["card-description", expandedDescriptionClass].join(" ")}>
          {description}
        </p>
        <div className={["card-link-wrapper", showLinksClass].join(" ")}>
          <a
            className="App-link"
            href="https://reactjs.org"
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
  );
};

CardBase.defaultProps = {
  favorite: false,
  selected: false,
};

const mapDispatchToProps = (dispatch) => ({});

const enhance = compose(connect(null, mapDispatchToProps));

const Card = enhance(CardBase);

export { Card, CardBase };
