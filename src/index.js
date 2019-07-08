/** @module browserslist-config-jaid-node */

/**
 * Returns the number of seconds passed since Unix epoch (01 January 1970)
 * @function
 * @returns {number} Seconds since epoch
 * @example
 * import browserslistConfigJaidNode from "browserslist-config-jaid-node"
 * const result = browserslistConfigJaidNode()
 * result === 1549410770
 */
export default () => Math.floor(Date.now() / 1000)