// @ts-ignore
import Preloader from "@/components/elements/preloader";
const loadingScreen = () => {
  return (
    <>
      <div id="loadingScreen">
        <div>
          <img src="/images/ibisdev-logo.svg" width="200px" />
          <br />
          <br />
          <Preloader width={"50px"} height={"50px"} />
          <div>Loading model...</div>
        </div>
      </div>
    </>
  );
};

export default loadingScreen;
