/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function firstBadVersion(n: number): number {
    let left = 1;
    let right = n;

    while (left < right) {
      const midpoint = Math.floor((left + right) / 2);

      if (isBadVersion(midpoint)) {
        right = midpoint;
      } else {
        left = midpoint + 1;
      }
    }

    return left;
  };
};
