/**
 * Подмечу, что речь идёт о РАДИКАЛЬНОМ изменении ЛУЧШЕГО времени.
 * Путём НЕБОЛЬШИХ изменений алгоритма.
 * Действительно, можно оптимизировать неоптимальный алгоритм в целом,
 * но лучшее время и не факт что изменится, либо потребуется совсем переписать.
 *
 * Пришла в голову только пара хаков:
 *
 * Зная род данных, иногда можно попробовать исключить некоторые шаги.
 * Например, мы можем знать что в каком-то ряду чисел элементы не совсем рандомные,
 * а каждое число, например, повторяется ровно по 3 раза. Тогда если алгоритм требует прохода
 * и сравнения с соседями, мы можем делать операции не для каждого соседа.
 *
 * Ну и мой любимый хак из серии быстрых случаев неэффективных алгоритмов.
 * Например, мы применяем т.н. bogosort, или сортировка методом кораблика в бутылке.
 * (Как собрать кораблик в бутылке? Засыпать детали, налить клей, и потрясти столько раз,
 * сколько потребуется, чтобы детали встали в нужное место:))
 * Такая сортировка ожидаемо бесконечно медленная, но она на каждой итерации требует
 * тестовой проверки, отсортировались ли данные. То есть, в лучшем случае, когда
 * данные случайно сразу отсортированы, выполнится за O(n).
 * Можно применить подход с такой проверкой к любому сложному алгоритму. Если
 * алгоритм выполняется, скажем, за O(n^3), можно в начале сделать тест одним проходом,
 * и если данные будут сразу подходящими, мы как раз получим O(n) для лучшего случая.
 * А если мы знаем, что исходные данные точно не пройдут тест, можно один раз
 * поменять местами элементы, и тогда проверить. Сложности в виде O() это не добавит,
 * но в некоторых случаях алгоритм завершится за O(n), что на большом количестве
 * прогонов может быть даже ощутимо.
 */

// понял, про лучшее время) Ну тогда да, согласен))
