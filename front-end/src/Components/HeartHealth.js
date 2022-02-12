import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  return (
    <>
      {snackHealth ? <img src={heartSolid} alt="solid heart" /> :  <img src={heartOutline} alt="heart outline" />}
    </>
  );
}

export default HeartHealth;
