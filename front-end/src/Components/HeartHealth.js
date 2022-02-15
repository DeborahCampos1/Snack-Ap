import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({snackHealth}) {
  return (
    <>      
    <p>
      {snackHealth ? <img src={heartSolid} alt="healthy food" /> : <img src={heartOutline} alt="unhealthy food" />}
    </p>
    </>
  )
}

export default HeartHealth;
