import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  MenuItemImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitile,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <MenuItemImageContainer className='background-image' imageUrl={imageUrl} />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitile>SHOP NOW</ContentSubtitile>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
