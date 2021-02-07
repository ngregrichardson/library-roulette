import Chamber from "./chamber";

const ChamberGroup = ({ leftBullet, rightBullet }) => (
  <>
    <Chamber left={0} transform={"translate(35%, -50%)"} bullet={leftBullet} />
    <Chamber
      right={0}
      transform={"translate(-35%, -50%)"}
      bullet={rightBullet}
    />
  </>
);

export default ChamberGroup;
