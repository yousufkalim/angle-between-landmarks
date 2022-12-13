/**
 * Calculate angles between landmarks
 * @author Yousuf Kalim
 */

/**
 * With this function we will calculate the degrees of an angle
 * @param {Number} x1 first joint's x-axis
 * @param {Number} y1 first joint's y-axis
 * @param {Number} x2 second joint's x-axis
 * @param {Number} y2 second joint's y-axis
 * @param {Number} x3 third joint's x-axis
 * @param {Number} y3 third joint's y-axis
 * @param {Boolean} small boolean value to check if we have to return lower or upper angles
 * @param {Boolean} round boolean value to check if we have to return round
 * @return {Number} degree 0 to 360
 */
const calculateDegrees = (x1, y1, x2, y2, x3, y3, small, round) => {
  // Making the radians from joint angles
  const A = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const B = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
  const C = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
  const jointAngleRadians = Math.acos((B * B + A * A - C * C) / (2 * B * A));

  // Making the degree from radians angle
  let jointAngleDegrees = Math.round((jointAngleRadians * 180.0) / Math.PI, 1);

  //   This will prevent negative values (it will convert -90 to 270)
  jointAngleDegrees = (jointAngleDegrees + 360) % 360;

  if (small) {
    //  we have to return lower angle
    jointAngleDegrees = Math.min(jointAngleDegrees, 360 - jointAngleDegrees);
  } else {
    //   Otherwise we will send upper angle
    jointAngleDegrees = Math.max(jointAngleDegrees, 360 - jointAngleDegrees);
  }

  if (round) {
    //   Making round from 0
    jointAngleDegrees = Math.round(jointAngleDegrees, 0);
  }

  // Finally return the calculated angle
  return jointAngleDegrees;
};

// This function will validate the arguments
const validateArgs = (landmarks1, landmarks2, landmarks3, opt) => {
  if (!landmarks1 || !landmarks2 || !landmarks3) {
    throw new Error('Please provide landmarks');
  }
  if (!opt) {
    throw new Error('Please provide options');
  }
  if (
    [landmarks1, landmarks2, landmarks3].some(
      (landmark) => isNaN(parseFloat(landmark.x)) || isNaN(parseFloat(landmark.y)),
    )
  ) {
    throw new Error('Please provide landmarks with correct x and y values');
  }
  if (typeof opt.small !== 'boolean' || typeof opt.round !== 'boolean') {
    throw new Error('Please provide options with correct small and round values');
  }

  return {
    landmarks1: {
      x: parseFloat(landmarks1.x),
      y: parseFloat(landmarks1.y),
    },
    landmarks2: {
      x: parseFloat(landmarks2.x),
      y: parseFloat(landmarks2.y),
    },
    landmarks3: {
      x: parseFloat(landmarks3.x),
      y: parseFloat(landmarks3.y),
    },
  };
};

/**
 * With this function we will calculate the degrees of an angle
 * @return {Number} degree 0 to 360
 * @param landmarks1
 * @param landmarks2
 * @param landmarks3
 * @param opt
 */
const findAngle = (landmarks1, landmarks2, landmarks3, opt = { small: false, round: true }) => {
  const validatedArgs = validateArgs(landmarks1, landmarks2, landmarks3, opt);
  const { x: x1, y: y1 } = validatedArgs.landmarks1;
  const { x: x2, y: y2 } = validatedArgs.landmarks2;
  const { x: x3, y: y3 } = validatedArgs.landmarks3;
  const { small, round } = opt;
  const angle = calculateDegrees(x1, y1, x2, y2, x3, y3, small, round);
  return angle;
};

export default findAngle;
