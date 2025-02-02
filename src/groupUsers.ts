/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (users: Array<unknown>): Record<'employees' | 'contractors', Array<unknown>> {
  return {
    employees: users.filter((user: any) => user.type === 'EMPLOYEE'),
    contractors: users.filter((user: any) => user.type === 'CONTRACTOR')
};
};
