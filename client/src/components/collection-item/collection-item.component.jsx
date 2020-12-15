import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  CollectionItemImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  CollectionItemButton,
} from './collection-item.styles';

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>₱{price}</PriceContainer>
      </CollectionFooterContainer>
      <CollectionItemButton onClick={() => addItemToCart(item)} inverted>
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
