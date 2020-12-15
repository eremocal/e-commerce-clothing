const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/drDcVGk/e30bdf177914ad41f1e22f8712e70716.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl:
        'https://i.ibb.co/NLK33p5/Hooded-With-Fur-font-b-Thicken-b-font-Warm-Cotton-Liner-Denim-Jackets-font-b-Women.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/QFgHBWQ/crop.jpg',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/SKfNTWn/IU-Profile.webp',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl:
        'https://i.ibb.co/G9WBnt8/MV5-BMTM1-NDU4-OWYt-OGYx-NS00-Nz-A0-LWIy-ODUt-MDcy-NDQz-MDU4-ZDdl-Xk-Ey-Xk-Fqc-Gde-QXVy-Nzk0-NTA5-NQ.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
