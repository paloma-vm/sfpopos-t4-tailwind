function MyComp(props) {
    return (
    <div>
      <h1>{props.message}</h1>
      <p>{props.value}</p>
    </div>
    );
  }
// had to include the return statement
  export default MyComp