const apiKey = 'abYiA8-wm9HRgWKJQiDZ8u3sBSMQiE-G8Q9Z55KKPzWMbi_yWEk3XGvOcirdCFGT0cVEeF9slcoKnhcz2oALndNfIVlhtYA7VvI-pkp1MlqROTvK1tX8Jignc-gNW3Yx';
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
  }).then(jsonResponse => {
    if(jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => ({
        id: business.id,
        imageSrc: business.image_url,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count
      }));
      }
    });
  }
};

export default Yelp;
