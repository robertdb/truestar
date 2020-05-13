import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Loader } from "../common";
import { actions, selectors } from "../../ducks/post";
import { Card } from "../Card";
import "./listCard.css";

const CardListBase = (props) => {
  const { posts, isLoading, getPosts } = props;

  useEffect(() => {
    getPosts();
  }, []);

  let component = isLoading ? (
    <div className="loader-wrapper">
      <Loader />
    </div>
  ) : (
    posts.map((post) => (
      <div className="list-card-section" index={post.id}>
        <Card {...post} />
      </div>
    ))
  );

  return <div className="list-card-container">{component}</div>;
};

const mapStateToProps = (state) => {
  return {
    posts: selectors.getPost(state),
    isLoading: selectors.isLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(actions.getPosts()),
});

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

const CardList = enhance(CardListBase);

export { CardList, CardListBase };
