import axios from 'axios';


const searchKakao = axios.create({
    baseURL: 'https://dapi.kakao.com', // 기본 path
  headers: {
    Authorization: 'KakaoAK 5970c650e422ab0ff9838fc85d92a330',
  },
});

// image search api
export const bookSearch = (params) => {
    return searchKakao.get('/v2/search/image', { params });
};
