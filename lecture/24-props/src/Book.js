const Book = (props) => {
  const url = "../public/logo192.png";
  return (
    <>
      <h1>이번주 베스트셀러</h1>
      <img src={url} alt="" />
      <h2>{props.title}</h2>
      <p>저자: {props.author}</p>
      <p>판매가: {props.price}</p>
      <p>구분: {props.type}</p>
    </>
  );
};

export default Book;
