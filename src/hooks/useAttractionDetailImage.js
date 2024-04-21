import { useQuery } from "@tanstack/react-query";
const API_KEY = process.env.REACT_APP_TOUR_API_KEY;

export const useDetailImage = ({ contentId,contentTypeId }) => {
    const {data,isLoading,isError} = useQuery({
      queryKey: ["detailImage",{contentId,contentTypeId}],
      queryFn: () =>
      fetch(
        `https://apis.data.go.kr/B551011/KorService1/detailInfo1?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${contentId}&contentTypeId=${contentTypeId}`
        ).then((res) => res.json()),
        // select:(response)=>response.body
        // .response?.body.items.item;
      });
      return { data, isLoading, isError };
    };