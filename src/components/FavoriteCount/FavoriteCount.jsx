import React from 'react';
import { useSelector } from 'react-redux';

const FavoriteCount = () => {
  const favoriteStore = useSelector((store) => store.favouriteCart.favoriteId)

    return (
        <span className='font-semibold'>
            {favoriteStore?.length}
        </span>
    );
};

export default FavoriteCount;