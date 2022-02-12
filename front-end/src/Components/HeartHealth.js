import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

//Argument for HeartHealth should be passed as {snackHealth} on /snacks/:id page
function HeartHealth(snackHealth) {
  return (
    <>
      {snackHealth ? <img src={heartSolid} alt="solid heart" /> : <img src={heartOutline} alt="heart outline" />}
    </>
  );
}

export default HeartHealth;
