import HeaderText from "./HeaderText"

export default function Drink({drink}) {

  return (
    <>
      <h1>
        Would you like to drink some {drink} ?
        <HeaderText text='추가텍스트' />
      </h1>
    </>
  )
}