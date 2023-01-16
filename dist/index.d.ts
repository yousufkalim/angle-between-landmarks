/**
 * Calculate angles between landmarks
 * @author Yousuf Kalim
 */
interface Landmarks {
    x: number | string;
    y: number | string;
}
/**
 * With this function we will calculate the degrees of an angle
 * @return {Number} degree 0 to 360
 * @param landmarks1
 * @param landmarks2
 * @param landmarks3
 * @param opt
 */
declare const findAngle: (landmarks1: Landmarks, landmarks2: Landmarks, landmarks3: Landmarks, opt?: {
    small: boolean;
    round: boolean;
}) => number;
export default findAngle;
