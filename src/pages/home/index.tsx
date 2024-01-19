import React from 'react'
import raketo from "../../assets/raketo.webp";
import Text from '../../components/Text/Text';
import "./style.scss";

type Props = {}

function HomePage({ }: Props) {
  return (
    <div className='home flex flex-col items-center pt-32'>
      <img src={raketo} alt="raketo-img" className="home__img home__img--filter" />
      <div className="pt-5">
        <Text
          color="light-600"
          size="lg"
          className='text-center'
        >
          Raketo ato izay rehetra ataonao.<br /> Arahao ny fivoaranao rehetra.
        </Text>
      </div>
    </div>
  )
}

export default HomePage