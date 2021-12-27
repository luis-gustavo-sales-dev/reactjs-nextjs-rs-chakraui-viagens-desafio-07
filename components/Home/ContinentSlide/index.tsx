import { Box, Flex, Text } from "@chakra-ui/react";
import { Navigation, Pagination, EffectFade, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";

export default function ContinentSlide () {
  const continents: string[] = ['africa', 'america', 'antarctica', 'asia', 'europe', 'oceania']
  return (
    <Box margin="52px 100px 40px">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, EffectFade]}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {continents.map((continent) => {
          return (
            <SwiperSlide key={continent}>
              <Flex
                backgroundImage={`/images/slide/${continent}.jpg`}
                height="450px"
                backgroundPosition="center"
                backgroundSize="cover"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Text
                  fontSize="48px"
                  fontWeight="bold"
                  lineHeight="72px"
                  color="white"
                  backgroundColor="rgba(0,0,0,0.5)"
                  textAlign="center"
                  width="100%"
                  display="block"
                >
                  {continent.toUpperCase()}
                </Text>
                <Text
                  fontSize="24px"
                  marginTop="16px"
                  fontWeight="bold"
                  lineHeight="36px"
                  color="white"
                  textAlign="center"
                  backgroundColor="rgba(0,0,0,0.5)"
                  width="100%"
                >
                  O continente mais antigo.
                </Text>
              </Flex>
            </SwiperSlide>
          );
        })}

        <div className="swiper-pagination"></div>
      </Swiper>
    </Box>
  );
}