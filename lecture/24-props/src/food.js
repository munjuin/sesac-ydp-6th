const Food = (props) => {
  return (
    <>
      <h1>
        내가 좋아하는 음식은 <span style={{ color: "red" }}>{props.name}</span>
      </h1>
    </>
  );
};

Food.defaultProps = {
  food: "피자",
};

export default Food;
