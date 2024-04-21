import { useQuery } from "@tanstack/react-query";
const API_KEY = process.env.REACT_APP_TOUR_API_KEY;

export const useDetail = ({ contentId }) => {
    const {data,isLoading,isError} = useQuery({
      queryKey: ["detailData"],
      queryFn: () =>
      fetch(
        `https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=ETC&MobileApp=test&contentId=${contentId}&serviceKey=${API_KEY}&_type=json&defaultYN=Y&firstImageYN=Y&catcodeYN=Y&addrinfoYN=Y&overviewYN=Y`
        ).then((res) => res.json()),
        // select:(response)=>response.body
        // .response?.body.items.item;
      });
      return { data, isLoading, isError };
    };