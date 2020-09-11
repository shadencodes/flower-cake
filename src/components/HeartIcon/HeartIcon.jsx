import React from 'react';
import { connect } from 'react-redux';

import {
    HeartContainer,
    Heart,
    FavoritesCounter
  } from './HeartIcon.style';

const HeartIcon = ({favoritesCount}) => (
    <HeartContainer>
      <Heart />
      <FavoritesCounter>{favoritesCount}</FavoritesCounter>
    </HeartContainer>
);

const mapStateToProps = (state) => {
  return {
    favoritesCount: state.items.length
  }
}

export default connect(mapStateToProps)(HeartIcon);