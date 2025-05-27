z/**
 * @typedef {Object} User
 * @property {string} _id
 * @property {string} username
 * @property {string} email
 * @property {string} createdAt  
 */

/**
 * @typedef {'like' | 'heart' | 'fire'} ReactionType
 */

/**
 * @typedef {Object} Reaction
 * @property {string} _id
 * @property {ReactionType} type
 * @property {User|string} user
 * @property {string} post
 * @property {string} createdAt  
 */

/**
 * @typedef {Object} Comment
 * @property {string} _id
 * @property {string} content
 * @property {User} author
 * @property {string} post
 * @property {string} createdAt  
 */

/**
 * @typedef {Object} Post
 * @property {string} _id
 * @property {string} title
 * @property {string} content
 * @property {User} author
 * @property {string[]} tags
 * @property {string} createdAt  
 * @property {string} [image]
 * @property {{ _id: ReactionType; count: number }[]} [reactionsSummary]
 */

/**
 * @typedef {Object} LoginResponse
 * @property {string} token
 */

/**
 * @template T
 * @typedef {Object} PaginatedResponse
 * @property {T[]} data
 * @property {number} total
 * @property {number} [page]
 * @property {number} [limit]
 */
