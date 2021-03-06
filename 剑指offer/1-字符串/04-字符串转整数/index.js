/**
 * Q:
 * 实现一个atoi函数，使其能将字符串转换成整数
 * 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空字符为止，
 * 当我们寻找到的第一个非空字符为正或者负号时，则将该符号与后面尽可能多的连续数字组合起来，作为该整数的正负号；
 * 假如第一个非空字符串是一个数字，则直接将其与之后的连续的数字字符组合起来，形成整数。
 * 注意：
 * 假如该字符串中的第一个非空格字符不是一个有效整数字符，字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。
 * 在任何情况下，若函数不能进行有效的转换时，请返回0。
 * 说明：
 * 假设我们的环境只能存储32位大小的有符号整数，那么其数值范围位[-2^32,2^31-1]
 */

 /**
  * R:
  * 1. 找出第一个非空字符串，判断是不是符号或者数字
  * 2. 如果是符号，判断是正负号
  * 3. 如果符号后面跟的不是数字，那么就是非法的，返回0
  * 4. 确定连续数字字符的起始边界
  * 5. 计算数字字符的代表的数字大小，并且判断是否越界
  * 6. 返回结果的时候注意符号
  */

/**
 * 判断char是否是符号
 * @param {String} char
 */

 function isSymbol(char){
   
 }