/**
 * [3, 41, 52, 26, 38, 57, 9, 49]
 *
 * Массив делится на более короткие, в нашем случае 8 элементов,
 * Поэтому в глубине рекурсии сформируются пары и будут мержится
 * тоже в пары после сортировки.
 *
 * На внутреннем уровне изменят порядок только пара элементов 2 и 3:
 * [3, 41, 26, 52, 38, 57, 9, 49]
 *
 * После мержа с соседними парами:
 * [3, 26, 41, 52, 9, 38, 49, 57]
 * 
 * Остаётся последний уровень мержа:
 * [3, 9, 26, 41, 38, 49, 52, 57]
 */
