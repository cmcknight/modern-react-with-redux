// Access Key
// DJmhQe4Rgr-i6J7GcfKBOw0XuqyhWQfVrelvHp5FE9o

// Secret Key
// GBzgw04BG-eGt6J5ScDMi-YaVozGwzhZzNLIgWQw9QA

// API Location
// https://api.unsplash.com/

// Authorization
// Authorization: Client-ID YOUR_ACCESS_KEY

// Search request
// GET /search/photos/search/photos?query=search_term

import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID DJmhQe4Rgr-i6J7GcfKBOw0XuqyhWQfVrelvHp5FE9o',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
